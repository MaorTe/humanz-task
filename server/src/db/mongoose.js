const mongoose = require('mongoose');

mongoose
	.connect('mongodb://0.0.0.0:27017/usersdb')
	.catch((error) => console.error(error));

// let url;
// if (process.env.NODE_ENV) {
// 	url = process.env.ATLAS;
// } else {
// 	url = require('./atlas');
// }

// mongoose.connect(url, {
// 	useNewUrlParser: true,
// 	useCreateIndex: true,
// 	useFindAndModify: false,
// 	useUnifiedTopology: true,
// });
