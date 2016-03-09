import React, { Component } from 'react';
import cs from 'classnames';
import './modalstyle.scss';

export default class Modal extends Component {
    render() {
        const { type, name, image, date, location, suitablefor, desc, actions, distanceFromHotel} = this.props;
        console.log(this.props)
        const cardBgStyles = {
            backgroundImage: `url(${image})`
        };

        const mapStyles = {
            background: 'url(http://localhost:3000/staticmap.png) 50% 50% / cover no-repeat'
        };

        const cardTypeClass = cs('modal__type', type.toLowerCase());

        return (
            <div className="modal__body">
                <div className="modal__image" style={cardBgStyles}>
                    <span className="modal__fav"><img src="http://localhost:3000/heart.svg" width="40" /></span>
                    <div className={cardTypeClass}>{type}</div>
                    <h1 className="modal__header">{name}</h1>
                </div>

                <div className="modal__content">
                    <ul className="modal__items">
                        <li> <span className="modal__items-icons"><img src="http://localhost:3000/calendar.svg" width="20" /></span> {date} </li>
                        <li> <span className="modal__items-icons"><img src="http://localhost:3000/map.svg" height="20"/></span> {location} - ({distanceFromHotel} from your hotel)</li>
                        <li className="modal__items-suitable"> <span className="modal__items-icons"><img src="http://localhost:3000/for.svg" height="20"/></span> {suitablefor} </li>
                    </ul>

                    <button className="modal__buy"> GET TICKETS</button>
                    <button className="modal__notbuy"> + BUCKETLIST</button>

                    <div className="modal__desc">
                        {desc}
                        <br/><br/>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ornare magna commodo lorem vehicula faucibus. Donec dignissim neque eget nibh auctor tempor in eget eros. Proin laoreet, dolor in condimentum semper, justo sem ultrices leo, semper semper quam leo non dui. Morbi tempus, nulla a molestie semper, lorem mauris aliquet mauris, semper rutrum quam ipsum vitae tortor. Proin in nulla tortor. Cras ut nunc ac libero scelerisque semper id nec mi. Nunc facilisis auctor egestas.</p>
                    </div>

                    <div className="modal__map" style={mapStyles}></div>
                </div>
            </div>
        )
    }

}
