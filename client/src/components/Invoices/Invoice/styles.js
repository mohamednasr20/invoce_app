import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: '25px 10px',
    borderRadius: 8,
    fontSize: '12px',
    fontWeight: '500',

    [theme.breakpoints.down('sm')]: {
      padding: '25px',
    },
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
    paddingTop: '10px',
    color: ({ invoice }) =>
      invoice.status === 'draft'
        ? theme.palette.text.primary
        : invoice.status === 'pending'
        ? '#FF8F00'
        : '#33D69F',
    background: ({ invoice }) =>
      invoice.status === 'draft'
        ? theme.palette.divider
        : invoice.status === 'pending'
        ? 'rgb(255, 143, 0, 0.1)'
        : 'rgb(51, 214, 159, 0.1)',
    borderRadius: '6px',
    textAlign: 'center',
    display: 'list-item',
    listStyleType: 'disc',
    listStylePosition: 'inside',
  },
  icon: {
    cursor: 'pointer',
  },
}));

export default useStyles;
