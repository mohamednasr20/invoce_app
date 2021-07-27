import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
    padding: '30px 15px',
    borderRadius: 8,
  },
  statusFlex: {
    display: 'flex',
  },

  status: {
    color: ({ invoice }) =>
      invoice.status === 'pending' ? '#FF8F00' : 'green',
    marginLeft: 30,
  },
  btn: {
    marginRight: 8,
  },
}));

export default useStyles;
