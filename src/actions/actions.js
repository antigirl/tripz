export function gotEvents(events) {
    return {
        type: 'GOT_EVENTS',
        events: events
    }
}

export function getEvents() {
    return dispatch => {
            fetch('http://localhost:3000/events', {
        	method: 'get'
        }).then((response) => response.json()).then((result) => {
            dispatch(gotEvents(result));
        }).catch((err) => {
            console.log('error from feed ', err);
        });
    };
}
