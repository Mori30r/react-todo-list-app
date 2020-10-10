import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <p>Hello World</p>
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
