import {TodoListItem} from "./TodoListItem";
import {TodoContext} from "../../context/TodoContext";
import React, {useContext} from "react";


export const TodoList = () => {
    const  { todos } = useContext(TodoContext);

    return (
        <div className="section__todos__list">
            {todos && todos.map((todo)=>{return <TodoListItem key={todo.title} todo={todo}/>})}
        </div>
    )
}

