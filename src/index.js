import React from 'react'
import { render } from 'react-dom'
import App from './containers/app'
import { Provider } from 'react-redux';
import store from './store'
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import 'sanitize.css/sanitize.css'
import './index.css'

const target = document.querySelector('#root')

let persistor = persistStore(store)
render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  target
)
