import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';

export default function () {
  return configureStore({
    reducer,
    middleware: [...getDefaultMiddleware(), logger({ destination: 'console' })],
  });
}
