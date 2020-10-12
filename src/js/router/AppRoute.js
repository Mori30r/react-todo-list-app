import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Dashboard} from "../components/DashboardPage/Dashboard";
import {Create} from "../components/Create";
import React from "react";
import {SideNavigationBar} from "../components/SideNavigationBar";


export const AppRoute = () => (
    <BrowserRouter>
        <div className="row" >
            <SideNavigationBar/>
            <Switch>
                <Route path='/' component={Dashboard} exact={true} />
                <Route path='/add' component={Create} />
            </Switch>
        </div>
    </BrowserRouter>
);