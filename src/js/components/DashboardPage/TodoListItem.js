import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/TodoContext";
import {NavLink} from "react-router-dom";


export const TodoListItem = ({todo}) => {
    const [check, setCheck] = useState(false);
    const { dispatch } = useContext(TodoContext);
    const handleRemoveItem = () =>{
        dispatch( { type: 'REMOVE_TODO', id: todo.id });
    }
    const handleCheckBoxChange = () => {
        return check ? setCheck(false) : setCheck(true);
    }
    return (
        <div className="section__todos__list__item">
            <div className="section__todos__list__item--left">
                <input onChange={handleCheckBoxChange} checked={check} className="section__todos__list__item--left-input" type="checkbox"/>
                <div className="section__todos__list__item--left--radio state p-primary-o">
                    <NavLink style={{ textDecoration: check && "line-through" }} to={`edit/${todo.id}`} className="section__todos__list__item--left--title" >{todo.title}</NavLink>
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



