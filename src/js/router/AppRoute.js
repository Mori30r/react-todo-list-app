import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Dashboard} from "../components/DashboardPage/Dashboard";
import {AddTodo} from "../components/AddTodoPage/AddTodo";
import React from "react";
import {SideNavigationBar} from "../components/SideNavigationBarPage/SideNavigationBar";
import {EditTodo} from "../components/EditTodoPage/EditTodo";


export const AppRoute = () => (
    <BrowserRouter>
        <div className="row" >
            <SideNavigationBar/>
            <Switch>
                <Route path='/' render={(props)=> <Dashboard {...props} />} exact={true} />
                <Route path='/add' render={(props)=> <AddTodo {...props} />} />
                <Route path='/edit/:id' render={(props)=> <EditTodo {...props} />} />
            </Switch>
        </div>
    </BrowserRouter>
);