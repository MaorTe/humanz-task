import axios from 'axios';

const api = axios.create({ baseURL: 'http://ip-api.com' });

export const getGeolocation = (userIP) =>
	api.get(`/json/${userIP}`).then((res) => res.data);

export const getUsers = (searchTerm = '', category = '') => {
	if (!searchTerm) return api.get('/users').then((res) => res.data);

	return api
		.get(`users?term=${searchTerm}&category=${category}`)
		.then((res) => res.data);
};

export const getBatchGeolocation = (IPs) =>
	api.post('/batch', IPs).then((res) => res.data);
