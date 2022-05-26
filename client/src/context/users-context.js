import React from 'react';
import { getUsers, deleteUsers, addUser } from '../api/usersApi';
const UsersContext = React.createContext();

function UsersProvider(props) {
	const [users, setUsers] = React.useState([]);
	const [newUserIP, setNewUserIP] = React.useState(null);

	React.useEffect(() => {
		getUsers()
			.then((res) => setUsers(res))
			.catch((e) => console.log(e));
	}, []);

	const handleDelete = React.useCallback(
		async (selectedIds) => {
			try {
				await deleteUsers(selectedIds);
				const filteredUsers = users.filter(
					(user) => !selectedIds.includes(user.ID),
				);
				setUsers(filteredUsers);
			} catch (e) {
				console.log(e);
			}
		},
		[users],
	);
	const handleCreateUser = React.useCallback(
		async (user) => {
			try {
				const newUser = await addUser(user);
				setNewUserIP(newUser?.IP);
				setUsers([...users, user]);
			} catch (e) {
				console.log(e);
			}
		},
		[users],
	);
	const handleFilter = React.useCallback(async (searchTerm, category) => {
		try {
			setUsers(await getUsers(searchTerm, category));
		} catch (e) {
			console.log(e);
		}
	}, []);

	const value = React.useMemo(
		() => ({
			users,
			handleDelete,
			handleCreateUser,
			handleFilter,
			newUserIP,
		}),
		[users, handleDelete, handleCreateUser, handleFilter, newUserIP],
	);

	return <UsersContext.Provider value={value} {...props} />;
}

function useUsers() {
	const context = React.useContext(UsersContext);
	if (context === undefined) {
		throw new Error('useUsers must be used within a UsersProvider');
	}
	return context;
}

export { UsersProvider, useUsers };
