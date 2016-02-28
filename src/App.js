import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import Card from './components/card/card';
import './styles/reset.scss'
import './styles/main.scss'

export default class App extends Component {
    componentDidMount() {
        this.props.actions.getEvents();
    }

    render() {
        return (
            <div>
                {this.props.events.map((eventDetails, i) => {
                    return <Card {...eventDetails} key={i}/>;
                })}
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
