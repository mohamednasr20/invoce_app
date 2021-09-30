import React, { useState, useEffect } from 'react';
import FormField from './FormField/FormField';
import ItemsList from './ItemsList/ItemsList';
import {
  createInvoice,
  getInvoices,
  updateInvoice,
} from '../../actions/invoices';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFormShow, handleCurrentId } from '../../actions/genralState';
import { data, getTotal, getDueDate, updateItemFields } from '../../helpers';
import {
  Container,
  Typography,
  MenuItem,
  Button,
  Paper,
  Modal,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
import useStyles from './styles';
import {
  ValidatorForm,
  SelectValidator,
} from 'react-material-ui-form-validator';
import { v4 as uuidv4 } from 'uuid';

const Form = () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const showForm = useSelector((state) => state.globalState.showForm);
  const currentId = useSelector((state) => state.globalState.currentId);
  const invoice = useSelector((state) =>
    currentId
      ? state.invoices.invoices.find((invoice) => invoice._id === currentId)
      : null
  );

  const [invoiceData, setInvocieData] = useState(data);

  const addItemField = () => {
    setInvocieData({
      ...invoiceData,
      items: [
        ...invoiceData.items,
        {
          name: '',
          quantity: 0,
          price: 0,
          total: 0,
          id: uuidv4(),
        },
      ],
    });
  };

  const onDeleteItem = (id) => {
    const newItems = invoiceData.items.filter((item) => item.id !== id);
    setInvocieData({
      ...invoiceData,
      items: newItems,
      total: getTotal(newItems),
    });
  };

  const handleChangeItemValue = (e, index) => {
    const inputName = e.target.name;
    let value = e.target.value;

    const newItems = updateItemFields(invoiceData, index, inputName, value);

    setInvocieData({
      ...invoiceData,
      items: newItems,
      total: getTotal(newItems),
    });
  };

  const clear = () => {
    dispatch(handleCurrentId(null));
    setInvocieData(data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(updateInvoice(currentId, invoiceData));
      dispatch(handleCurrentId(null));
      history.push('/');
    } else {
      dispatch(createInvoice(invoiceData));
      dispatch(getInvoices());
    }

    dispatch(toggleFormShow());
    clear();
  };

  useEffect(() => {
    if (invoice) setInvocieData(invoice);

    if (!currentId) clear();

    // eslint-disable-next-line
  }, [currentId]);

  return (
    <Modal
      open={showForm === undefined ? false : showForm}
      onClose={() => dispatch(toggleFormShow())}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      // style={{ display: showForm ? 'block' : 'none' }}
      className={classes.root}
    >
      <Container className={classes.formContainer}>
        <Paper className={classes.paper}>
          <Typography variant="h4">
            {currentId ? `Edit #${currentId.slice(18)}` : 'New Invoice'}
          </Typography>

          <ValidatorForm onSubmit={onSubmit}>
            <div>
              <Typography
                variant="h5"
                className={classes.heading}
                color="primary"
              >
                Bill From
              </Typography>
              <div className={classes.label}>Street Address</div>

              <FormField
                name="senderAddress"
                value={invoiceData.senderAddress.street}
                onChange={(e) =>
                  setInvocieData({
                    ...invoiceData,
                    senderAddress: {
                      ...invoiceData.senderAddress,
                      street: e.target.value,
                    },
                  })
                }
                fullWidth={true}
              />

              <div className={classes.flex}>
                <div className={classes.space}>
                  <div className={classes.label}>City</div>

                  <FormField
                    name="senderCity"
                    value={invoiceData.senderAddress.city}
                    onChange={(e) =>
                      setInvocieData({
                        ...invoiceData,
                        senderAddress: {
                          ...invoiceData.senderAddress,
                          city: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className={classes.space}>
                  <div className={classes.label}>Post Code</div>

                  <FormField
                    name="senderPostCode"
                    value={invoiceData.senderAddress.postCode}
                    onChange={(e) =>
                      setInvocieData({
                        ...invoiceData,
                        senderAddress: {
                          ...invoiceData.senderAddress,
                          postCode: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className={classes.space}>
                  <div className={classes.label}>Country</div>

                  <FormField
                    name="senderCountry"
                    value={invoiceData.senderAddress.country}
                    onChange={(e) =>
                      setInvocieData({
                        ...invoiceData,
                        senderAddress: {
                          ...invoiceData.senderAddress,
                          country: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <Typography
                variant="h5"
                className={classes.heading}
                color="primary"
              >
                Bill to
              </Typography>
              <div className={classes.label}>Client's Name</div>

              <FormField
                name="clientName"
                value={invoiceData.clientName}
                fullWidth={true}
                onChange={(e) =>
                  setInvocieData({ ...invoiceData, clientName: e.target.value })
                }
              />
              <div className={classes.label}>Client's Email</div>

              <FormField
                name="clientEmail"
                value={invoiceData.clientEmail}
                fullWidth={true}
                onChange={(e) =>
                  setInvocieData({
                    ...invoiceData,
                    clientEmail: e.target.value,
                  })
                }
                validators={['required', 'isEmail']}
                errorMessages={["can't be empty", 'email is invalid']}
              />
              <div className={classes.label}>Street Address</div>

              <FormField
                name="clientStreet"
                value={invoiceData.clientAddress.street}
                fullWidth={true}
                onChange={(e) =>
                  setInvocieData({
                    ...invoiceData,
                    clientAddress: {
                      ...invoiceData.clientAddress,
                      street: e.target.value,
                    },
                  })
                }
              />
              <div className={classes.flex}>
                <div className={classes.space}>
                  <div className={classes.label}>City</div>

                  <FormField
                    name="clientCity"
                    value={invoiceData.clientAddress.city}
                    onChange={(e) =>
                      setInvocieData({
                        ...invoiceData,
                        clientAddress: {
                          ...invoiceData.clientAddress,
                          city: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className={classes.space}>
                  <div className={classes.label}>Post Code</div>

                  <FormField
                    name="clientPostCode"
                    value={invoiceData.clientAddress.postCode}
                    onChange={(e) =>
                      setInvocieData({
                        ...invoiceData,
                        clientAddress: {
                          ...invoiceData.clientAddress,
                          postCode: e.target.value,
                        },
                      })
                    }
                  />
                </div>
                <div className={classes.space}>
                  <div className={classes.label}>Country</div>

                  <FormField
                    name="clientCountry"
                    value={invoiceData.clientAddress.country}
                    onChange={(e) =>
                      setInvocieData({
                        ...invoiceData,
                        clientAddress: {
                          ...invoiceData.clientAddress,
                          country: e.target.value,
                        },
                      })
                    }
                  />
                </div>
              </div>
              <div className={classes.flex}>
                <div>
                  <div className={classes.label}>Invoice Date</div>

                  <FormField
                    name="createdAt"
                    type="date"
                    value={invoiceData.createdAt}
                    fullWidth={true}
                    onChange={(e) => {
                      setInvocieData({
                        ...invoiceData,
                        createdAt: e.target.value,
                        paymentDue: invoiceData.paymentTerms
                          ? getDueDate(e.target.value, invoiceData.paymentTerms)
                          : '',
                      });
                    }}
                  />
                </div>
                <div>
                  <div className={classes.label}>Payment terms</div>
                  <div>
                    <SelectValidator
                      name="paymentTerms"
                      value={invoiceData.paymentTerms}
                      validators={['required']}
                      errorMessages={["can't be empty"]}
                      onChange={(e) => {
                        setInvocieData({
                          ...invoiceData,
                          paymentTerms: e.target.value,
                          paymentDue: invoiceData.createdAt
                            ? getDueDate(invoiceData.createdAt, e.target.value)
                            : '',
                        });
                      }}
                    >
                      <MenuItem value={''}>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={30}>Next 30 days</MenuItem>
                      <MenuItem value={14}>Next 14 days</MenuItem>
                      <MenuItem value={7}>Next 7 day</MenuItem>
                      <MenuItem value={1}>Next 1 day</MenuItem>
                    </SelectValidator>
                  </div>
                </div>
              </div>
              <div className={classes.label}>Project Description</div>

              <FormField
                name="description"
                value={invoiceData.description}
                fullWidth={true}
                onChange={(e) =>
                  setInvocieData({
                    ...invoiceData,
                    description: e.target.value,
                  })
                }
              />
              {invoiceData.items.length > 0 && (
                <ItemsList
                  items={invoiceData.items}
                  handleChangeItem={handleChangeItemValue}
                  deleteItem={onDeleteItem}
                />
              )}
            </div>

            <Button
              variant="contained"
              fullWidth
              className={classes.btnList}
              onClick={addItemField}
            >
              <AddIcon />
              Add New Item
            </Button>
            <div className={classes.btnGroup}>
              <Button
                variant="contained"
                onClick={() => dispatch(toggleFormShow())}
                className={classes.btn}
              >
                {currentId ? 'Cancel' : 'Discard'}
              </Button>
              <div className={classes.btnRight}>
                <Button
                  style={{ display: currentId ? 'none' : 'inline' }}
                  className={classes.btn}
                  variant="outlined"
                  type="submit"
                  onClick={() =>
                    setInvocieData({ ...invoiceData, status: 'draft' })
                  }
                >
                  Save As Draft
                </Button>
                <Button
                  className={classes.btn}
                  variant="contained"
                  color="primary"
                  type="submit"
                >
                  {currentId ? 'Save Changes' : 'Save & Add'}
                </Button>
              </div>
            </div>
          </ValidatorForm>
        </Paper>
      </Container>
    </Modal>
  );
};

export default Form;
