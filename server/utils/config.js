import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;

export default {
  MONGODB_URL,
  PORT,
};
