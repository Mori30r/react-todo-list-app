import {TodoListItem} from "./TodoListItem";
import {TodoContext} from "../../context/TodoContext";
import React, {useContext} from "react";
import {FilterContext} from "../../context/FilterContext";

export const TodoList = () => {
    const { todos } = useContext(TodoContext);
    const { filter } = useContext(FilterContext);
    let resultFiltered;

    if ( filter.sort === 'alphabetical' ){
        const result = todos.filter((obj)=>obj.title.toLowerCase().includes(filter.search.toLowerCase()));
        resultFiltered = result.sort((a, b) => a.title.localeCompare(b.title));
    } else {
        resultFiltered = todos.filter((obj)=>obj.title.toLowerCase().includes(filter.search.toLowerCase()));
    }

    return (
        <div className="section__todos__list">
            {
                resultFiltered.length > 0
                    ?
                    resultFiltered.map((todo)=>{return <TodoListItem key={todo.id} todo={todo}/>})
                    :
                    <p className="section__todos__list--empty">Your todo list is empty</p>

            }
        </div>
    )
}

