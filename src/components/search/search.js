import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import classNames from 'classnames';
import plur from 'plur';
import SearchCategories from '../searchCategories/searchCategories';
import './searchstyle.scss';
import './tagstyle.scss';

function titlecase(str) {
    return str.replace(/(?:^(\w{1})| (\w{1}))/g, (a) => {
        return a.toUpperCase();
    });
}

export default class Search extends Component {
    constructor(props) {
        super(props);

        this.activities = [];
        this.adults = null;
        this.children = null;
        this.addItem = this.addItem.bind(this);
        this.state = {
            tags: {},
            adults: 0,
            children: 0
        };
    }

    componentDidMount() {
        this.inputDOMnode = ReactDOM.findDOMNode(this.refs.input);
    }

    handlePress(e) {
        e.preventDefault();
        // var textValue = this.inputDOMnode.value;
        // this.inputDOMnode.placeholder = '';
        // if (e.keyCode === 9) {
        //     this.setState({
        //         tags: this.props.tags.concat([{
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

    createOccupancyTag (item, count) {
        return titlecase(`${count} ${plur(item.singular, count)}`);
    }

    addItem(type, item) {
        let newItem = {[type]: {
            text: item.text
        }};

        if (type === 'occupancy') {
            newItem = {
                [`${type}-${item.key}`]: {
                    text: this.createOccupancyTag(item, this.state[item.key] + 1),
                    key: item.key,
                    singular: item.singular
                }
            };

            this.setState({
                [item.key]: ++this.state[item.key]
            });
        }

        if (type === 'activity') {
            if (this.activities.length < 3) {
                const dupe = (this.props.tags.activity || []).some((_item) => _item.text === item.text);
                if (!dupe) {
                    this.activities = this.activities.concat([{
                        text: item.text
                    }]);
                }
                newItem = {'activity': this.activities };
            } else {
                newItem = {'activity' : this.activities }
            }
        }

        this.setState({
            tags: Object.assign({}, this.props.tags, newItem)
        });

        this.props.actions.setTags(Object.assign({}, this.props.tags, newItem));
        this.props.actions.getEvents(this.activities);
    }

    removeItem(tag, type) {
        let tempState =  Object.assign({}, this.props.tags);

        if (type === 'activity') {
            this.activities = this.activities.filter((_tag) => tag.text !== _tag.text);

            tempState =  Object.assign({}, this.props.tags, {'activity': this.activities});
        } else if (type.indexOf('occupancy') > -1) {
            this.setState({
                [type]: --this.state[tag.key]
            }, () => {
                if (this.state[tag.key] === 0) {
                    delete tempState[type];
                } else {
                    tempState[type].text = this.createOccupancyTag(tag, this.state[tag.key]);
                }
            });
        } else {
            delete tempState[type];
        }

        this.setState({
            tags: tempState
        });

        this.props.actions.setTags(tempState);

        this.props.actions.getEvents(this.activities);
    }

    handleSubmit(e) {
        e.preventDefault();
        e.stopPropagation();

        if (Object.keys(this.props.tags).length) {
            this.props.actions.getEvents(this.activities);
        }
    }


    render() {
        return(
            <header>
                <div className="search">
                    <form>
                        <div className="search__inputwrapper">
                            { Object.keys(this.props.tags).map((tag, i)=> {
                                const tagTypeClass = classNames('tag', 'tag__' + tag);
                                if (tag === 'activity') {
                                    return this.props.tags.activity.map((theActivity, j) => {
                                        return <div className={tagTypeClass} key={j}>{theActivity.text}<span className="tag__cancel" onClick={() => this.removeItem(theActivity, tag)}>&times;</span></div>
                                    })
                                }
                                return <div className={tagTypeClass} key={i}>{this.props.tags[tag].text}<span className="tag__cancel" onClick={() => this.removeItem(this.props.tags[tag], tag)}>&times;</span></div>
                            })}

                            <input type="text" className="search__input" ref="input" onKeyDown={this.handlePress.bind(this)} placeholder="Select or Modify Occupancy, Dates and Activities"/>
                        </div>
                        <button className="search__button" onClick={(e) => this.handleSubmit(e)}>SEARCH</button>
                    </form>
                </div>
                <SearchCategories addItemCallback={this.addItem} tags={this.props.tags}/>
            </header>
        )
    }
}
