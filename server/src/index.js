const express = require('express');
const cors = require('cors');
const path = require('path');

require('./db/mongoose');
const User = require('./db/models/User');
const userValidator = require('./utils/userValidation');

const app = express();
const port = process.env.PORT || 3002;

app.use(express.json());
app.use(cors());

app.get('/users', async function (req, res) {
	try {
		if (Object.keys(req.query).length === 0) res.send(await User.find({}));
		const { category, term } = req.query;
		const filter = {};
		filter[category] = { $regex: term, $options: 'i' };
		return res.send(await User.find(filter));
	} catch (e) {
		return res.status(500).send();
	}
});

app.post('/users', async function (req, res) {
	try {
		const { user } = req.body;
		if (!userValidator(user)) return res.send({ msg: 'bad credentials' });
		const userDB = await new User(user).save();
		res.send({ msg: 'added new user', IP: userDB.IP });
	} catch (e) {
		res.status(500).send({ msg: 'there were some errors' });
	}
});

app.post('/users/delete', async function (req, res) {
	try {
		const { ids } = req.body;
		await User.deleteMany({
			ID: { $in: ids },
		});
		res.send({ msg: 'deleted selected user/users' });
	} catch (e) {
		res.status(500).send();
	}
});

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});

//deploy to heroku
app.use(express.static(path.join(__dirname, '../../client/build')));
app.get('/*', (req, res) => {
	res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});
