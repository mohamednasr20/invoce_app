import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DetailesHeader from './DetailesHeader/DetailesHeader';
import DetailesBody from './DetailesBody/DetailesBody';
import DeleteModal from './DeleteModal/DeleteModal';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import useStyles from './styles';

const InvoiceDetailes = ({ setCurrentId }) => {
  const classes = useStyles();
  const invoice = useSelector((state) => state.GlobalState.invoice);
  const history = useHistory();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onGoBack = () => {
    history.push('/');
  };

  return (
    <div>
      {invoice && invoice._id ? (
        <div className={classes.root}>
          <Button onClick={onGoBack}>
            <ArrowBackIosIcon fontSize="small" /> Go Back
          </Button>
          <DetailesHeader
            invoice={invoice}
            setCurrentId={setCurrentId}
            openDeleteModal={handleOpen}
          />
          <DetailesBody invoice={invoice} />
          <DeleteModal
            invoice={invoice}
            open={open}
            handleClose={handleClose}
          />
        </div>
      ) : null}
    </div>
  );
};

export default InvoiceDetailes;
