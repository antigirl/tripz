import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

export default class TodoList extends Component {
    showType(item) {
        return item.completed;
    }
    render() {
        const {filter} = this.props;
        return (
            <ul style={{padding:0,margin:0}}>
            {this.props.items.map((item, i) => {
                return <ToDoItem key={i} index={i} text={item.text} completed={item.completed} onItemClick={this.props.onItemClick}/>
                }
            ).filter(item => {
                if(filter==='SHOW_COMPLETED') {
                    return item.props.completed;
                } else {
                    return item;
                }
            })}
            </ul>
        );
    }
}
