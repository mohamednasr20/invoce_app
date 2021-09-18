import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: "'Spartan', sans-serif",
    height: '100%',
    [theme.breakpoints.down('md')]: {
      height: '100vh',
    },
    [theme.breakpoints.down('xs')]: {
      height: '100%',
    },
  },
  container: {
    maxWidth: 730,
    margin: 'auto',
  },
}));

export default useStyles;
