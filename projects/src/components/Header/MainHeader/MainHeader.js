import React from 'react';
import Container from '@mui/material/Container';
import { Link, Box,Typography } from '@mui/material';
import logoImg from '../../../images/logo.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function MainHeader() {
    return (
      <>
        <Container maxWidth='xl'>
        <Box display="flex" 
            py="20px"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap="20px 0"
          >
          <Box maxWidth="165px"
                    component="img"
                    alt="Site Logo"
                    src={logoImg}
                  />
          <Box display="flex"
              flexWrap="wrap"
              gap="20px 0">
            <Link href="#" mx="25px" fontSize="14px" color="commonBlack.main">Home</Link>
            <Link href="#" mx="25px" fontSize="14px" color="commonBlack.main">Shop</Link>
            <Link href="#" mx="25px" fontSize="14px" color="commonBlack.main">About us</Link>
            <Link href="#" mx="25px" fontSize="14px" color="commonBlack.main">Contact us</Link>
            <Link href="#" mx="25px" fontSize="14px" color="commonBlack.main">Certificates</Link>
          </Box>
          <Box display="flex" gap="0 10px">
            <SearchIcon color="primary" fontSize="large" />
            <ShoppingCartIcon color="primary" fontSize="large" />
            <PersonOutlineOutlinedIcon color="primary" fontSize="large" />
            <Box display="flex" flexDirection="column" gap="0 10px">
            <Typography variant="span" color="commonBlack.main">Welcome!</Typography> 
            <Typography variant="span" color="commonBlack.main">Sign In | Register!</Typography>
            </Box>
          </Box> 
        </Box>         
        </Container>
      </>
    );
}