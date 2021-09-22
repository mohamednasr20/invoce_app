import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: '35px 10px',
    borderRadius: 8,
    fontSize: '12px',
    fontWeight: '500',
    lineHeight: '15px',

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
    textAlgin: 'center',
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
    padding: '10px 15px',
    borderRadius: '6px',
    display: 'list-item',
    listStyleType: 'disc',
    listStylePosition: 'inside',
    transform: 'translate(-10px, -5px)',
    [theme.breakpoints.down('xs')]: {
      padding: '10px',
    },
  },
  icon: {
    cursor: 'pointer',
  },
}));

export default useStyles;
