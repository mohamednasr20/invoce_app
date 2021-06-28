import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 504,
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },

  heading: {
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    marginTop: 10,
  },

  space: {
    marginRight: 12,
  },

  btnGroup: {
    display: 'flex',
    marginTop: 20,
  },

  btnRight: {
    marginLeft: 'auto',
  },

  btn: {
    marginRight: 10,
  },
}));

export default useStyles;
