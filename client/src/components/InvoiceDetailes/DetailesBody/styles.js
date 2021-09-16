import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
    padding: '30px',
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '40px 0',
  },
  bold: {
    fontWeight: '700',
    fontSize: '16px',
  },
  paymentDue: {
    marginTop: 30,
  },
  label: {
    marginBottom: 10,
  },
}));

export default useStyles;
