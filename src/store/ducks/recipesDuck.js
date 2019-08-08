import { createDuck } from 'redux-duck';
import { fecthRecipes } from '../../api/recipesApi';

const recipesDuck = createDuck('recipes', 'recipes-book');

const REQUEST_RECIPES = recipesDuck.defineType('REQUEST_RECIPES');
const requestRecipesAction = recipesDuck.createAction(REQUEST_RECIPES);

const RESPONSE_RECIPES = recipesDuck.defineType('RESPONSE_RECIPES');
const responseRecipesAction = recipesDuck.createAction(RESPONSE_RECIPES);

export const recipesSelector = (state) => state.recipes;

export const getRecipes = (search) => async dispatch => {
    dispatch(requestRecipesAction());
    try {
        const data = await fecthRecipes(search);
        dispatch(responseRecipesAction(data));
    } catch(e) {
        console.log('something went wrong: ', e);
    }
}

export const intialState = [];

export const recipes = recipesDuck.createReducer({
    [REQUEST_RECIPES]: () => intialState,
    [RESPONSE_RECIPES]: (_, action) => action.payload
}, intialState);
