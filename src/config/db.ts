import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectToDatabase = async () => {
    const uri = process.env.MONGODB_CONNECT;

    if (!uri) {
        throw new Error('MONGODB_CONNECT not defined in .env');
    }

    try {
        await mongoose.connect(uri);
        console.log('✅ Connected to MongoDB Atlas');
    } catch (err) {
        console.error('❌ MongoDB connection failed:', err);
        process.exit(1);
    }
};

export const disconnectDatabase = async () => {
    await mongoose.connection.close();
}