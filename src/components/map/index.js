import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './style.scss';
import MapPin from '../MapPin';

export default class Map extends Component {
    render() {
        const {actions} = this.props;
        return(
            <div className="map">
                <GoogleMap
                    center={{lat: 53.480759, lng: -2.242631}}
                    zoom={14}
                >
                {this.props.events.map(function (event, index) {
                    const { id, type, name, image, date, location, suitablefor, desc, coords } = event;
                    return <MapPin
                        key={index}
                        event={event}
                        lat={coords.lat}
                        lng={coords.lng}
                        onClick={() => actions.showModal(type, name, image, date, location, suitablefor, desc)}
                        />
                })}

                </GoogleMap>

            </div>
        )
    }
}
