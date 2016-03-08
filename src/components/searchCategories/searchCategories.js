import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import cs from 'classnames';

const occupancyOptions = [{
    text: '+1 Adult',
    key: 'adults',
    singular: 'Adult',
}, {
    text: '+1 Child',
    key: 'children',
    singular: 'Child',
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
    text: 'Eating'
}, {
    text: 'Culture'
}, {
    text: 'Outdoors'
}, {
    text: 'Indoors'
}, {
    text: 'Family'
}, {
    text: 'Romantic'
}, {
    text: 'Sight seeing'
}, {
    text: 'Shopping'
}, {
    text: 'Night Life'
}, {
    text: 'Tours'
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
                        {dateOptions.map((option) => (
                            <li
                                key={option.text}
                                className="tag__date"
                                onClick={this.addItem.bind(this, 'date', option)}
                            >{option.text}</li>
                        ))}
                    </ul> : null }

                {this.state.activeCategory === 'activities' ?
                    <ul className="search__options">
                        {activitiesOptions.map((option) => (
                            <li
                                key={option.text}
                                className="tag__activity"
                                onClick={this.addItem.bind(this, 'activities', option)}
                            >{option.text}</li>
                        ))}
                    </ul> : null }

                {this.state.activeCategory === 'type' ?
                    <ul className="search__options">
                        {typeOptions.map((option) => (
                            <li
                                key={option.text}
                                className="tag__type"
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
                    <li className={cs({
                        active: activeCategory === 'type'
                    })} onClick={this.setCategory.bind(this, 'type')}>Type</li>
                </ul>
            </div>
        );
    }
}
