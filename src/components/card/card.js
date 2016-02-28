import React, { Component } from 'react';
import classNames from 'classnames';
import './cardstyle.scss';

export default class Card extends Component {
    render() {
        const { id, type, name, image, date, location, suitablefor, desc, actions } = this.props;
        const truncateDesc = desc.substring(0, 100);

        const cardBgStyles = {
            background: 'url(http://localhost:3000/' + image + ') 50% 50% / cover no-repeat'
        };

        const cardTypeClass = classNames('card__type', type);


        return (
            <div className="card" onClick={() => actions.cardClick(id)}>
                <div className="card__image" style={cardBgStyles}>
                    <div className={cardTypeClass}>{type}</div>
                    <span className="card__fav"><img src="http://localhost:3000/heart.svg" width="15" /></span>
                </div>

                <div className="card__body">
                    <h4 className="card__title">{name}</h4>
                    <span className="card__desc">
                        {truncateDesc}...
                    </span>

                    <ul className="card__footer">
                        <li> <span className="card__footericons"><img src="http://localhost:3000/calendar.svg" width="12" /></span> {date} </li>
                        <li> <span className="card__footericons"><img src="http://localhost:3000/map.svg" height="12"/></span> {location} </li>
                    </ul>
                </div>
            </div>
        );
    }
}
