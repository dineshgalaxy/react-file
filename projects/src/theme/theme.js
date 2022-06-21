import { createTheme } from '@mui/material/styles';

export const customKaltranTheme = createTheme({
    '@global':{
        img: {
            maxWidth: '100%',
        },
        a: {
            textDecoration: 'none'
        },
        body: {
            height: '100%',
            width: '100%',
            '& + div': {
                height: '100%'
            }
        },
    },
    typography: {
        fontFamily: "'Open Sans'",
        h3: {
            color: '#444444',
            fontSize: '34px',
            fontWeight: '600',
            letterSpacing: '0'
        },
        h4: {    
            fontSize: '34px',
        },
        span: {
            fontSize: '14px',
            fontWeight: '600',
        },
        body1:{
            fontSize: '18px',
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 960,
            xl: 1168
        }
    },
    palette : {
        primary: {
            main: '#dd0051',
        },
        common:{
            white: '#ffffff',
            black: '#f9f9f9'
        },
        commonBlack: {
            main: '#303030',
            dark: '#272626',
            light: '#333333',

        },
        commonText: {
            main: '#444444'
        }
    },
    components: {
        // Name of the component
        MuiButton: {
          styleOverrides: {
            // Name of the slot
            root: {
              // Some CSS
              borderRadius: 0,
              fontSize: '16px',
              color: '#ffffff',
              textTransform: 'unset',
              fontFamily: "'Open Sans'",
              borderColor: "#ffffff",
              padding: '15px 30px',
            },
            text:{
                fontSize: '12px',
                fontWeight: '600',
                fontStyle: 'normal',
            },
            outlined:{
                '& hover': {
                    borderColor: "#ffffff", 
                }
            }
          },
        },        
        MuiLink:{
            styleOverrides: {
                root: {
                    textDecoration: 'none',
                }
            }
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    padding: '0 32px',
                    boxShadow: '0 6px 14px 0 rgba(0, 0, 0, 0.07)',
                    border: 'solid 1px #ececec',
                    backgroundColor: 'var(--white-two)',
                    '& > div': {
                        padding: '20px 0px !important',
                        textAlign: 'center'
                    }
                },
            }
        },
      },
})