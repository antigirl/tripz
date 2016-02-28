import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import Card from './components/card';

export default class App extends Component {
    componentDidMount() {
        this.props.actions.getEvents();
    }

    render() {
        console.log('state', this.props.events);
        return (
            <div>
                APP
                <Card />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      events: state.events
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
