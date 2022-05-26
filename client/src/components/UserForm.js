import React from 'react';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),

		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '300px',
		},
		'& .MuiButtonBase-root': {
			margin: theme.spacing(2),
		},
	},
}));

const israeliPhoneRegex = /^\+?(972|0)(-)?0?(([23489]{1}\d{7})|[5]{1}\d{8})$/;
const ipAddressRegex = /^(?:[0-9]{1,3}\.){3}[0-9]{1,3}/;

const UserForm = ({ handleFormSubmit, handleClose }) => {
	const classes = useStyles();
	const { handleSubmit, control } = useForm();

	const onSubmitForm = (data) => {
		handleClose();
		handleFormSubmit(data);
	};
	return (
		<form className={classes.root} onSubmit={handleSubmit(onSubmitForm)}>
			<Controller
				name="Name"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Name"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						size="medium"
					/>
				)}
				rules={{ required: 'Name required' }}
			/>
			<Controller
				name="Email"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Email"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="email"
						size="medium"
					/>
				)}
				rules={{
					required: 'Email required',
					pattern: {
						value: /\S+@\S+\.\S+/,
						message: 'Invalid email',
					},
				}}
			/>
			<Controller
				name="ID"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="ID"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="number"
						size="medium"
					/>
				)}
				rules={{
					required: 'ID required',
					pattern: { value: /^\d{9}$/, message: 'ID should contain 9 digits' },
				}}
			/>
			<Controller
				name="Phone"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="Phone"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						type="tel"
						size="medium"
					/>
				)}
				rules={{
					required: 'Phone required',
					pattern: {
						value: israeliPhoneRegex,
						message: 'Invalid Phone Number',
					},
				}}
			/>
			<Controller
				name="IP"
				control={control}
				defaultValue=""
				render={({ field: { onChange, value }, fieldState: { error } }) => (
					<TextField
						label="IP"
						variant="outlined"
						value={value}
						onChange={onChange}
						error={!!error}
						helperText={error ? error.message : null}
						size="medium"
					/>
				)}
				rules={{
					required: 'IP required',
					pattern: {
						value: ipAddressRegex,
						message: 'Invalid IP address',
					},
				}}
			/>
			<div>
				<Button type="submit" variant="contained" color="primary">
					add user
				</Button>
				<Button onClick={handleClose} variant="contained" color="primary">
					close
				</Button>
			</div>
		</form>
	);
};

export default UserForm;
