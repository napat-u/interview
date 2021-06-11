import { combineReducers } from '@reduxjs/toolkit';
import bookReducer from './bookRedux';

export const rootReducer = combineReducers({
	book: bookReducer
})
