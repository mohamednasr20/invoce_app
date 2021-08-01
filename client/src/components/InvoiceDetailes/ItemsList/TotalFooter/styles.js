import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    background: '#000000',
    color: '#ffffff',
    marginTop: 20,
    padding: '30px 20px',
    borderRadius: 8,
  },
  total: {
    fontSize: 24,
  },
}));

export default useStyles;
