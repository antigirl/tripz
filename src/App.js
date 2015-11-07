import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actions';
import { bindActionCreators } from 'redux'
import TodoList from './components/TodoList'

export default class App extends Component {
    updateItem(actions) {
        actions.addItem(this.refs.textInput.value);
    }
    render() {
        const { actions, items } = this.props;
        console.log('this.props', this.props);
        return (
            <div>
                <h3> todo Redux </h3>
                <input type="text" ref="textInput" />
                <button onClick={this.updateItem.bind(this, actions)}>submit</button>
                <br/>
                <TodoList items={items} onItemClick={function(index) {
                    actions.completeItem(index);
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

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
