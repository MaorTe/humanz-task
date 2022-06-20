import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import UserForm from './UserForm';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const style = {
   position: 'absolute',
   top: '40%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   width: 300,
   bgcolor: 'background.paper',
   border: '2px solid #000',
   boxShadow: 24,
   p: 4,
};
export default function UserModal({ handleFormSubmit }) {
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   return (
      <>
         <Button onClick={handleOpen} variant="contained">
            add user
         </Button>
         <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
               <Typography variant="h6" component="h2">
                  Add User
               </Typography>
               <ThemeProvider theme={theme}>
                  <UserForm handleFormSubmit={handleFormSubmit} handleClose={handleClose} />
               </ThemeProvider>
            </Box>
         </Modal>
      </>
   );
}
