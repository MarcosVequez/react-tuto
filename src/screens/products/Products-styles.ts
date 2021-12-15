import { makeStyles } from '@mui/styles';

const useStyles: any = makeStyles({
    container: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    header: {
        margin: '6rem',
        fontSize: '20px'
    },
    productsContainer: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    loaderContainer: {
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    loader: {
        width: '30vw'
    }
});

export default useStyles;