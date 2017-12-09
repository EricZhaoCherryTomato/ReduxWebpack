import * as types from './actionTypes';

export function loadTranslationSuccess(words) {
    return {type: types.LOAD_TRANSLATION_SUCCESS, words};
}