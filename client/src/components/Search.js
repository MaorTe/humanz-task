import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const Search = ({ handleFilter }) => {
	const [category, setCategory] = useState('Name');
	const [selectedCategory, setSelectedCategory] = useState('Name');
	const [inputValue, setInputValue] = useState('');
	const [term, setTerm] = useState('');

	useEffect(() => {
		const timer = setTimeout(() => {
			if (term !== inputValue || category !== selectedCategory) {
				setTerm(inputValue);
				setSelectedCategory(category);
				handleFilter(inputValue, category);
			}
		}, 500);

		return () => {
			clearTimeout(timer);
		};
	}, [category, inputValue, term, handleFilter, selectedCategory]);

	return (
		<Box
			sx={{
				display: 'inline-flex',
				alignItems: 'center',
				mt: '15px',
				marginBottom: '40px',
			}}>
			<Box>
				<TextField
					sx={{ minWidth: 120, width: '350px' }}
					label="Search"
					value={inputValue}
					onChange={(e) => setInputValue(e.target.value)}
					size="medium"
				/>
			</Box>
			<Box sx={{ minWidth: 120 }}>
				<FormControl fullWidth>
					<InputLabel>Search By</InputLabel>
					<Select
						value={category}
						label="Search By"
						onChange={(e) => setCategory(e.target.value)}
						size="medium">
						<MenuItem value="Name">Name</MenuItem>
						<MenuItem value="Email">Email</MenuItem>
						<MenuItem value="ID">ID</MenuItem>
						<MenuItem value="Phone">Phone</MenuItem>
						<MenuItem value="IP">IP</MenuItem>
					</Select>
				</FormControl>
			</Box>
		</Box>
	);
};

export default Search;
