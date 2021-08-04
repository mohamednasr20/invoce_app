import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: '25px 10px',
    borderRadius: 8,
    minWidth: 672,
  },
  boldFont: {
    fontWeight: 700,
  },
  lightFont: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
  },
  status: {
    color: ({ invoice }) =>
      invoice.status === 'pending' ? '#FF8F00' : 'green',
  },
  icon: {
    cursor: 'pointer',
  },
}));

export default useStyles;
