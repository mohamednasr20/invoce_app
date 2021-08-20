import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '40px 10px',
    padding: '40px 0 0',
    borderRadius: 8,
    background: theme.palette.info.main,
  },
}));

export default useStyles;
