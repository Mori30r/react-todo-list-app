import React from "react";

export const DashboardTop = () => {
    return (
        <div>
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
                </div>
            </div>
        </div>

    )
}

