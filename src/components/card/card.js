import React, { Component } from 'react';
import './cardstyle.scss';

export default class Card extends Component {
    render() {
        const { type, name, image, date, location, suitablefor, desc } = this.props;
        const truncateDesc = desc.substring(0, 100);

        const cardBgStyles = {
            background: 'url(http://localhost:3000/' + image + ') 50% 50% / cover no-repeat'
        };

        const cardTypeStyles = {
            background: 'rgba(230,90,171,.8)'
        };

        return (
            <div className="card">
                <div className="card__image" style={cardBgStyles}>
                    <div className="card__type" style={cardTypeStyles}>{type}</div>
                    <span className="card__fav"><img src="http://localhost:3000/heart.svg" width="15" /></span>
                </div>

                <div className="card__body">
                    <h4 className="card__title">{name}</h4>
                    <span className="card__desc">
                        {truncateDesc}...
                    </span>

                    <ul className="card__footer">
                        <li> <span className="card__footericons"><img src="http://localhost:3000/calendar.svg" width="15" /></span> {date} </li>
                        <li> <span className="card__footericons"><img src="http://localhost:3000/map.svg" height="17"/></span> {location} </li>
                    </ul>
                </div>
            </div>
        );
    }
}
