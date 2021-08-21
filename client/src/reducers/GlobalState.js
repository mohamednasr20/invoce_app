// eslint-disable-next-line

const initalState = {
  invoices: [],
  invoice: {},
  isDarkMode: false,
  showForm: false,
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
    case 'SWITCH_THEME':
      return { ...state, isDarkMode: !state.isDarkMode };
    case 'TOGGLE_FORM':
      return { ...state, showForm: !state.showForm };

    default:
      return state;
  }
};
