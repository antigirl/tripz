import React, { Component } from 'react';
import './searchstyle.scss';
import './tagstyle.scss';

export default class Search extends Component {
    render() {
        return(
            <header>
                <div className="search">
                    <form>
                        <div className="search__input">
                            <div className="tag tag__location">Manchester <span className="tag__cancel">x</span></div>
                            <div className="tag tag__date">03 April 15 <span className="tag__cancel">x</span></div>
                            <div className="tag tag__holidaytype">Family holiday<span className="tag__cancel">x</span></div>
                            <input type="text" plceholder="search"/>
                        </div>
                        <button className="search__button" onClick={()=>this.props.actions.getEvents()}>SEARCH</button>
                    </form>

                    <ul className="search__options">
                        <li>Events</li>
                        <li>Activities</li>
                        <li>Culture</li>
                        <li>Eating</li>
                    </ul>
                </div>
            </header>
        )
    }
}
