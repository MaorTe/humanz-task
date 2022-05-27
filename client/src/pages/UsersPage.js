import React from 'react';
import Button from '@mui/material/Button';

import Search from '../components/Search';
import UsersTable from '../components/UsersTable';
import UserModal from '../components/UserModal';
import { useUsers } from './../context/users-context';
import Logo from './../components/Logo';

function UsersPage() {
	const [selectedIds, setSelectedIds] = React.useState([]);

	const { users, handleCreateUser, handleFilter, handleDelete } = useUsers();

	const onHandleDelete = () => {
		handleDelete(selectedIds);
	};

	return (
		<>
			<div style={{ maxWidth: '1000px', margin: '0 auto' }}>
				<div>
					<Logo />
				</div>
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
		</>
	);
}

export default UsersPage;
