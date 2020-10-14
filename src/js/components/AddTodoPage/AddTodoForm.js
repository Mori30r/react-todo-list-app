import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/TodoContext";
import {v4 as uuid} from 'uuid';
export const AddTodoForm = (props) => {

    const [title, setTitle] = useState('');
    const [note, setNote] = useState([]);
    const { dispatch } = useContext(TodoContext);

    const onSubmitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        props.handleRefreshPage();
        dispatch({
            type: 'ADD_TODO',
            title,
            note,
            id: uuid()
        });
    }

    return (
        <form onSubmit={onSubmitForm} className="add__section__form">
            <label htmlFor="title" className="add__section__form-label">Title:</label>
            <input onChange={(e) => setTitle(e.target.value)} id="title" type="text" className="add__section__form--title" required={true}/>
            <label htmlFor="note" className="add__section__form-label">Note:</label>
            <textarea onChange={(e) => setNote(e.target.value)} id="note" className="add__section__form--note"/>
            {/*<label htmlFor="date" className="add__section__form-label">Date:</label>*/}
            {/*<input onChange={onChangeDate} id="date" type="text" className="add__section__form--date"/>*/}
            <button type="submit" className="btn btn--purple">Submit</button>
        </form>
    )
}

