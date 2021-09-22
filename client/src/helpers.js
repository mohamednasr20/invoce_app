export const data = {
  createdAt: '',
  paymentDue: '',
  description: '',
  paymentTerms: '',
  clientName: '',
  clientEmail: '',
  status: 'pending',

  senderAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  clientAddress: {
    street: '',
    city: '',
    postCode: '',
    country: '',
  },
  items: [],
  total: 0,
};

export const updateItemFields = (data, index, inputName, value) =>
  data.items.map((item, idx) =>
    idx === data.items.indexOf(index)
      ? inputName === 'name'
        ? { ...item, name: value }
        : {
            ...item,
            [inputName]: Number(value),
            total:
              inputName === 'price'
                ? value * item.quantity
                : value * item.price,
          }
      : item
  );

export const getTotal = (items) =>
  items.length > 0
    ? items
        .map((item) => Number(item.total))
        .reduce((acc, currentValue) => acc + currentValue)
    : 0;

export const getDueDate = (created, paymentTerms) => {
  const date = new Date(created);
  const dueDate = new Date(date.setDate(date.getDate() + paymentTerms))
    .toISOString()
    .split('T')[0];

  return dueDate;
};
