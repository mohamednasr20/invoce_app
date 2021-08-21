import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 242,
    height: '80vh ',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  img: {
    width: '100%',
  },
}));

export default useStyles;
