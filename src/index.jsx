import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

window.addEventListener('load', () => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('react_root')
  );
});
