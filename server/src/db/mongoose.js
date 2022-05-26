const mongoose = require('mongoose');

let url;
if (process.env.NODE_ENV) {
	url = process.env.ATLAS;
	console.log(url);
} else {
	url =
		'mongodb+srv://maor1:m190998@cluster0humanz.6vrlw.mongodb.net/?retryWrites=true&w=majority';
	// url = require('./atlas');
	console.log(url);
}
//
mongoose.connect(url, {
	useNewUrlParser: true,
	// useCreateIndex: true,
	// useFindAndModify: false,
	useUnifiedTopology: true,
});
