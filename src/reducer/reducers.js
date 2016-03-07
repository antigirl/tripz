function eventsReducer(state={events:[], loading:true}, action) {
    switch (action.type) {
        case 'GOT_EVENTS':
        console.log('action =>', action);
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

function appStateReducer(state={displayMode: 'cards'}, action) {
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
