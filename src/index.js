import React, {useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import '@djthoms/pretty-checkbox';
import * as serviceWorker from './serviceWorker';
import {AppRoute} from "./js/router/AppRoute";
import {todoReducer} from "./js/reducers/TodoReducer";
import {TodoContext} from "./js/context/TodoContext";

const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, []);

    useEffect(()=>{
        const localData = localStorage.getItem('todo');
        const todos = JSON.parse(localData);
        if (todos){
            dispatch({ type: 'GET_TODO', todos });
        }
    }, []);

    useEffect(() => {
        const stringedTodo = JSON.stringify(todos) ;
        localStorage.setItem('todo', stringedTodo);
    }, [todos]);

    return(
        <TodoContext.Provider value={{todos, dispatch}}>
            <AppRoute/>
        </TodoContext.Provider>
    );
};

ReactDOM.render ( <TodoApp/>, document.getElementById('root') );
serviceWorker.unregister();