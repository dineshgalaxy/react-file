import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import BannerImg from '../../images/banner.jpg';
import { customKaltranTheme } from '../../theme/theme';
const useStyles = makeStyles({
    banner:{
        display: 'flex',
        backgroundImage: `url(${BannerImg})`,
        backgroundSize: 'cover',
        height: '560px',
        alignItems: 'center',
    }
});

export default function Banner() {
    const classes = useStyles();
    return (
     <Box className={classes.banner}> 
         <Container maxWidth="xl">
           <Box maxWidth="444px">
               <Typography variant="h2" fontWeight="700" fontSize="43px" color="common.white" mb="30px">
                   A GREAT SELECTION OF HIGH QUALITY
                   FIREWORKS!</Typography>
                <Button variant="outlined" fontSize={customKaltranTheme.typography.h4}>
                    Learn more
                </Button>
           </Box>
         </Container>
     </Box>   
    );
}