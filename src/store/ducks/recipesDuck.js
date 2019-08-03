import { createDuck } from 'redux-duck';
import Axios from 'axios';

const recipesDuck = createDuck('recipes', 'recipes-book');

const REQUEST_RECIPES = recipesDuck.defineType('REQUEST_RECIPES');
const requestRecipesAction = recipesDuck.createAction(REQUEST_RECIPES);

const RESPONSE_RECIPES = recipesDuck.defineType('RESPONSE_RECIPES');
const responseRecipesAction = recipesDuck.createAction(RESPONSE_RECIPES);

export const getRecipes = (search) => async dispatch => {
    try {
        dispatch(requestRecipesAction);
        const data = await Axios.get('http://www.recipepuppy.com/api/?i=onions,garlic&q=omelet&p=3');
        dispatch(responseRecipesAction(data.results));
    } catch(e) {
        console.log('something went wrong: ', e);
    }
}

export const intialState = [];

export const recipes = recipesDuck.createReducer({
    [REQUEST_RECIPES]: () => intialState,
    [RESPONSE_RECIPES]: (_, payload) => payload
}, intialState);