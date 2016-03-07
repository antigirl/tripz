import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import SearchCategories from '../searchCategories/searchCategories';
import './searchstyle.scss';
import './tagstyle.scss';

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.addItem = this.addItem.bind(this);
        this.state = {
            tags: [],
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

    addItem(type, item) {
        //this.inputDOMnode.placeholder = '';
        this.setState({
            tags: this.state.tags.concat([{
                type: type,
                val: item
            }])
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
                                const tagTypeClass = classNames('tag', 'tag__' + tag.type);
                                return <div className={tagTypeClass} key={i}>{tag.val}<span className="tag__cancel" onClick={() => this.removeItem(tag)}>x</span></div>
                            })}

                            <input type="text" className="search__input" ref="input" onKeyDown={this.handlePress.bind(this)} placeholder="Enter or Select location, date, holiday type and activities"/>
                        </div>
                        <button className="search__button" onClick={(e) => this.handleSubmit(e)}>SEARCH</button>
                    </form>
                </div>
                <SearchCategories addItemCallback={this.addItem}/>
            </header>
        )
    }
}
