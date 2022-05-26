const mongoose = require('mongoose');

mongoose
	.connect('mongodb://0.0.0.0:27017/usersdb')
	// .connect('mongodb://0.0.0.0:27017/usersdb')
	.catch((error) => console.error(error));
