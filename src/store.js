import {configureStore} from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import { rootReducer } from './modules/rootReducer'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: `root`,
  storage,
  whitelist: ["book"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
  devTools: process.env.NODE_ENV !== 'production'
});


export default store;
