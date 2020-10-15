import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/TodoContext";
import {NavLink} from "react-router-dom";
import {v4 as uuid} from "uuid";


export const TodoListItem = ({todo}) => {
    const { dispatch } = useContext(TodoContext);
    const handleRemoveItem = () =>{
        dispatch( { type: 'REMOVE_TODO', id: todo.id });
    }
    const handleCheckBoxChange = () => {
        return dispatch(
            {
                type: 'EDIT_TODO',
                id: todo.id,
                updates: {
                    title: todo.title,
                    note: todo.note,
                    id: todo.id,
                    checked: !todo.checked
            }});
    }
    return (
        <div className="section__todos__list__item">
            <div className="section__todos__list__item--left">
                <input onChange={handleCheckBoxChange} checked={todo.checked} className="section__todos__list__item--left-input" type="checkbox"/>
                <div className="section__todos__list__item--left--radio state p-primary-o">
                    <NavLink style={{ textDecoration: todo.checked && "line-through", color: todo.checked && "grey" }} to={`edit/${todo.id}`} className="section__todos__list__item--left--title" >{todo.title}</NavLink>
                </div>
            </div>
            <div className="section__todos__list__item--right">
                <div className="section__todos__list__item--right--date">2 days ago</div>
                <NavLink to={`edit/${todo.id}`} className="section__todos__list__item--right--edit">Edit</NavLink>
                <button onClick={handleRemoveItem } className="section__todos__list__item--right--remove">X</button>
            </div>
        </div>
    )
}



