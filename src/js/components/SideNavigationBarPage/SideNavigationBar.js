import React from "react";
import {NavLink} from "react-router-dom";


export const SideNavigationBar = () => {
    return (
        <div className="col-1-of-4">
            <div className="navigation">
                <p className="navigation__header">To-Do-App</p>
                <div className="navigation__profile">
                    <div className="navigation__profile--image">&nbsp;</div>
                    <div className="navigation__profile--detail">
                        <p className="navigation__profile--detail--name">
                            Anonymous
                        </p>
                        <p className="navigation__profile--detail--job">
                            Unemployed
                        </p>
                    </div>
                </div>
                <div className="navigation__list">
                    <NavLink to="/" className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-basic-home"/>
                        <p className="navigation__list__items--label">Dashboard</p>
                    </NavLink>
                    <hr className="navigation__list__items--hr"/>
                    <NavLink to="/add" className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-basic-todolist-pen"/>
                        <div className="navigation__list__items--label">Add Todo</div>
                    </NavLink>
                    <hr className="navigation__list__items--hr"/>
                    <NavLink to="/" className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-basic-question"/>
                        <div className="navigation__list__items--label">Help</div>
                    </NavLink>
                    <hr className="navigation__list__items--hr"/>
                </div>
            </div>
        </div>
    )
}