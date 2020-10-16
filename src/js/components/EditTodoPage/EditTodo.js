import React, {useContext} from "react";
import {TodoContext} from "../../context/TodoContext";
import {EditTodoTop} from "./EditTodoTop";
import {EditTodoForm} from "./EditTodoForm";

export const EditTodo = (props) => {
    const id = props.match.params.id;
    const { todos } = useContext(TodoContext);
    const selectedTodo = todos.filter((obj)=> obj.id === id );

    const handleRefreshPage = () => {
        props.history.push('/');
    };

    return (
        <div className="col-3-of-4">
            <div className="add">
                <EditTodoTop/>
                <section className="add__section">
                    <EditTodoForm todo={selectedTodo} handleRefreshPage={handleRefreshPage}  />
                </section>
            </div>
        </div>
    );
}