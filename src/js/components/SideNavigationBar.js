import React from "react";


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
                        <div className="navigation__list__items--icon icon-basic-home"/>
                        <p className="navigation__list__items--label">Dashboard</p>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                    <div className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-basic-todolist-pen"/>
                        <div className="navigation__list__items--label">Add Todo</div>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                    <div className="navigation__list__items">
                        <div className="navigation__list__items--icon icon-basic-question"/>
                        <div className="navigation__list__items--label">Help</div>
                    </div>
                    <hr className="navigation__list__items--hr"/>
                </div>
                {/*<div className="navigation__social">*/}
                {/*    <div className="navigation__social--github">*/}
                {/*        github*/}
                {/*    </div>*/}
                {/*    <div className="navigation__social--twitter">*/}
                {/*        twitter*/}
                {/*    </div>*/}
                {/*    <div className="navigation__social--instagram">*/}
                {/*        instagram*/}
                {/*    </div>*/}
                {/*    <div className="navigation__social--linkedin">*/}
                {/*        Linkedin*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}