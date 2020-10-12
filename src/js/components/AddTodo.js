import React from "react";

export const AddTodo = () => {
    return(
        <div className="col-3-of-4">
            <div className="add">
                <div className="add__top">
                    <h1 className="add__top__header">Create Todo</h1>
                </div>
                <div className="dashboard__links">
                    <div className="dashboard__links__list">
                        <p className="dashboard__links__list--item">
                            Add Form
                        </p>
                    </div>
                </div>
                <section className="add__section">
                    <form className="add__section__form">
                        <label htmlFor="title" className="add__section__form-label">Title:</label>
                        <input id="title" type="text" className="add__section__form--title"/>
                        <label htmlFor="note" className="add__section__form-label">Note:</label>
                        <textarea id="note" className="add__section__form--note"/>
                        <label htmlFor="date" className="add__section__form-label">Date:</label>
                        <input id="date" type="text" className="add__section__form--date"/>
                        <button type="submit" className="btn btn--purple">Submit</button>
                    </form>
                </section>
            </div>
        </div>
    )
}