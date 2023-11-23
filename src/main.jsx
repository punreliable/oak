import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.scss'

import { createStore } from 'redux'
import rootReducer from './reducers'
import { Provider } from 'react-redux'

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEV
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
