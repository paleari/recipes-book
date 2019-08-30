import { combineReducers } from 'redux';
import { recipes, initialState as initialStateRecipes } from './recipesDuck';
import { history, initialState as initialStateHistory } from './searchHistoryDuck';

export const initialState = {
    recipes: initialStateRecipes,
    history: initialStateHistory
}

export default combineReducers({
    recipes,
    history
});