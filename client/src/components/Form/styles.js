import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100vw',
    background: 'rgba(0, 0 , 0 , 0.4)',
    overflow: 'scroll',
    fontSize: '12px',
  },
  formContainer: {
    width: '504px',
    height: '100vh',
    marginLeft: '80px',

    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
      width: '100%',
    },
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,

    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },

  paper: {
    paddingTop: 40,
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
    display: 'flex',
  },

  btn: {
    marginRight: 10,
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '12px',
    lineHeight: '15px',
    spaceLetter: '-0.25',
  },

  btnList: {
    marginTop: 20,
    borderRadius: 15,
  },
}));

export default useStyles;
