import { makeStyles } from "@material-ui/core/styles";
import imprintheme from "./theme/theme";
import Image from '../../images/imprintHero.jpg'

const useStyles = makeStyles((theme) => ({
    topHeader: {
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    listTop: {
        display: 'flex',
        fontSize: '15px'
    },
    search: {
        width: '100%',
        background: imprintheme.palette.common.white,
    },
    supportIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        '& li': {
            width: "120px",
            color: imprintheme.palette.common.white,
        }
    },

    menuIcon: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'inline-block',
            color: 'white',
            marginRight: '10px'
        }
    },
    middleHeader: {
        '& div:nth-child(2)': {
            [theme.breakpoints.dow('sm')]: {
                order: 3,
            }
        },
        '& div:nth-child(3)': {
            [theme.breakpoints.down('sm')]: {
                order: 2,
            }
        }
    },

    menu: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        '& li': {
            width: 'auto',
            padding: '0',
            '& a': {
                padding: '10px 60px',
                color: imprintheme.palette.blackColor.main,
                fontSize: '18px',
                [theme.breakpoints.down('md')]: {
                    padding: '10px 40px',
                },
                [theme.breakpoints.down('sm')]: {
                    padding: '10px 25px',
                    fontSize: '15px'
                },

            },
            '&+li::before': {
                backgroundColor: '#444',
                content: "''",
                fontSize: '13px',
                width: '1px',
                height: '25px'

            }
        },

        [theme.breakpoints.down('xs')]: {
            display: 'none'
        },

    },
    // main banner

    mainBanner: {
        minHeight: 690,
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    bannerText: {

        '& button': {
            marginRight: '15px',
            marginTop: '20px'
        }
    },

    bold: {
        fontWeight: 'bold',
       
    }

}));
export default useStyles;
