import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function translateReducer(state = initialState.text, action) {
    switch (action.type){
        case types.LOAD_TRANSLATION_SUCCESS:
            debugger;
            return action.words;
        default:
            return state;
    }
}