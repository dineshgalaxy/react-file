import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { Box, Button } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';

export default function TopHeader() {
    return (
      <AppBar position="static" color="primary">
          <Toolbar>
            <Container maxWidth='xl'>
            <Box display="flex" flexWrap="wrap" gap="0 50px">
              <Button variant='text' href="mailto:thirumalaiifireworks@gmail.com" startIcon={<MailOutlineIcon />}>thirumalaiifireworks@gmail.com</Button>
              <Button variant='text' href="tel:9677579819" startIcon={<LocalPhoneIcon />}>9677579819 , 9751475942</Button>
              <Button variant='text' startIcon={<AddLocationIcon />}>2/1552, Y RAMASAMY NAGAR, SITHURAJAPURAM, SIVAKASI-626123.</Button>
            </Box>
          </Container>
          </Toolbar>    
      </AppBar>      
    );
}