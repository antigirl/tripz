import React, { Component } from 'react';
import classNames from 'classnames';
import { getEndPoint } from '../../utils/endpoint';
import './cardstyle.scss';

export default class Card extends Component {
    render() {
        const { id, type, name, image, date, location, suitablefor, desc, actions, distanceFromHotel } = this.props;
        const truncateDesc = desc.substring(0, 100);

        const cardBgStyles = {
            background: 'url(' + getEndPoint() + '/' + image + ') 50% 50% / cover no-repeat'
        };

        const cardTypeClass = classNames('card__type', type.toLowerCase());

        return (
            <div className="card" onClick={() => actions.showModal(type, name, image, date, location, suitablefor, desc, distanceFromHotel)}>
                <div className="card__image" style={cardBgStyles}>
                    <div className={cardTypeClass}>{type}</div>
                    <span className="card__fav"><img src={getEndPoint() + '/heart.svg'} width="15" /></span>
                </div>

                <div className="card__body">
                    <h4 className="card__title">{name}</h4>
                    <span className="card__desc">
                        {truncateDesc}...
                    </span>

                    <ul className="card__footer">
                        <li> <span className="card__footericons"><img src={getEndPoint() + '/calendar.svg'} width="12" /></span> {date} </li>
                        <li> <span className="card__footericons"><img src={getEndPoint() + '/map.svg'} height="12"/></span> {this.props.tags.location.text} </li>
                    </ul>
                </div>
            </div>
        );
    }
}
