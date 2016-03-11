import React, { Component } from 'react';
import { getEndPoint } from '../../utils/endpoint';
import './style.scss';

const imageMap = {
    'music': getEndPoint() +'/mapicons/music.svg',
    'food': getEndPoint() +'/mapicons/food.svg',
    'comedy': getEndPoint() +'/mapicons/comedy.svg',
    'culture': getEndPoint() +'/mapicons/culture.svg',
    'exhibition': getEndPoint() +'/mapicons/exhibition.svg'
};

export default class MapPin extends Component {
    render() {
        return(
            <div onClick={this.props.onClick} className={'map-pin ' + this.props.event.type} lat={this.props.event.coords.lat} lng={this.props.event.coords.lng}>
            <img src={`${imageMap[this.props.event.type]}`} />
            </div>
        )
    }
}
