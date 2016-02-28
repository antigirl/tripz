import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import Card from './components/card/card';
import Modal from './components/modal/modal';
import classNames from 'classnames';
import './styles/reset.scss'
import './styles/main.scss'

export default class App extends Component {
    componentDidMount() {
        this.props.actions.getEvents();
    }

    render() {
        const { appState, events, actions} = this.props;
        const modalClass = classNames('modal', {
            'modal--show': appState.modal
        });

        console.log(appState);
        return (
            <div className="wrapper">
                {events.map((eventDetails, i) => {
                    return <Card {...eventDetails} actions={actions} key={i}/>;
                })}


                <div className={modalClass} onClick={()=> {actions.hideModal()}}>
                    <Modal {...appState.card}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
  return {
      events: state.events,
      appState: state.appState
  };
}

function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(actionCreators, dispatch) }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
