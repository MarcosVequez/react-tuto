import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
    container: {
        width: '1200px',
        margin: 'auto',
        marginTop: '100px'
    },
    topContainer: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    topRightContainer: {
        padding: '40px',
        textAlign: 'right'
    },
    image: {
        width: '500px',
        height: 'auto'
    },
    textBrand: {
        fontSize: '2rem !important',
        fontWeight: '600 !important'
    },
    textName: {
        fontSize: '1.2rem !important'
    },
    textPrice: {
        marginTop: '80px !important',
        fontSize: '2.4rem !important',
        fontWeight: '600 !important'
    },
    bottomContainer: {
        marginTop: '40px'
    },
    bottomHeader: {
        fontSize: '1.6rem !important',
        fontWeight: '500 !important',
        borderBottom: '1px solid lightgrey',
        marginTop: '40px !important',
        marginBottom: '20px !important'
    }
});

export default useStyles;