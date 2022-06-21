import React from 'react';
import Container from '@mui/material/Container';
import { Box, Typography} from '@mui/material';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent'; 
import p1 from '../../images/p1.jpg';
const useStyles = makeStyles({
  boxbefor: {
    '&::before':{
      content: '""',
      display: 'block',
      position: 'absolute',
      zIndex: '1',
      left: '0px',
      top: '0',
      bottom: '0',
      border: '1px solid',
      borderWidth: '0 0 0 4px',
      borderColor: '#dd0051',
      marginBottom: '8px',
      marginTop: '4px'
    }
  }
});


export default function TopHeader() {
  const classes = useStyles();
    return (
      <Box bgcolor="common.white" py="80px">
        <Container maxWidth='xl'>
          <Box className={classes.boxbefor} position="relative" mb="65px" pl="10px">
            <Typography variant="span" color="primary">Lorem ipsum</Typography>
            <Typography variant="h3" mt="5px" textTransform="uppercase">Product Category</Typography>
          </Box>
          <Box display="flex" gap="0 50px">
            <Card> 
              <CardContent>
                <Box component="img"
                   
                    alt="p1"
                    src={p1}
                ></Box>
                <Typography typography="h5" mt="40px" fontSize="18px" color="commonBlack.main" gutterBottom>
                  Bomb series
                </Typography>
                
                <Typography typography="h6" fontSize="12px" color="commonBlack.main">
                  Dino Bomb
                </Typography>  
              </CardContent>  
            </Card>
            <Card display="flex"> 
              <CardContent>
                <Box component="img"
                    
                    alt="p1"
                    src={p1}
                ></Box>
                <Typography typography="h5" mt="40px" fontSize="18px" color="commonBlack.main" gutterBottom>
                  Bomb series
                </Typography>
                
                <Typography typography="h6" fontSize="12px" color="commonBlack.main">
                  Dino Bomb
                </Typography>  
              </CardContent>  
            </Card>
            <Card display="flex"> 
              <CardContent>
                <Box component="img"
                   
                    alt="p1"
                    src={p1}
                ></Box>
                <Typography typography="h5" mt="40px" fontSize="18px" color="commonBlack.main" gutterBottom>
                  Bomb series
                </Typography>
                
                <Typography typography="h6" fontSize="12px" color="commonBlack.main">
                  Dino Bomb
                </Typography>  
              </CardContent>  
            </Card>
            <Card display="flex"> 
              <CardContent>
                <Box component="img"
                   
                    alt="p1"
                    src={p1}
                ></Box>
                <Typography typography="h5" mt="40px" fontSize="18px" color="commonBlack.main" gutterBottom>
                  Bomb series
                </Typography>
                
                <Typography typography="h6" fontSize="12px" color="commonBlack.main">
                  Dino Bomb
                </Typography>  
              </CardContent>  
            </Card>
          </Box>
        </Container>
      </Box>
    );
}