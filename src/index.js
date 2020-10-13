import React, {useEffect, useReducer, useState} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import '@djthoms/pretty-checkbox';
import * as serviceWorker from './serviceWorker';
import {AppRoute} from "./js/router/AppRoute";
import {todoReducer} from "./js/reducers/TodoReducer";
import {TodoContext} from "./js/context/TodoContext";

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, []);

    return(
        <TodoContext.Provider value={{todos, dispatch}}>
            <AppRoute/>
        </TodoContext.Provider>
    );
};

ReactDOM.render ( <TodoApp/>, document.getElementById('root') );
serviceWorker.unregister();