import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import store from './store';

window.addEventListener('load', () => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <ScrollToTop />
          <App />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById('react_root')
  );
});
