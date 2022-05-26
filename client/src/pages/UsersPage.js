import React from 'react';
import Button from '@mui/material/Button';

import Search from '../components/Search';
import UsersTable from '../components/UsersTable';
import UserModal from '../components/UserModal';
import { useUsers } from './../context/users-context';
import { getBatchGeolocation } from './../api/geoLocationApi';

function UsersPage() {
	const [selectedIds, setSelectedIds] = React.useState([]);
	const [geolocation, setGeolocation] = React.useState([]);

	const { users, handleCreateUser, handleFilter, handleDelete } = useUsers();

	React.useEffect(() => {
		const usersArr = users.filter((user, index) => index < 5);
		const usersIP = usersArr.map((user) => user.IP);

		// getBatchGeolocation(usersIP)
		// 	.then((data) => setGeolocation([...data]))
		// 	.catch((e) => console.log(e));
	}, [users]);

	const onHandleDelete = () => {
		handleDelete(selectedIds);
	};

	// function getBatchUsersGetlocation() {
	// 	console.log(geolocation);
	// 	geolocation.map((user, index) => {
	// 		return <div key={index}>{user}</div>;
	// 	});
	// }
	return (
		<>
			<div style={{ maxWidth: '850px', margin: '0 auto' }}>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
					}}>
					<Search handleFilter={handleFilter} />
					<UsersTable users={users} setSelectedIds={setSelectedIds} />
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						width: '100%',
						marginTop: '25px',
					}}>
					<Button
						onClick={onHandleDelete}
						variant="contained"
						disabled={!selectedIds.length}>
						delete
					</Button>
					<UserModal handleFormSubmit={handleCreateUser} />
				</div>
			</div>
			{/* {getBatchUsersGetlocation()} */}
		</>
	);
}

export default UsersPage;
