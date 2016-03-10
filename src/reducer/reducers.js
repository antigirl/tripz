const initialAppState = {
    displayMode: 'cards',
    tags: {
        location: {
            text: 'Norwich'
        },
        date:  {
            text: 'This Weekend'
        }
    }
};

function eventsReducer(state={events:[], loading:true}, action) {
    switch (action.type) {
        case 'GOT_EVENTS':
        return {
            loading: false,
            list: action.events
        };

        case 'LOADING':
        return {
            loading: true
        };

        default:
        return state;
    }
}

function appStateReducer(state = initialAppState, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
        return Object.assign({}, state, {
            modal: true,
            card: action.card
        });

        case 'HIDE_MODAL':
        return Object.assign({}, state, {
            modal: false
        });

        case 'DISPLAY_TOGGLE_CLICKED':
        const displayMode = state.displayMode === 'map' ? 'cards' : 'map';
        return Object.assign({}, state, {
            displayMode
        });

        case 'SET_TAGS':
        return Object.assign({}, state, {
            tags: action.tags
        });

        case 'SET_LOCATION_TAG':
        return Object.assign({}, state, {
            tags: Object.assign({}, state.tags, action.location)
        });

        default:
        return state;
    }
}

export default function trips(state={}, action) {
    return {
        events: eventsReducer(state.events, action),
        appState: appStateReducer(state.appState, action)
    }
}
