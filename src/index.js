import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import * as serviceWorker from './serviceWorker';
import {AppRoute} from "./js/router/AppRoute";


ReactDOM.render(
  <React.StrictMode>
      <AppRoute/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();