import axios from 'axios';

const api = axios.create({ baseURL: '/' });

export const getUsers = (searchTerm = '', category = '') => {
	if (!searchTerm) return api.get('/users').then((res) => res.data);

	return api
		.get(`users?term=${searchTerm}&category=${category}`)
		.then((res) => res.data);
};

export const deleteUsers = (ids) =>
	api.post('/users/delete', { ids }).then((res) => res.data);

export const addUser = (user) =>
	api.post('/users', { user }).then((res) => res.data);
