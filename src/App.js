import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import TodoList from './components/TodoList'
import Immutable from 'immutable';

export default class App extends Component {
    updateItem(actions) {
        actions.addItem(this.refs.textInput.value);
    }

    updateFilter(actions, type) {
        actions.updateFilter(type);
    }

    render() {
        const { actions, items, filter } = this.props;
        let showAlldec = filter.type === 'SHOW_ALL' ? 'red' : 'black';
        let showCompletedec = filter.type === 'SHOW_COMPLETED' ? 'red' : 'black';
        return (
            <div>
                <h2 style={{margin:0}}> todo Redux </h2>
                <h5 onClick={this.updateFilter.bind(this,actions,'SHOW_ALL')} style={{margin:0, color:showAlldec}}>SHOW_ALL</h5>
                <h5 onClick={this.updateFilter.bind(this,actions,'SHOW_COMPLETED')} style={{margin:0, color:showCompletedec}}>SHOW_COMPLETED</h5> <br/>
                <input type="text" ref="textInput" />
                <button onClick={this.updateItem.bind(this, actions)}>submit</button>
                <br/>
                <TodoList items={items} filter={filter.type} onItemClick={function(index) {
                    actions.completeItem(index);
                }}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      items: state.todo.toJS(),
      filter: state.filter.toJS()
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
