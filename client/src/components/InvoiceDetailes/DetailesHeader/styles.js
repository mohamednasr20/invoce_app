import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '20px 0',
    padding: '30px',
    borderRadius: 8,
  },
  statusFlex: {
    display: 'flex',
  },

  status: {
    fontWeight: 'bold',
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
    marginLeft: 30,
    padding: '5px 25px',
    borderRadius: '6px',
    display: 'list-item',
    listStyleType: 'disc',
    listStylePosition: 'inside',
  },
  btn: {
    marginRight: 8,
    borderRadius: '25px',
    fontWeight: '700',
    fontSize: '12px',
  },
}));

export default useStyles;
