import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    height: '100vh',
  },
  paper: {
    padding: '40px 30px',
    borderRadius: 8,
  },

  avatar: {
    margin: 'auto',
    backgroundColor: theme.palette.secondary.main,
  },
  header: {
    margin: '20px 0',
  },
  btn: {
    marginTop: '30px',
  },
  signState: {
    marginTop: 20,
  },
  error: {
    color: theme.palette.error.main,
    marginLeft: 10,
  },
}));

export default useStyles;
