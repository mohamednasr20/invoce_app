import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: 30,
    width: '730px',

    [theme.breakpoints.down('sm')]: {
      width: '688px',
    },
    [theme.breakpoints.down('xs')]: {
      width: '327px',
    },
    margin: 'auto',
  },
}));

export default useStyles;
