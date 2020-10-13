import React, {useContext, useState} from "react";
import {AddTodoTop} from "./AddTodoTop";
import {AddTodoForm} from "./AddTodoForm";
import {TodoContext} from "../../context/TodoContext";

export const AddTodo = (props) => {
    const { dispatch } = useContext(TodoContext);


    const handleSubmitForm = (title, note) => {
        dispatch({ type: 'ADD_TODO', title, note });
        props.history.push('/');
    }
    return(
        <div className="col-3-of-4">
            <div className="add">
                <AddTodoTop/>
                <section className="add__section">
                    <AddTodoForm handleSubmitForm={handleSubmitForm}  />
                </section>
            </div>
        </div>
    )
}