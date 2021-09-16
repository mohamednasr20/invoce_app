import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  header: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '20px',
      marginTop: '10px',
    },
  },

  caption: {
    [theme.breakpoints.down('xs')]: {
      fontSize: '12px',
    },
  },
  formControl: {
    minWidth: 120,
    marginRight: 30,

    [theme.breakpoints.down('xs')]: {
      minWidth: 54,
    },
  },

  filterLabel: {
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
    [theme.breakpoints.down('xs')]: {
      marginRight: 3,
    },
  },

  btn: {
    marginTop: 20,
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '12px',
  },

  [theme.breakpoints.down('xs')]: {
    maxWidth: 90,
  },
}));

export default useStyles;
