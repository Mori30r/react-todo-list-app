import {TodoListItem} from "./TodoListItem";
import {TodoContext} from "../../context/TodoContext";
import React, {useContext} from "react";
import { v4 as uuid } from 'uuid';


export const TodoList = () => {
    const  { todos } = useContext(TodoContext);
    return (
        <div className="section__todos__list">
            {
                todos.length > 0
                    ?
                    todos.map((todo)=>{return <TodoListItem key={todo.id} todo={todo}/>})
                    :
                    <p className="section__todos__list--empty">Add Todo To Show In This Page</p>
            }
        </div>
    )
}

