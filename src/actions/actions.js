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
    document.body.classList.add('modal__open');

    return {
        type: 'SHOW_MODAL',
        card: {
            type, name, image, date, location, suitablefor, desc
        }
    }
}

export function hideModal() {
    document.body.classList.remove('modal__open');

    return {
        type: 'HIDE_MODAL'
    }
}

export function getEvents() {
    return dispatch => {
        //dispatch(loading());
        fetchUtil('http://localhost:3000/events').then((result)=> {
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
