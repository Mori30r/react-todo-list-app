import React from "react";
import ReactDOM from 'react-dom';


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
                    <div className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-arrows-circle-plus"/>
                        <p className="navigation__list__items--label">Add New</p>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                    <div className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-arrows-circle-plus"/>
                        <div className="navigation__list__items--label">Add New</div>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                    <div className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-arrows-circle-plus"/>
                        <div className="navigation__list__items--label">Add New</div>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                    <div className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-arrows-circle-plus"/>
                        <div className="navigation__list__items--label">Add New</div>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                </div>
            </div>
        </div>
    )
}

ReactDOM.render(
    <SideNavigationBar/>,
    document.getElementById("nav")
);