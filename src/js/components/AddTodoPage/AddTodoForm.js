import React from "react";

export const AddTodoForm = () => {
    return (
        <form className="add__section__form">
            <label htmlFor="title" className="add__section__form-label">Title:</label>
            <input id="title" type="text" className="add__section__form--title"/>
            <label htmlFor="note" className="add__section__form-label">Note:</label>
            <textarea id="note" className="add__section__form--note"/>
            <label htmlFor="date" className="add__section__form-label">Date:</label>
            <input id="date" type="text" className="add__section__form--date"/>
            <button type="submit" className="btn btn--purple">Submit</button>
        </form>
    )
}

