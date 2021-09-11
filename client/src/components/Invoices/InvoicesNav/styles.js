import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 50,
  },

  formControl: {
    minWidth: 120,
    marginRight: 30,
  },

  filterLabel: {
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
  },

  btn: {
    marginTop: 20,
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '12px',
  },
}));

export default useStyles;
