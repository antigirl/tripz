const serverEndPoint = 'http://localhost:3000';

export function gotEvents(events) {
    return {
        type: 'GOT_EVENTS',
        events: events
    }
}

export function showModal(card) {
    return {
        type: 'SHOW_MODAL',
        card
    }
}

export function hideModal() {
    return {
        type: 'HIDE_MODAL'
    }
}

export function cardClick(id) {
    return dispatch => {
        fetchUtil(serverEndPoint+'/events?id=' + id).then((result)=> {
            dispatch(showModal(result[0]));
        });
    };
}

export function getEvents() {
    return dispatch => {
        fetchUtil(serverEndPoint+ '/events').then((result)=> {
            dispatch(gotEvents(result.shuffle()));
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

Array.prototype.shuffle = function() {
  var i = this.length, j, temp;
  if ( i == 0 ) return this;
  while ( --i ) {
     j = Math.floor( Math.random() * ( i + 1 ) );
     temp = this[i];
     this[i] = this[j];
     this[j] = temp;
  }
  return this;
}
