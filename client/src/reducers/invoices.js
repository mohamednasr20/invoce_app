// eslint-disable-next-line

const initalState = {
  invoices: [],
  invoice: {},
};
export default (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return { ...state, invoices: action.payload };
    case 'CREATE_INVOICE':
      return { ...state, inovices: [...state.invoices, action.payload] };
    case 'FETCH_INVOICE':
      return { ...state, invoice: action.payload };
    default:
      return state;
  }
};
