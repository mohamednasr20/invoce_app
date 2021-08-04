import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  container: {
    maxWidth: 730,
    margin: 'auto',
  },
}));

export default useStyles;
