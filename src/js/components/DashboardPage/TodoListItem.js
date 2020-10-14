import React, {useContext} from "react";
import {TodoContext} from "../../context/TodoContext";


export const TodoListItem = ({todo}) => {
    const { dispatch } = useContext(TodoContext);
    const handleRemoveItem = () =>{
        dispatch( { type: 'REMOVE_TODO', id: todo.id });
    }
    return (
        <div className="section__todos__list__item">
            <div className="section__todos__list__item--left">
                <input className="section__todos__list__item--left-input" type="checkbox"/>
                <div className="section__todos__list__item--radio state p-primary-o">
                    <label className="section__todos__list__item--title" >{todo.title}</label>
                </div>
            </div>
            <div className="section__todos__list__item--right">
                <div className="section__todos__list__item--date">2 days ago</div>
                <button onClick={handleRemoveItem } className="section__todos__list__item--remove">X</button>
            </div>
        </div>
    )
}



