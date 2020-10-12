import React from "react";
import {TodoList} from "./TodoList";
import {DashboardTop} from "./DashboardTop";

export const Dashboard = () => {
    return (
        <div className="col-3-of-4">
            <div className="dashboard">
                <DashboardTop/>
                <section className="section__todos">
                    <TodoList/>
                </section>
            </div>
        </div>
    )
}