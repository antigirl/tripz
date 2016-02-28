function eventsReducer(state=[], action) {
    switch (action.type) {
        case 'GOT_EVENTS':
        return action.events;

        default:
        return state;
    }
}

export default function todoApp(state={}, action) {
    return {
        events: eventsReducer(state.events, action),
    }
}
