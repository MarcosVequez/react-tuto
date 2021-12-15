import { makeStyles } from '@mui/styles';
import theme from '../../theme';

const useStyles: any = makeStyles({
    container: {
        cursor: 'pointer',
        position: 'relative',
        width: '300px',
        background: '#fff',
        padding: '16px',
        borderRadius: '6px',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        margin: '20px',
        marginBottom: '50px',
        display: 'flex',
        flexDirection: 'column',

        '&:hover $imageContainer': {
            top: '-35px'
        },

        '&:hover $image': {
            boxShadow: '0 19px 38px rgba(0,0,0,0.20), 0 15px 12px rgba(0,0,0,0.15)'
        }
    },
    imageContainer: {
        position: 'absolute',
        top: '5px',
        left: '50%',
        transform: 'translate(-50%)',
        '-webkit-transform': 'translate(-50%)',
        '-ms-transform': 'translate(-50%)',
        '-moz-transform': 'translate(-50%)',
        '-o-transform': 'translate(-50%)',
        '-khtml-transform': 'translate(-50%)',
        padding: '15px',
        transition: 'all 0.2s ease-in-out'
    },
    image: {
        maxWidth: '300px',
        height: '300px',
        transition: 'all 0.2s ease-in-out',
        borderRadius: '6px'
    },
    brandContainer: {
        paddingTop: '290px',
        display: 'flex',
        justifyContent: 'center'
    },
    brandInnerContainer: {
        zIndex: 999,
        padding: '6px 12px',
        borderRadius: '20px',
        backgroundColor: 'black'
    },
    brandText: {
        color: theme.palette.primary.main,
        fontSize: '0.9rem !important',
        fontWeight: '600 !important'
    },
    titleContainer: {
        display: 'flex',
        flex: 1,
        marginTop: '20px',
        justifyContent: 'center'
    },
    titleText: {
        fontSize: '1.2rem !important'
    },
    actionContainer: {
        borderTop: '1px solid lightgrey',
        marginTop: '40px',
        paddingTop: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    priceText: {
        fontSize: '1.3rem !important',
        fontWeight: '600 !important'
    }
});

export default useStyles;