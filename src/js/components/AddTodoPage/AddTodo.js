import React, {useContext, useState} from "react";
import {AddTodoTop} from "./AddTodoTop";
import {AddTodoForm} from "./AddTodoForm";
import {TodoContext} from "../../context/TodoContext";

export const AddTodo = (props) => {
    const handleRefreshPage = () => {
        props.history.push('/');
    }
    return(
        <div className="col-3-of-4">
            <div className="add">
                <AddTodoTop/>
                <section className="add__section">
                    <AddTodoForm handleRefreshPage={handleRefreshPage}  />
                </section>
            </div>
        </div>
    )
}