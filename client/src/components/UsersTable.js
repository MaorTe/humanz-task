import React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { columns, UsersTableStyle } from './UsersTable.config';

export default function UsersTable({ users, setSelectedIds }) {
	return (
		<div style={UsersTableStyle}>
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
