import { Box, Typography } from '@mui/material';
import React from 'react';
import footerLogo from '../../images/footerLogo.png';

export default function footer() {
    return (
        <>
            <Box bgcolor="commonBlack.main" py="40px" textAlign="center">
                <Box component="img"
                    alt="Footer Logo"
                    src={footerLogo}
                />
                <Typography variant="body1" pt="20px" color="common.white">We provide quality eco-friendly crackers as the world is becoming more conscious of the environmental pollution. </Typography>
            </Box>
            <Box bgcolor="commonBlack.dark" py="23px" textAlign="center">
                <Typography variant="body1" color="common.white">© 2021 Thirumalai Fireworks</Typography>
            </Box>
        </>
    );
}