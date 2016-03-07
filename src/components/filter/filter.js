import React, { Component } from 'react';
import './filterstyle.scss';

const iconToDisplayByViewMode = {
    'cards': 'http://localhost:3000/map.svg',
    'map': 'http://localhost:3000/grid.svg'
};

export default class Filter extends Component {

    render() {
        return(
            <div className="filters">
                <ul className="filter__list">
                    <li>WEATHER</li>
                    <li>PRICE</li>
                    <li>SORT BY</li>
                </ul>

                <button className="filter__toggle" onClick={this.props.displayToggleAction}>
                    <img src={iconToDisplayByViewMode[this.props.displayMode]} height="20"/>
                </button>
            </div>
        )
    }
}
