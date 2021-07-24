import React from 'react';
import illustration from '../../../assets/illustration-empty.svg';
import useStyles from './styles';

const EmptyInvoicesList = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <img src={illustration} alt="illustration-empty" />
        <h4>There is nothing here</h4>
        <p>Create an invoice by clicking new Invoice button and get started</p>
      </div>
    </div>
  );
};

export default EmptyInvoicesList;
