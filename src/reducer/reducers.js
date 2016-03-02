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

function appStateReducer(state={}, action) {
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
