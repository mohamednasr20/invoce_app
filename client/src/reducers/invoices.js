export default (invoices = [], action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return action.payload;
    case 'CREATEINVOICE':
      return [...invoices, action.payload];

    default:
      return invoices;
  }
};
