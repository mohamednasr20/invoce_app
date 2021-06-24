import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 20,
    marginBottom: 20,
  },
  label: {
    marginBottom: 10,
    marginTop: 10,
  },
}));

export default useStyles;
