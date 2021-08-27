// eslint-disable-next-line

const initalState = {
  invoices: [],
  invoice: {},
  isDarkMode: false,
  showForm: false,
  currentId: null,
};

// eslint-disable-next-line
export default (state = initalState, action) => {
  switch (action.type) {
    case 'FETCH_ALL':
      return { ...state, invoices: action.payload };
    case 'CREATE_INVOICE':
      return { ...state, inovices: [...state.invoices, action.payload] };
    case 'FETCH_INVOICE':
      return { ...state, invoice: action.payload };
    case 'DELETE_INVOICE':
      return {
        state,
        invoices: state.invoices.filter(
          (invoice) => invoice._id !== action.payload
        ),
      };
    case 'SWITCH_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'TOGGLE_FORM':
      return { ...state, showForm: !state.showForm };
    case 'CURRENT_ID':
      return { ...state, currentId: action.payload };
    default:
      return state;
  }
};
