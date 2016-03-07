import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import CardList from './components/CardList';
import Modal from './components/modal/modal';
import Search from './components/search/search';
import Filter from './components/filter/filter';
import Loader from './components/loader';
import Map from './components/map';
import cs from 'classnames';
import './styles/reset.scss'
import './styles/main.scss'
import './styles/preloader.scss'

export default class App extends Component {
    componentDidMount() {
        this.props.actions.getEvents();
    }

    render() {
        const { appState, events, actions} = this.props;

        return (
            <div>
                <Search actions={actions} />
                <div className="wrapper">

                    <Loader active={events.loading} />
                    {!Boolean(events.loading) && <Filter displayToggleAction={this.props.actions.displayToggleClicked}/>}

                    {this.props.appState.displayMode === 'cards' && <CardList cards={events.list} actions={actions} />}
                    {this.props.appState.displayMode === 'map' && <Map actions={actions} events={events.list}/>}

                    <div className={cs('modal', {
                        'modal--show': appState.modal
                    })} onClick={actions.hideModal}>
                        {appState.card && <Modal {...appState.card}/>}
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
