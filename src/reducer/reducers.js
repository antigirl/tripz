import {addItem, completeItem} from '../actions/actions';
import _ from 'lodash';

const initialState = [{text: 'item 1', completed: false}, {text: 'item 2', completed: false}];

export function todos(state=initialState, action) {

    switch (action.type) {
        case 'ADD_ITEM':
        return [...state, {text: action.item, completed: false}];

        case 'COMPLETE_ITEM':
        var completedVal = state[action.index].completed ? false : true;
        return [...state.slice(0, action.index), _.assign({}, state[action.index], {
                   completed: completedVal
        }), ...state.slice(action.index + 1),]

        default:
        return state;

    }
}
