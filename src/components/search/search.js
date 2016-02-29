import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import './searchstyle.scss';
import './tagstyle.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: []
        };
    }

    handlePress(e) {
        var textValue = ReactDOM.findDOMNode(this.refs.editor).value;
        if (e.keyCode === 9) {
            this.setState({
                tags: this.state.tags.concat([textValue])
            });
            ReactDOM.findDOMNode(this.refs.editor).value = '';
            this.props.actions.getEvents();
        }
    }

    addItem(item) {
        this.setState({
            tags: this.state.tags.concat([item])
        });
        this.props.actions.getEvents();
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

    render() {
        return(
            <header>
                <div className="search">
                    <form>
                        <div className="search__inputwrapper">
                            {this.state.tags.map((tag, i)=> {
                                let tagType = 'tag__location';
                                if (i === 1) {
                                    tagType = 'tag__date';
                                }
                                if (i == 2) {
                                    tagType = 'tag__holidaytype';
                                }
                                if (i >= 3) {
                                    tagType = 'tag__activity';
                                }
                                const tagTypeClass = classNames('tag', tagType);
                                return <div className={tagTypeClass} key={i}>{tag}<span className="tag__cancel" onClick={() => this.removeItem(tag)}>x</span></div>
                            })}

                            <input type="text" className="search__input" ref="editor" onKeyDown={this.handlePress.bind(this)} />
                        </div>

                        <button className="search__button" onClick={(e) => this.handleSubmit(e)}>SEARCH</button>
                    </form>

                    {this.state.tags.length === 0 ? <ul className="search__options"><li onClick={()=>this.addItem('Manchester')}>Manchester</li><li onClick={()=>this.addItem('London')}>London</li><li onClick={()=>this.addItem('Glasgow')}>Glasgow</li><li onClick={()=>this.addItem('Birmingham')}>Birmingham</li></ul> : null}
                    {this.state.tags.length === 1 ? <ul className="search__options"><li onClick={()=>this.addItem('5th March 2015')}>5th March 2015</li><li onClick={()=>this.addItem('12th March 2015')}>12th March 2015</li><li onClick={()=>this.addItem('19th March 2015')}>19th March 2015</li><li onClick={()=>this.addItem('26th March 2015')}>26th March 2015</li></ul>: null}
                    {this.state.tags.length === 2 ? <ul className="search__options"><li onClick={()=>this.addItem('Family Holiday')}>Family Holiday</li><li onClick={()=>this.addItem('Romantic Getaway')}>Romantic Getaway</li><li onClick={()=>this.addItem('Groups')}>Groups</li><li onClick={()=>this.addItem('Couples')}>Couples</li></ul>: null}
                    {this.state.tags.length >= 3 ? <ul className="search__options"><li onClick={()=>this.addItem('Music')}>Music</li><li onClick={()=>this.addItem('Eating')}>Eating</li><li onClick={()=>this.addItem('Outdoors')}>Outdoors</li><li onClick={()=>this.addItem('Night Life')}>Night Life</li></ul>: null}
                </div>
            </header>
        )
    }
}
