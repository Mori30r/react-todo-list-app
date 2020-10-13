import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Dashboard} from "../components/DashboardPage/Dashboard";
import {AddTodo} from "../components/AddTodoPage/AddTodo";
import React from "react";
import {SideNavigationBar} from "../components/SideNavigationBarPage/SideNavigationBar";


export const AppRoute = () => (
    <BrowserRouter>
        <div className="row" >
            <SideNavigationBar/>
            <Switch>
                <Route path='/' render={(props)=> <Dashboard {...props} />} exact={true} />
                <Route path='/add' render={(props)=> <AddTodo {...props} />} exact={true} />
            </Switch>
        </div>
    </BrowserRouter>
);