import React from "react";


export const TodoListItem = (props) => {
    console.log(props);
    return (
        <div className="section__todos__list__item">
            <div className="section__todos__list__item--left">
                <div className="pretty p-default p-curve">
                    <input className="section__todos__list__item--left-input" type="checkbox"/>
                    <div className="section__todos__list__item--radio state p-primary-o">
                        <label className="section__todos__list__item--title" >{props.todo.title.title}</label>
                    </div>
                </div>
            </div>
            <div className="section__todos__list__item--right">
                <div className="section__todos__list__item--date">2 days ago</div>
            </div>
        </div>
    )
}



