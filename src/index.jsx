import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { App } from './components/App';

window.addEventListener('load', () => {
  // <link rel="shortcut icon" href="/src/img/favicon.ico" type="image/x-icon">
    ReactDOM.render(<App />, document.getElementById('react_root'));
});
