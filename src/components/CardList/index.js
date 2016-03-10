import React, { PropTypes } from 'react';
import classNames from 'classnames';
import Card from '../card';
import './index.scss';

const CardList = React.createClass({

    render() {
        const {
            cards = [],
            actions
        } = this.props;

        if (cards.length === 0) {
            return null;
        }

        return (
            <div className="card-list">
                {cards.map((cardDetails, i) => {
                    return <Card {...cardDetails} tags={this.props.tags} actions={actions} key={i}/>;
                })}
            </div>
        );
    }

});

export default CardList;
