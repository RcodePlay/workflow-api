import morgan from 'morgan';
import { Request, Response } from 'express';

// Use a predefined format or customize it
const stream = {
    write: (message: string) => {
        console.log(message.trim());
    }
};

const skip = () => {
    return process.env.NODE_ENV === 'test';
};

export const loggerMiddleware = morgan('dev', { stream, skip });
