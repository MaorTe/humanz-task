const csvData = require('./csvdata');
const User = require('../db/models/User');

function csvDataToObjectArray() {
	const arr = csvData.replaceAll('"', '').split('\n');
	return arr.map((item) => {
		const person_details = item.split(',');
		return {
			Name: person_details[0],
			Email: person_details[1],
			ID: person_details[2],
			Phone: person_details[3],
			IP: person_details[4],
		};
	});
}
module.exports = () => {
	const users = rawDataToObjectArray();
	users.map(async (user) => {
		await new User(user).save();
	});
};
