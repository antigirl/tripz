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
import qs from 'qs';
import LocationList from './components/LocationList';

import './styles/reset.scss'
import './styles/main.scss'
import './styles/preloader.scss'

const locations = [
    {
        name: 'Bath',
        image: 'http://localhost:3000/locations/bath.jpg',
        whyVisit: 'Roman baths, Georgian architecture, Jane Austen Centre, The Royal Crescent, afternoon tea, thermal spas.'
    },
    {
        name: 'York',
        image: 'http://localhost:3000/locations/york.jpg',
        whyVisit: 'Castle Howard, York Minster, old fortifications and Gothic architecture, haunted legends, streets like a labyrinth.'
    },
    {
        name: 'Bristol',
        image: 'http://localhost:3000/locations/bristol.jpg',
        whyVisit: 'The Docks, Clifton Bridge, trip-hop, electronica, art collectives, Banksy pieces, industrial pasts.'
    },{
        name: 'London',
        image: 'http://localhost:3000/locations/london.jpg',
        whyVisit: 'Pub culture, tea culture, the royal family, Big Ben, Shakespeare, wry humour, theatre, fashion and finance, fish and chips, Tate Modern, the Tube, the gap.'
    }, {
        name: 'Edinburgh',
        image: 'http://localhost:3000/locations/edinburgh.jpg',
        whyVisit: 'Arthur\'s Seat, cutting-edge theatre, mystical fog, stunning cliff-faces, spooky stories, tall spires, underground pubs, and whisky.'
    }, {
        name: 'Brighton',
        image: 'http://localhost:3000/locations/brighton.jpg',
        whyVisit: 'The Lanes, London-by-the-sea, Brighton Pier, LGBTQ culture, independent cafes, cute boutiques, vintage shops, pebble beaches.'
    }
]

export default class App extends Component {
    componentDidMount() {
        this.props.actions.getEvents();
    }

    render() {
        const { appState, events, actions} = this.props;
        const queryStrings = qs.parse(window.location.search.replace('?', ''));

        return (
            <div>
                <Search actions={actions} />
                <div className="wrapper">

                    <Loader active={events.loading} />
                    {!Boolean(events.loading) && <Filter displayMode={this.props.appState.displayMode} displayToggleAction={this.props.actions.displayToggleClicked}/>}
                    
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
