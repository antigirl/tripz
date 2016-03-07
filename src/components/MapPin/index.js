import React, { Component } from 'react';
import './style.scss';

const imageMap = {
    'music': 'http://localhost:3000/mapicons/music.svg',
    'food': 'http://localhost:3000/mapicons/food.svg',
    'comedy': 'http://localhost:3000/mapicons/comedy.svg',
    'culture': 'http://localhost:3000/mapicons/culture.svg',
    'exhibition': 'http://localhost:3000/mapicons/exhibition.svg'
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
