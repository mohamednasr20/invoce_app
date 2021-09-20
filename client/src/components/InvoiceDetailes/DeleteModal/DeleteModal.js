import React, { useState } from 'react';
import { deleteInvoice } from '../../../actions/invoices';
import Modal from '@material-ui/core/Modal';
import { useStyles, getModalStyle } from './styles';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Paper, Typography } from '@material-ui/core';

const DeleteModal = ({ invoice, isOpen, handleClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const [modalStyle] = useState(getModalStyle);

  const onDeleteInvoice = (id) => {
    dispatch(deleteInvoice(id));
    history.push('/');
  };

  const invoiceId = invoice._id.slice(18);
  const deleteWarning = `Are you sure you want to delete invoice #${invoiceId} ? This action cannot be undone.`;

  return (
    <div className={classes.root}>
      <Modal
        open={isOpen}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={handleClose}
      >
        <div>
          <Paper className={classes.modalBox} style={modalStyle}>
            <Typography variant="h6">Confirm Deletion</Typography>
            <Typography className={classes.warning} variant="body2">
              {deleteWarning}
            </Typography>
            <Button
              className={classes.btn}
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              className={classes.btn}
              variant="contained"
              color="secondary"
              onClick={() => onDeleteInvoice(invoice._id)}
            >
              Delete
            </Button>
          </Paper>
        </div>
      </Modal>
    </div>
  );
};

export default DeleteModal;
