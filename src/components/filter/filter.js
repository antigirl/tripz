import React, { Component } from 'react';
import './filterstyle.scss';

export default class Filter extends Component {
    render() {
        return(
            <div className="filters">
                <ul className="filter__list">
                    <li>WEATHER</li>
                    <li>PRICE</li>
                    <li>SORT BY</li>
                </ul>

                <button className="filter__toggle">
                    <img src="http://localhost:3000/map.svg" height="20"/>
                </button>
            </div>
        )
    }
}
