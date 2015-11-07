import React, { Component } from 'react';

export default class ToDoItem extends Component {
    completeItem(i) {
        this.props.onItemClick(i)
    }
    render() {
        let index = this.props.index;
        let decoration = this.props.completed? 'line-through' : 'none';
        return(
            <li style={{textDecoration: decoration}} onClick={this.completeItem.bind(this, index)}>{this.props.text}</li>
        )
    }
}
