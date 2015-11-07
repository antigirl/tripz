import React, { Component } from 'react';
import { connect } from 'react-redux';
import {addItem, completeItem} from './actions/actions';
import TodoList from './components/TodoList'

export default class App extends Component {
    updateItem(dispatch) {
        dispatch(addItem(this.refs.textInput.value));
    }
    render() {
        const { dispatch, items } = this.props;
        return (
            <div>
                <h3> todo Redux </h3>
                <input type="text" ref="textInput" />
                <button onClick={this.updateItem.bind(this, dispatch)}>submit</button>
                <br/>
                <TodoList items={items} onItemClick={function(index) {
                    dispatch(completeItem(index))
                }}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      items: state
  };
}

export default connect(mapStateToProps)(App)
