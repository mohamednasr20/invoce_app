import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DetailesHeader from './DetailesHeader/DetailesHeader';
import DetailesBody from './DetailesBody/DetailesBody';
import DeleteModal from './DeleteModal/DeleteModal';
import SmallScreenBtns from './SmallScreenBtns/SmallScreenBtns';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { handleCurrentId } from '../../actions/themeMode';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './styles';

const InvoiceDetailes = ({ setCurrentId }) => {
  const classes = useStyles();
  const invoice = useSelector((state) => state.GlobalState.invoice);
  const history = useHistory();
  const dispatch = useDispatch();
  const smScreen = useMediaQuery('(max-width:600px)');
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onGoBack = () => {
    dispatch(handleCurrentId(null));
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
          {smScreen && <SmallScreenBtns openDeleteModal={handleOpen} />}
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
