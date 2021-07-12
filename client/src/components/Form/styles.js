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

  paper: {
    padding: 20,
    borderRadius: 15,
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

  btnList: {
    marginTop: 20,
    borderRadius: 15,
  },
}));

export default useStyles;
