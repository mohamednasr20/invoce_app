import React, { useState } from 'react';
import ItemsList from './ItemsList/ItemsList';
import {
  Container,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Paper,
} from '@material-ui/core';
import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  const [invoicesData, setInvociesData] = useState({
    createdAt: '',
    paymentDue: '',
    description: '',
    paymentTerms: '',
    clientName: '',
    clientEmail: '',
    status: '',
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
  });

  return (
    <Container className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4">New Invoice</Typography>

        <form>
          <Typography variant="h5" className={classes.heading} color="primary">
            Bill From
          </Typography>
          <div className={classes.label}>Street Address</div>
          <TextField
            name="senderStreet"
            value={invoicesData.senderAddress.streetAddress}
            variant="outlined"
            size="small"
            onChange={(e) =>
              setInvociesData({
                ...invoicesData,
                senderAddress: {
                  ...invoicesData.senderAddress,
                  street: e.target.value,
                },
              })
            }
            fullWidth
          />
          <div className={classes.flex}>
            <div className={classes.space}>
              <div className={classes.label}>City</div>
              <TextField
                name="senderCity"
                value={invoicesData.senderAddress.city}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    senderAddress: {
                      ...invoicesData.senderAddress,
                      city: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className={classes.space}>
              <div className={classes.label}>Post Code</div>
              <TextField
                name="senderPostCode"
                vlaue={invoicesData.senderAddress.postCode}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    senderAddress: {
                      ...invoicesData.senderAddress,
                      postCode: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className={classes.space}>
              <div className={classes.label}>Country</div>
              <TextField
                name="senderCountry"
                value={invoicesData.senderAddress.country}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    senderAddress: {
                      ...invoicesData.senderAddress,
                      country: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <Typography variant="h5" className={classes.heading} color="primary">
            Bill to
          </Typography>
          <div className={classes.label}>Client's Name</div>
          <TextField
            name="clientName"
            value={invoicesData.clientName}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) =>
              setInvociesData({ ...invoicesData, clientName: e.target.value })
            }
          />
          <div className={classes.label}>Client's Email</div>
          <TextField
            name="clientEmail"
            value={invoicesData.clientEmail}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) =>
              setInvociesData({ ...invoicesData, clientEmail: e.target.value })
            }
          />
          <div className={classes.label}>Street Address</div>
          <TextField
            name="clientStreet"
            value={invoicesData.clientAddress.street}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) =>
              setInvociesData({
                ...invoicesData,
                clientAddress: {
                  ...invoicesData.clientAddress,
                  street: e.target.value,
                },
              })
            }
          />
          <div className={classes.flex}>
            <div className={classes.space}>
              <div className={classes.label}>City</div>
              <TextField
                name="clientCity"
                value={invoicesData.clientAddress.city}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    clientAddress: {
                      ...invoicesData.clientAddress,
                      city: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className={classes.space}>
              <div className={classes.label}>Post Code</div>
              <TextField
                name="clientPostCode"
                value={invoicesData.clientAddress.postCode}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    clientAddress: {
                      ...invoicesData.clientAddress,
                      postCode: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className={classes.space}>
              <div className={classes.label}>Country</div>
              <TextField
                name="clientCountry"
                vlaue={invoicesData.clientAddress.country}
                variant="outlined"
                size="small"
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    clientAddress: {
                      ...invoicesData.clientAddress,
                      country: e.target.value,
                    },
                  })
                }
              />
            </div>
          </div>

          <div className={classes.flex}>
            <div>
              <div className={classes.label}>Payment Due</div>
              <TextField
                name="paymentDue"
                type="date"
                value={invoicesData.paymentDue}
                variant="outlined"
                size="small"
                fullWidth
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    paymentDue: e.target.value,
                  })
                }
              />
            </div>
            <div>
              <div className={classes.label}>Payment terms</div>

              <Select
                value={invoicesData.paymentTerms}
                onChange={(e) =>
                  setInvociesData({
                    ...invoicesData,
                    paymentTerms: e.target.value,
                  })
                }
                autoWidth
              >
                <MenuItem value={''}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={30}>Next 30 days</MenuItem>
                <MenuItem value={14}>Next 14 days</MenuItem>
                <MenuItem value={7}>Next 7 day</MenuItem>
                <MenuItem value={1}>Next 1 day</MenuItem>
              </Select>
            </div>
          </div>
          <div className={classes.label}>Project Description</div>
          <TextField
            name="description"
            value={invoicesData.description}
            variant="outlined"
            size="small"
            fullWidth
            onChange={(e) =>
              setInvociesData({ ...invoicesData, description: e.target.value })
            }
          />

          <ItemsList />
          <div className={classes.btnGroup}>
            <Button variant="contained">Discard</Button>
            <div className={classes.btnRight}>
              <Button className={classes.btn} variant="outlined">
                Save As Draft
              </Button>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
              >
                Save And Send
              </Button>
            </div>
          </div>
        </form>
      </Paper>
    </Container>
  );
};

export default Form;
