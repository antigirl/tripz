import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import Card from './components/card/card';
import Modal from './components/modal/modal';
import Search from './components/search/search';
import Filter from './components/filter/filter';
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

        return (
            <div>
                <Search />

                <div className="wrapper">
                    <Filter />
                    <div className="card__container">
                        {events.map((eventDetails, i) => {
                            return <Card {...eventDetails} actions={actions} key={i}/>;
                        })}
                    </div>


                    <div className={modalClass} onClick={()=> {actions.hideModal()}}>
                        <Modal {...appState.card}/>
                    </div>
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
