import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    padding: '30px 15px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '40px 0',
  },
  paymentDue: {
    marginTop: 30,
  },
  label: {
    marginBottom: 10,
  },
}));

export default useStyles;
