import React from 'react';
import DetailesHeader from './DetailesHeader/DetailesHeader';
import DetailesBody from './DetailesBody/DetailesBody';
import ItemsList from './ItemsList/ItemsList';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import useStyles from './styles';

const InvoiceDetailes = () => {
  const invoice = useSelector((state) => state.GlobalState.invoice);
  const classes = useStyles();

  return (
    <div>
      {invoice._id ? (
        <div className={classes.root}>
          <Button>
            <ArrowBackIosIcon fontSize="small" /> Go Back
          </Button>
          <DetailesHeader invoice={invoice} />
          <DetailesBody invoice={invoice} />
          <ItemsList items={invoice.items} total={invoice.total} />
        </div>
      ) : null}
    </div>
  );
};

export default InvoiceDetailes;
