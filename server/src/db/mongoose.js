const mongoose = require('mongoose');

let url;
if (process.env.NODE_ENV) {
	url = process.env.ATLAS;
	console.log(url);
} else {
	url = require('./atlas');
	console.log(url)
}
//
mongoose.connect(url, {
	useNewUrlParser: true,
	// useCreateIndex: true,
	// useFindAndModify: false,
	useUnifiedTopology: true,
});
