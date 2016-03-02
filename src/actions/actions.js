const serverEndPoint = 'http://localhost:3000';

export function loading() {
    return {
        type: 'LOADING'
    }
}

export function gotEvents(events) {
    return {
        type: 'GOT_EVENTS',
        events: events
    }
}

export function showModal(type, name, image, date, location, suitablefor, desc) {
    return {
        type: 'SHOW_MODAL',
        card: {
            type, name, image, date, location, suitablefor, desc
        }
    }
}

export function hideModal() {
    return {
        type: 'HIDE_MODAL'
    }
}

export function getEvents() {
    return dispatch => {
        dispatch(loading());
        fetchUtil('http://localhost:3001/api/skiddle/events').then((resp)=> {
            const mappedResult = resp.results.map((res, i) => {
                return {
                    'id': i,
                    'type': res.venue.type,
                    'name': res.eventname,
                    'image': res.largeimageurl,
                    'date': res.date,
                    'location': res.venue.name + ', ' + res.venue.town,
                    'suitablefor': 'Couples',
                    'desc': res.description
                }
            });
            dispatch(gotEvents(mappedResult));
        });
    };
}

function fetchUtil(query) {
    return new Promise((resolve, reject) => {
        fetch(query, {
            method: 'get'
        }).then((response) => response.json()).then((result) => {
            resolve(result);
        }).catch((err) => {
            console.log('error from feed ', err);
            reject(err);
        });
    });
}

// Array.prototype.shuffle = function() {
//   var i = this.length, j, temp;
//   if ( i == 0 ) return this;
//   while ( --i ) {
//      j = Math.floor( Math.random() * ( i + 1 ) );
//      temp = this[i];
//      this[i] = this[j];
//      this[j] = temp;
//   }
//   return this;
// }
