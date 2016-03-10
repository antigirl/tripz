import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cs from 'classnames';

const occupancyOptions = [{
    text: '+1 Adult',
    key: 'adults',
    singular: 'adult',
}, {
    text: '+1 Child',
    key: 'children',
    singular: 'child',
}];

const dateOptions = [{
    text: 'Select Date'
}, {
    text: 'Tonight'
}, {
    text: 'Tomorrow'
}, {
    text: 'This Weekend'
}, {
    text: 'Next Weekend'
}, {
    text: 'Next Month'
}];

const activitiesOptions = [{
    text: 'Music'
}, {
    text: 'Food'
}, {
    text: 'Exhibition'
}, {
    text: 'Comedy'
}, {
    text: 'Culture'
}];

const typeOptions = [{
    text: 'Romantic Break'
}];

export default class SearchCategories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeCategory: 'occupancy'
        };
    }

    addItem(type, item, e) {
        this.props.addItemCallback(type, item);
    }

    setCategory(category, e) {
        this.setState({
            activeCategory: category
        });
    }

    render() {
        const {
            activeCategory
        } = this.state;

        let {
            activity = [],
            date = {},
            type = {}
        } = this.props.tags;

        activity = activity.map((item) => item.text);

        return (
            <div className="search__catWrapper">
                {this.state.activeCategory === 'occupancy' ?
                    <ul className="search__options">
                        {occupancyOptions.map((option) => (
                            <li
                                key={option.text}
                                className="tag__occupancy"
                                onClick={this.addItem.bind(this, 'occupancy', option)}
                            >{option.text}</li>
                        ))}
                    </ul> : null }


                {this.state.activeCategory === 'dates' ?
                    <ul className="search__options">
                        {dateOptions.map((item) => Object.assign({}, item, {
                            inactive: date.text === item.text
                        })).map((option) => (
                            <li
                                key={option.text}
                                className={cs('tag__date', {
                                    inactive: option.inactive
                                })}
                                onClick={this.addItem.bind(this, 'date', option)}
                            >{option.text}</li>
                        ))}
                    </ul> : null }

                {this.state.activeCategory === 'activities' ?
                    <ul className="search__options">
                        {activitiesOptions.map((item) => Object.assign({}, item, {
                            inactive: activity.indexOf(item.text) > -1
                        })).map((option) => (
                            <li
                                key={option.text}
                                className={cs('tag__activity', {
                                    inactive: option.inactive
                                })}
                                onClick={this.addItem.bind(this, 'activity', option)}
                            >{option.text}</li>
                        ))}
                    </ul> : null }

                {this.state.activeCategory === 'type' ?
                    <ul className="search__options">
                        {typeOptions.map((item) => Object.assign({}, item, {
                            inactive: type.text === item.text
                        })).map((option) => (
                            <li
                                key={option.text}
                                className={cs('tag__type', {
                                    inactive: option.inactive
                                })}
                                onClick={this.addItem.bind(this, 'type', option)}
                            >{option.text}</li>
                        ))}
                    </ul> : null }

                <ul className="search__categories">
                    <li className={cs({
                        active: activeCategory === 'occupancy'
                    })} onClick={this.setCategory.bind(this, 'occupancy')}>Occupancy</li>
                    <li className={cs({
                        active: activeCategory === 'dates'
                    })} onClick={this.setCategory.bind(this, 'dates')}>Dates</li>
                    <li className={cs({
                        active: activeCategory === 'activities'
                    })} onClick={this.setCategory.bind(this, 'activities')}>Activities</li>
                </ul>
            </div>
        );
    }
}
/*
<li className={cs({
    active: activeCategory === 'type'
})} onClick={this.setCategory.bind(this, 'type')}>Type</li>
*/
