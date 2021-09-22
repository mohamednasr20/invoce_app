import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import config from './utils/config.js';
import invoicesRoutes from './routes/invoices.js';

const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect(config.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('connected to MongoDB');
  } catch (error) {
    console.log('error connecting to MongoDB:', error.message);
  }
};

connectDB();
mongoose.set('bufferCommands', false);

app.use(cors());
app.use(express.static('build'));
app.use(express.json());
app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));

app.use('/invoices', invoicesRoutes);

export default app;
