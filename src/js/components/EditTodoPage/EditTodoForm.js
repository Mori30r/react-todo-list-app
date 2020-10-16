import React, {useContext, useState} from "react";
import {TodoContext} from "../../context/TodoContext";
export const EditTodoForm = (props) => {

    let todo = props.todo;
    todo = todo[0];
    const [editedTitle, setEditedTitle] = useState(todo.title);
    const [editedNote, setEditedNote] = useState(todo.note);
    const { dispatch } = useContext(TodoContext);


    const handleChangeTitle = (e) => {
        const title = e.target.value
        setEditedTitle(title);
    }

    const handleChangeNote = (e) => {
        const note = e.target.value
        setEditedNote(note);
    }


    const onSubmitForm = (e) => {
        e.preventDefault();
        e.target.reset();
        props.handleRefreshPage();
        dispatch({
            type: 'EDIT_TODO',
            id: todo.id,
            updates: {
                title: editedTitle,
                note: editedNote,
                id: todo.id,
                checked: todo.checked,
                date: todo.date
            }
        });
    }
    return (
        <form onSubmit={onSubmitForm} className="add__section__form">
            <label htmlFor="title" className="add__section__form-label">Title:</label>
            <input value={editedTitle} onChange={handleChangeTitle} id="title" type="text" className="add__section__form--title" required={true}/>
            <label htmlFor="note" className="add__section__form-label">Note:</label>
            <textarea value={editedNote} onChange={handleChangeNote} id="note" className="add__section__form--note"/>
            {/*<label htmlFor="date" className="add__section__form-label">Date:</label>*/}
            {/*<input onChange={onChangeDate} id="date" type="text" className="add__section__form--date"/>*/}
            <button type="submit" className="btn btn--purple">Submit</button>
        </form>
    )
}
