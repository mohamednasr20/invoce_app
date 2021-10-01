import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '20px 0 0',
    padding: '20px 10px',
    textAlign: 'center',
  },
  btn: {
    borderRadius: '25px',
    marginRight: 5,
    fontSize: '10px',

    padding: 8,
  },
}));

export default useStyles;
