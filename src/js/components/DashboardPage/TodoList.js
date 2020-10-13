import {TodoListItem} from "./TodoListItem";
import {TodoContext} from "../../context/TodoContext";
import React, {useContext} from "react";


export const TodoList = () => {
    const  { todos } = useContext(TodoContext);
    console.log(todos)
    return (
        <div className="section__todos__list">
            {
                todos.length > 0
                    ?
                    todos.map((todo)=>{return <TodoListItem todo={todo}/>})
                    :
                    <p className="section__todos__list--empty">Add Todo To Show In This Page</p>
            }
        </div>
    )
}

