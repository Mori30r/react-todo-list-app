import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/TodoContext";

export const AddTodoForm = () => {

    const [title, setTodo] = useState('');
    const [note, setNote] = useState('');
    const { dispatch } = useContext(TodoContext);

    const handleSubmitForm = (e) => {
        e.preventDefault();
        dispatch({ type: 'ADD_TODO', title, note });
        setTodo('');
        setNote('');
    }

    return (
        <form onSubmit={handleSubmitForm} className="add__section__form">
            <label htmlFor="title" className="add__section__form-label">Title:</label>
            <input onChange={(e) => setTodo(e.target.value)} id="title" type="text" className="add__section__form--title"/>
            <label htmlFor="note" className="add__section__form-label">Note:</label>
            <textarea onChange={(e) => setNote(e.target.value)} id="note" className="add__section__form--note"/>
            {/*<label htmlFor="date" className="add__section__form-label">Date:</label>*/}
            {/*<input onChange={onChangeDate} id="date" type="text" className="add__section__form--date"/>*/}
            <button type="submit" className="btn btn--purple">Submit</button>
        </form>
    )
}

