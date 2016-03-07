import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './searchstyle.scss';
import './tagstyle.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: [],
            activeCategory: 'occupancy'
        };
    }

    componentDidMount() {
        this.inputDOMnode = ReactDOM.findDOMNode(this.refs.input);

        this.setState({
            tags: [{
                type: 'location',
                val: 'Norwich'
            }]
        });
    }

    handlePress(e) {
        e.preventDefault();
        // var textValue = this.inputDOMnode.value;
        // this.inputDOMnode.placeholder = '';
        // if (e.keyCode === 9) {
        //     this.setState({
        //         tags: this.state.tags.concat([{
        //             type: 'activity',
        //             val: textValue
        //         }])
        //     });
        //     this.inputDOMnode.value = '';
        //     this.inputDOMnode.focus();
        //     this.props.actions.getEvents();
        //
        // }
    }

    addItem(type, e) {
        //this.inputDOMnode.placeholder = '';
        const itemsOnly = e.target.className !== 'search__options';
        const item = ReactDOM.findDOMNode(e.target).innerHTML.toLowerCase();
        if (itemsOnly) {
            this.setState({
                tags: this.state.tags.concat([{
                    type: type,
                    val: item
                }])
            });
            this.props.actions.getEvents();
        }
    }

    removeItem(tag) {
        let index = this.state.tags.indexOf(tag);
        this.setState({
            tags: this.state.tags.filter((_, i) => i !== index)
        });

        this.props.actions.getEvents();
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (this.state.tags.length) {
            this.props.actions.getEvents();
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
        return(
            <header>
                <div className="search">
                    <form>
                        <div className="search__inputwrapper">
                            {this.state.tags.map((tag, i)=> {
                                const tagTypeClass = classNames('tag', 'tag__' + tag.type);
                                return <div className={tagTypeClass} key={i}>{tag.val}<span className="tag__cancel" onClick={() => this.removeItem(tag)}>x</span></div>
                            })}

                            <input type="text" className="search__input" ref="input" onKeyDown={this.handlePress.bind(this)} placeholder="Enter or Select location, date, holiday type and activities"/>
                        </div>
                        <button className="search__button" onClick={(e) => this.handleSubmit(e)}>SEARCH</button>
                    </form>


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
            </header>
        )
    }
}
