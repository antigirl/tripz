import React, { Component } from 'react';
import Location from '../location';

import './style.scss';

export default class LocationList extends Component {
    render() {
        return(
            <div>
                {this.props.locations.map((location, index) => {
                    return <Location key={index} locationData={location} />
                })}
            </div>
        )
    }
}
