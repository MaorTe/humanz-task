import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useUsers } from '../context/users-context';

const columns = [
	{ field: 'Name', headerName: 'Name', width: 130 },
	{ field: 'Email', headerName: 'Email', width: 130 },
	{ field: 'ID', headerName: 'ID', width: 130 },
	{ field: 'Phone', headerName: 'Phone', width: 130 },
	{ field: 'IP', headerName: 'IP', width: 130 },
	{ field: 'GeoInfo-Country', headerName: 'GeoInfo-Country', width: 130 },
];

export default function UsersTable({ users, setSelectedIds }) {
	const { newUserIP } = useUsers();

	React.useEffect(() => {
		if (newUserIP) console.log(newUserIP);
	}, [newUserIP]);

	return (
		<div style={{ height: 400, width: '100%' }}>
			<DataGrid
				rows={users}
				columns={columns}
				getRowId={(row) => row.ID}
				pageSize={5}
				rowsPerPageOptions={[5]}
				checkboxSelection
				onSelectionModelChange={(ids) => setSelectedIds(ids)}
			/>
		</div>
	);
}
