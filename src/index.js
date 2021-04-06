import ReactDOM from 'react-dom';
import './reset.css'
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import centralstore from './store/centralstore';
import { setupRequestInterceptor } from './api/RequestInterceptor'
import { setupResponseInterceptor } from './api/ResponseInterceptor'


setupRequestInterceptor()
setupResponseInterceptor()

ReactDOM.render(
    <Provider store={centralstore}>
      <BrowserRouter>
          <App />
      </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);
