import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import '@djthoms/pretty-checkbox';
import * as serviceWorker from './serviceWorker';
import {AppRoute} from "./js/router/AppRoute";
import {TodoReducer} from "./js/reducers/TodoReducer";
import {TodoContext} from "./js/context/TodoContext";

const TodoApp = () => {
    const { todos, dispatch } = useReducer(TodoReducer, []);
    return (
        <div>
            <TodoContext.Provider value={{ todos, dispatch }}/>
            <AppRoute/>
            <TodoReducer.Provider />
        </div>
    )
}



ReactDOM.render(
  <React.StrictMode>
      <TodoApp/>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();