import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import store from './store';
import './style/normalize.css';

window.addEventListener('load', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ErrorBoundary>
            <ScrollToTop />
            <App />
          </ErrorBoundary>
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('react_root'),
  );
});
