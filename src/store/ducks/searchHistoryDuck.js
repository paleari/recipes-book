import { createDuck } from 'redux-duck';

const searchHistoryDuck = createDuck('search-history', 'recipes-book');

export const ADD_TO_HISTORY = searchHistoryDuck.defineType('ADD_TO_HISTORY');
const addToHistoryAction = searchHistoryDuck.createAction(ADD_TO_HISTORY);

export const REMOVE_FROM_HISTORY = searchHistoryDuck.defineType('REMOVE_FROM_HISTORY');
const removeFromHistoryAction = searchHistoryDuck.createAction(REMOVE_FROM_HISTORY);

export const historySelector = (state) => state.history;

export const addSearch = (search) => (dispatch, getState) => {
    const currentHistory = getState().history;
    if(currentHistory.length > 4) currentHistory.pop();
    currentHistory.unshift(search);
    dispatch(addToHistoryAction(currentHistory));
}

export const removeSearch = (position) => (dispatch, getState) => {
    const currentHistory = getState().history;
    currentHistory.splice(position,1);
    dispatch(removeFromHistoryAction(currentHistory));
}

export const initialState = [];

export const history = searchHistoryDuck.createReducer({
    [ADD_TO_HISTORY]: (_, {payload}) => payload,
    [REMOVE_FROM_HISTORY]: (_, {payload}) => payload
}, initialState);