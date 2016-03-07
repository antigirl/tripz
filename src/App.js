import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import Card from './components/card/card';
import Modal from './components/modal/modal';
import Search from './components/search/search';
import Filter from './components/filter/filter';
import Loader from './components/loader';
import classNames from 'classnames';
import './styles/reset.scss'
import './styles/main.scss'
import './styles/preloader.scss'

export default class App extends Component {
    componentDidMount() {
        this.props.actions.getEvents();
    }

    render() {
        const { appState, events, actions} = this.props;
        const modalClass = classNames('modal', {
            'modal--show': appState.modal
        });

        if (appState.modal) {
            document.body.classList.add('modal__open');
        } else {
            document.body.classList.remove('modal__open');
        }

        return (
            <div>
                <Search actions={actions} />
                <div className="wrapper">

                    <Loader active={events.loading} />
                    {!Boolean(events.loading) && <Filter />}

                    <div className="card__container">
                        {(events.list || []).map((eventDetails, i) => {
                            return <Card {...eventDetails} actions={actions} key={i}/>;
                        })}
                    </div>

                    <div className={modalClass} onClick={()=> {actions.hideModal()}}>

                        {appState.card ? <Modal {...appState.card}/> : null }
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
