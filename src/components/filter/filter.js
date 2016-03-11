import React, { Component } from 'react';
import { getEndPoint } from '../../utils/endpoint';
import './filterstyle.scss';

const iconToDisplayByViewMode = {
    'cards': getEndPoint() + '/map.svg',
    'map': getEndPoint() + '/grid.svg'
};

export default class Filter extends Component {
    render() {

        const downArrow = {
            width: '8px',
            height: '10px',
            background: 'url(' + getEndPoint() + '/downarrow.svg) 50% 50% / cover no-repeat',
            display: 'inline-block',
            float: 'right'
        };

        return(
            <div className="filters">
                <ul className="filter__list">
                    <li>WEATHER <span style={downArrow}></span></li>
                    <li>ONLY SHOW ME... <span style={downArrow}></span></li>
                    <li>SORT BY <span style={downArrow}></span></li>
                </ul>
                {this.props.showViewModeToggle ?
                <button className="filter__toggle" onClick={this.props.displayToggleAction}>
                    <img src={iconToDisplayByViewMode[this.props.displayMode]} height="20"/>
                </button>
                : ''}
            </div>
        )
    }
}
