import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: '25px 10px',
    borderRadius: 8,
    minWidth: 680,
  },
  boldFont: {
    fontWeight: 700,
  },
  lightFont: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  status: {
    fontWeight: 'bold',
    color: ({ invoice }) =>
      invoice.status === 'pending' ? '#FF8F00' : '#33D69F',
    background: ({ invoice }) =>
      invoice.status === 'pending'
        ? 'rgb(255, 143, 0, 0.1)'
        : 'rgb(51, 214, 159, 0.1)',
    borderRadius: '6px',
    textAlign: 'center',
  },
  icon: {
    cursor: 'pointer',
  },
}));

export default useStyles;
