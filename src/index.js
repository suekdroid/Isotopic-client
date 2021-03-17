import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import App from './App';

import { Provider } from 'react-redux'
import centralstore from './store/centralstore';

import { setupRequestInterceptor } from './api/RequestInterceptor'
import { setupResponseInterceptor } from './api/ResponseInterceptor'


setupRequestInterceptor()
setupResponseInterceptor()

ReactDOM.render(
    <Provider store={centralstore}>
      <App />
    </Provider>,
  document.getElementById('root')
);
