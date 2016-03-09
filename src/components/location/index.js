import React, { Component } from 'react';
import './style.scss';

export default class LocationList extends Component {
    render() {
        const {image} = this.props.locationData;

        return(
            <div className="location">
                <div className="location__image">
                    <img src={this.props.locationData.image} />
                    <div className="location__image__name">{this.props.locationData.name}</div>
                </div>
                <div className="location__body">
                    <span className="location__desc">
                        <div className="location__desc__title">Why visit</div>
                        {this.props.locationData.whyVisit}
                    </span>
                </div>
            </div>
        )
    }
}
