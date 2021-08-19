import React from 'react';
import { useSelector } from 'react-redux';
import DetailesHeader from './DetailesHeader/DetailesHeader';
import DetailesBody from './DetailesBody/DetailesBody';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const InvoiceDetailes = () => {
  const classes = useStyles();
  const invoice = useSelector((state) => state.GlobalState.invoice);
  const history = useHistory();

  const onGoBack = () => {
    history.push('/');
  };

  return (
    <div>
      {invoice._id ? (
        <div className={classes.root}>
          <Button onClick={onGoBack}>
            <ArrowBackIosIcon fontSize="small" /> Go Back
          </Button>
          <DetailesHeader invoice={invoice} />
          <DetailesBody invoice={invoice} />
        </div>
      ) : null}
    </div>
  );
};

export default InvoiceDetailes;
