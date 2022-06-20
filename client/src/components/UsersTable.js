import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, UsersTableStyle } from './UsersTable.config';
import { useUsers } from '../context/users-context';
import LinearProgress from '@mui/material/LinearProgress';

export default function UsersTable({ users, setSelectedIds }) {
	const { isLoading } = useUsers();
	return (
		<div style={UsersTableStyle}>
			<DataGrid
				components={{
					LoadingOverlay: LinearProgress,
				}}
				loading={isLoading}
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
