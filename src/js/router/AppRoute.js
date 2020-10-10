import {Header} from "../components/Header";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Dashboard} from "../components/Dashboard";
import {Create} from "../components/Create";
import React from "react";
import {SideNavigationBar} from "../components/SideNavigationBar";



export const AppRoute = () => (
    <BrowserRouter>
        <div>
            <Header/>
            {/*<Switch>*/}
            {/*    <Route path='/' component={Dashboard} exact={true} />*/}
            {/*    <Route path='/add' component={Create} />*/}
            {/*</Switch>*/}
        </div>
    </BrowserRouter>
);