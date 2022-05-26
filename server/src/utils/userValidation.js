const emailRegex = /\S+@\S+\.\S+/;
const israeliPhoneRegex = /^\+?(972|0)(-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;
const ipAddressRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;

module.exports = (user) => {
	if (
		!user.Name ||
		!emailRegex.test(user.Email) ||
		user.ID.length !== 9 ||
		!israeliPhoneRegex.test(user.Phone) ||
		!ipAddressRegex.test(user.IP)
	) {
		return false;
	}
	return true;
};
