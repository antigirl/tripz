import {addItem, completeItem} from '../actions/actions';
import Immutable from 'immutable';

const initialToDoState = Immutable.List.of({text: 'item 1', completed: false}, {text: 'item 2', completed: false});
const initialFilterState = Immutable.Map({type: 'SHOW_ALL' });

function todoReducer(state=initialToDoState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
        return state.push({text: action.item, completed: false});

        case 'COMPLETE_ITEM':
        return state.update(action.index, item => ({
            text: item.text,
            completed: item.completed ? false : true})
        );

        default:
        return state;
    }
}

function filterReducer(state=initialFilterState, action) {
    switch (action.type) {
        case 'UPDATE_FILTER':
        return state.set('type', action.theFilter);

        default:
        return state;
    }
}

var empty = Immutable.Map({});
export default function todoApp(state={}, action) {
    return {
        todo: todoReducer(state.todo, action),
        filter: filterReducer(state.filter, action)
    }
}
