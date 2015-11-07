import {addItem, completeItem} from '../actions/actions';
import Immutable from 'immutable';

const initialState = Immutable.Map({todo: Immutable.List.of({text: 'item 1', completed: false}, {text: 'item 2', completed: false}) });
export function todos(state=initialState, action) {
    switch (action.type) {
        case 'ADD_ITEM':
        return state.updateIn(['todo'], item => item.push({text: action.item, completed: false}))

        case 'COMPLETE_ITEM':
        return state.updateIn(['todo'], todoItem => todoItem.update(action.index, item => ({
            text: item.text,
            completed: item.completed ? false : true })
        ));

        default:
        return state
    }
}
