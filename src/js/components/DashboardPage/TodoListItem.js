import React from "react";


export const TodoListItem = () => {
    return (
        <div className="section__todos__list__item">
            <div className="section__todos__list__item--left">
                <div className="pretty p-default p-curve">
                    <input type="checkbox"/>
                    <div className="section__todos__list__item--radio state p-primary-o">
                        <label className="section__todos__list__item--title" >Todo 1</label>
                    </div>
                </div>
            </div>
            <div className="section__todos__list__item--right">
                <div className="section__todos__list__item--date">2 days ago</div>
            </div>
        </div>
    )
}



