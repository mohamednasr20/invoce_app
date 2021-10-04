import React, { useState, useEffect } from 'react';
import Invoice from './Invoice/Invoice';
import InvoicesNav from './InvoicesNav/InvoicesNav';
import EmptyInvoicesList from './EmptyInvoicesList/EmptyInvoicesList';
import { getInvoices } from '../../actions/invoices';
import { useSelector, useDispatch } from 'react-redux';
import useStyles from './styles';
const Invoices = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const invoices = useSelector((state) => state.invoices.invoices);
  const showForm = useSelector((state) => state.globalState.showForm);
  const [status, setStatus] = useState('');
  const [currentInvoices, setCurrentInvoices] = useState(invoices);

  const handleChangeStatus = (e) => {
    setStatus(e.target.value);
  };

  const filterInvoices = () =>
    status !== '' && invoices.length
      ? invoices.filter((invoice) => invoice.status === status)
      : invoices;

  const invoicesList = (invoices) => {
    return invoices.length ? (
      <div className={classes.invoicesList}>
        {invoices.map((invoice) => (
          <Invoice key={invoice._id} invoice={invoice} />
        ))}
      </div>
    ) : (
      <EmptyInvoicesList />
    );
  };

  useEffect(() => {
    setCurrentInvoices(filterInvoices());
    // eslint-disable-next-line
  }, [status, invoices]);

  useEffect(() => {
    dispatch(getInvoices());
    // eslint-disable-next-line
  }, [showForm]);

  return (
    <div className={classes.root}>
      <InvoicesNav
        invoices={currentInvoices}
        status={status}
        changeStatus={handleChangeStatus}
      />
      {invoicesList(currentInvoices)}
    </div>
  );
};

export default Invoices;
