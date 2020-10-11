import React from "react";
import { NavLink } from "react-router-dom";

export const Dashboard = () => {
    return (
        <div className="col-3-of-4">
            <div className="dashboard">
                <div className="dashboard__top">
                    <h1 className="dashboard__top__header">Dashboard</h1>
                    <div className="dashboard__top__select">
                        <div className="dashboard__top__select__inputs">
                            <div className="dashboard__top__select__inputs--search">
                                <input type="text" placeholder="Search" autoFocus={true} className="dashboard__top__select__inputs--search-input"/>
                            </div>
                            <div className="dashboard__top__select__inputs--sort">
                                <select className="dashboard__top__select__inputs--sort-select" >
                                    <option className="dashboard__top__select__inputs--sort-select--option" value="amount">Amount</option>
                                    <option className="dashboard__top__select__inputs--sort-select--option" value="date">Date</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dashboard__links">
                    <div className="dashboard__links__list">
                        <a href="#" className="dashboard__links__list--item">
                            Todos
                        </a>
                        <a href="#" className="dashboard__links__list--item">
                            Notes
                        </a>
                    </div>
                </div>
                <section className="section__todos">
                    <div className="section__todos__list">
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
                    </div>
                </section>
            </div>
        </div>
    )
}