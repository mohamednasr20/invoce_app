import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGODB_URL = process.env.MONGODB_URL;
const SECRET = process.env.SECRET;

export default {
  MONGODB_URL,
  PORT,
  SECRET,
};
