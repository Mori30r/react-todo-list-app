import {TodoListItem} from "./TodoListItem";
import {TodoContext} from "../../context/TodoContext";
import React, {useContext} from "react";
import {FilterContext} from "../../context/FilterContext";

export const TodoList = () => {
    const { todos } = useContext(TodoContext);
    const { filter } = useContext(FilterContext);
    const filtered = todos.filter((obj)=>obj.title.toLowerCase().includes(filter.search.toLowerCase()));

    return (
        <div className="section__todos__list">
            {
                filtered.length > 0
                    ?
                    filtered.map((todo)=>{return <TodoListItem key={todo.id} todo={todo}/>})
                    :
                    <p className="section__todos__list--empty">Your todo list is empty</p>

            }
        </div>
    )
}

