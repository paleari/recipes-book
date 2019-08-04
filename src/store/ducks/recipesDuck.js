import { createDuck } from 'redux-duck';

const recipesDuck = createDuck('recipes', 'recipes-book');

const REQUEST_RECIPES = recipesDuck.defineType('REQUEST_RECIPES');
const requestRecipesAction = recipesDuck.createAction(REQUEST_RECIPES);

const RESPONSE_RECIPES = recipesDuck.defineType('RESPONSE_RECIPES');
const responseRecipesAction = recipesDuck.createAction(RESPONSE_RECIPES);

export const recipesSelector = (state) => state.recipes;

export const getRecipes = (search) => async dispatch => {
    dispatch(requestRecipesAction);
    try {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = `http://www.recipepuppy.com/api/?q=${search}`;
        const data = await fetch(proxyurl + url).then(response => {
            return response.json()
          });
        dispatch(responseRecipesAction(data.results));
    } catch(e) {
        console.log('something went wrong: ', e);
    }
}

export const intialState = [];

export const recipes = recipesDuck.createReducer({
    [REQUEST_RECIPES]: () => intialState,
    [RESPONSE_RECIPES]: (_, action) => action.payload
}, intialState);
