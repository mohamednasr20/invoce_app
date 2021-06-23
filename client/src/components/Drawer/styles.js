import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 103;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    background: '#252945',
  },

  logoDiv: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    width: 103,
    height: 103,
    background: '#7C5DFA',
    borderRadius: ' 0 20px 20px 0',
    marginBottom: 'auto',
  },
  logo: {
    width: 40,
    height: 37,
  },

  icons: {
    width: 20,
    height: 20,
    marginBottom: 20,
    display: 'block',
    margin: 'auto',
  },

  avatar: {
    margin: '20px auto',
  },
}));

export default useStyles;
