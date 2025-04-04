import mongoose from 'mongoose';
import { DB_NAME } from '../constant';

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
  } catch (error) {
    console.log('connection error', error);
    process.exit(1);
  }
};
