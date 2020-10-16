import React, {useEffect, useReducer} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import {AppRoute} from "./js/router/AppRoute";
import {todoReducer} from "./js/reducers/TodoReducer";
import {TodoContext} from "./js/context/TodoContext";
import {filterReducer} from "./js/reducers/FilterReducer";
import {FilterContext} from "./js/context/FilterContext";

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], undefined);
    const [filter, filterDispatch] = useReducer(filterReducer, {search: "", sort: "date"}, undefined);

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
            <FilterContext.Provider value={{filter, filterDispatch}}>
                <AppRoute/>
            </FilterContext.Provider>
        </TodoContext.Provider>
    );
};

ReactDOM.render ( <TodoApp/>, document.getElementById('root') );