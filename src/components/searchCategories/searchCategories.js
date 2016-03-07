import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';

export default class SearchCategories extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeCategory: 'occupancy'
        };
    }

    addItem(type, e) {
        const itemsOnly = e.target.className !== 'search__options';
        const item = ReactDOM.findDOMNode(e.target).innerHTML.toLowerCase();
        if (itemsOnly) {
            this.props.addItemCallback(type, item);
        }
    }

    setCategory(e) {
        const category = ReactDOM.findDOMNode(e.target).innerHTML.toLowerCase();
        const itemsOnly = e.target.className !== 'search__categories';
        if (itemsOnly) {
            this.setState({
                activeCategory: category
            });
        }
    }

    render() {
        return (
            <div className="search__catWrapper">
                {this.state.activeCategory === 'occupancy' ?
                    <ul className="search__options" onClick={this.addItem.bind(this, 'occupancy')}>
                        <li className="tag__occupancy">+1 Adult</li>
                        <li className="tag__occupancy">+1 Child</li>
                    </ul> : null }


                {this.state.activeCategory === 'dates' ?
                    <ul className="search__options" onClick={this.addItem.bind(this, 'date')}>
                        <li className="tag__date">Select Date</li>
                        <li className="tag__date">Tonight</li>
                        <li className="tag__date">Tomorrow</li>
                        <li className="tag__date">This Weekend</li>
                        <li className="tag__date">Next Weekend</li>
                        <li className="tag__date">Next Month</li>
                    </ul> : null }

                    {this.state.activeCategory === 'activities' ?
                        <ul className="search__options" onClick={this.addItem.bind(this, 'activity')}>
                            <li className="tag__activity">Music</li>
                            <li className="tag__activity">Eating</li>
                            <li className="tag__activity">Culture</li>
                            <li className="tag__activity">Outdoors</li>
                            <li className="tag__activity">Indoors</li>
                            <li className="tag__activity">Family</li>
                            <li className="tag__activity">Romantic</li>
                            <li className="tag__activity">Sight seeing</li>
                            <li className="tag__activity">Shopping</li>
                            <li className="tag__activity">Night Life</li>
                            <li className="tag__activity">Tours</li>
                        </ul> : null }

                <ul className="search__categories" onClick={this.setCategory.bind(this)}>
                    <li className={this.state.activeCategory === 'occupancy'? 'active' : null }>Occupancy</li>
                    <li className={this.state.activeCategory === 'dates'? 'active' : null }>Dates</li>
                    <li className={this.state.activeCategory === 'activities'? 'active' : null }>Activities</li>
                </ul>
            </div>
        );
    }
}
