import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionCreators from './actions/actions';
import CardList from './components/cardList';
import Modal from './components/modal/modal';
import Search from './components/search/search';
import Filter from './components/filter/filter';
import Loader from './components/loader';
import Map from './components/map';
import cs from 'classnames';
import qs from 'qs';
import LocationList from './components/LocationList';

import './styles/reset.scss'
import './styles/main.scss'
import './styles/preloader.scss'

export default class App extends Component {

    constructor(props) {
        super(props);
        const queryStrings = qs.parse(window.location.search.replace('?', ''));
        if (queryStrings.noFilters) {
            this.props.actions.setTags({});
        }

    }

    componentDidMount() {
        this.props.actions.getEvents();
        this.props.actions.getLocations();
    }

    render() {
        const { appState, events, actions, locations } = this.props;

        return (
            <div>
                <Search actions={actions} tags={appState.tags}/>
                <div className="wrapper">

                    <Loader active={events.loading} />
                    {!Boolean(events.loading) && <Filter displayMode={appState.displayMode} displayToggleAction={actions.displayToggleClicked} showViewModeToggle={Boolean(appState.tags.location)}/>}

                    {(appState.displayMode === 'cards' && appState.tags.location) && <CardList tags={appState.tags} cards={events.list} actions={actions} />}
                    {(appState.displayMode === 'map' && appState.tags.location) && <Map actions={actions} events={events.list}/>}
                    {!appState.tags.location && <LocationList actions={actions} locations={appState.locations} />}

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
