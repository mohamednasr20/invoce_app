import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '80px',
    backgroundColor: '#252945',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  logoDiv: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    background: theme.palette.primary.main,
    borderRadius: ' 0 20px 20px 0',
    marginBottom: 'auto',
    marginRight: 'auto',
    borderBottomRightRadius: 20,
  },
  logo: {
    width: 40,
    height: 37,
  },
  flexSecondary: {
    display: 'flex',
  },

  icons: {
    width: 20,
    height: 20,
    display: 'block',
    cursor: 'pointer',
    marginLeft: 'auto',
  },

  avatar: {
    marginLeft: '80px',
    marginRight: '30px',
  },
}));

export default useStyles;
