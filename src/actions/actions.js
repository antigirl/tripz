import qs from 'qs';
import { getEndPoint } from '../utils/endpoint';

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

export function gotLocations(locations) {
    return {
        type: 'GOT_LOCATIONS',
        locations: locations
    }
}

export function setTags(tags) {
    return {
        type: 'SET_TAGS',
        tags: tags
    }
}

export function setLocationTag(location) {
    return {
        type: 'SET_LOCATION_TAG',
        location: location
    }
}

export function showModal(type, name, image, date, location, suitablefor, desc, distanceFromHotel) {
    document.body.classList.add('modal__open');

    return {
        type: 'SHOW_MODAL',
        card: {
            type, name, image, date, location, suitablefor, desc, distanceFromHotel
        }
    }
}

export function hideModal() {
    document.body.classList.remove('modal__open');

    return {
        type: 'HIDE_MODAL'
    }
}

export function getEvents(activities) {
    let query = '';
    if (activities && activities.length) {
        const activityArray = activities.map((activity) => {
            return activity.text.toLowerCase();
        });

        query =  '?' + qs.stringify({type:activityArray});
    }

    return dispatch => {
        //dispatch(loading());
        fetchUtil(getEndPoint() + '/events' + query).then((result)=> {
            dispatch(gotEvents(result.shuffle()));
        });
    };
}

export function getLocations() {
    return dispatch => {
        fetchUtil(getEndPoint() + '/locat').then((result)=> {
            dispatch(gotLocations(result));
        });
    };
}

export function displayToggleClicked() {
    return {
        type: 'DISPLAY_TOGGLE_CLICKED'
    }
}

function fetchUtil(query) {
    return new Promise((resolve, reject) => {
        fetch(query, {
            method: 'get'
        }).then((response) => response.json()).then((result) => {
            resolve(result);
        }).catch((err) => {
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
