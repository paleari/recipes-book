import { createDuck } from 'redux-duck';
import Axios from 'axios';

const recipesDuck = createDuck('recipes', 'recipes-book');

const REQUEST_RECIPES = recipesDuck.defineType('REQUEST_RECIPES');
const requestRecipesAction = recipesDuck.createAction(REQUEST_RECIPES);

const RESPONSE_RECIPES = recipesDuck.defineType('RESPONSE_RECIPES');
const responseRecipesAction = recipesDuck.createAction(RESPONSE_RECIPES);

export const getRecipes = (search) => dispatch => {
    dispatch(requestRecipesAction);
    try {
        //const data = Axios.get(`http://www.recipepuppy.com/api/?q=${search}`);
        const data = {results:[]};
        data.results = [
            {
            title: "Vegetable-Pasta Oven Omelet",
            href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
            ingredients: "tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper",
            thumbnail: "http://img.recipepuppy.com/560556.jpg"
            },
            {
            title: "Roasted Pepper and Bacon Omelet",
            href: "http://www.bigoven.com/43919-Roasted-Pepper-and-Bacon-Omelet-recipe.html",
            ingredients: "eggs, salt, black pepper, butter, black pepper, bacon, onions, garlic, roasted red peppers, oregano, black pepper",
            thumbnail: ""
            },
            {
            title: " Broccoli Oven Omelet Recipe ",
            href: "http://cookeatshare.com/recipes/broccoli-oven-omelet-92851",
            ingredients: "eggs, broccoli, onions, parmesan cheese, lowfat milk, salt, basil, garlic, tomato, parmesan cheese",
            thumbnail: ""
            },
            {
            title: "Eggplant Omelet with Coriander and Caraway",
            href: "http://www.epicurious.com/recipes/food/views/Eggplant-Omelet-with-Coriander-and-Caraway-306",
            ingredients: "caraway seed, coriander, eggplant, eggs, garlic, lemon, olive oil, onions, black pepper, salt",
            thumbnail: ""
            },
            {
            title: "Eggplant Omelet with Coriander And Caraway",
            href: "http://www.bigoven.com/143831-Eggplant-Omelet-with-Coriander-And-Caraway-recipe.html",
            ingredients: "eggplant, olive oil, onions, garlic, egg, caraway seed, coriander, salt, black pepper, lemon",
            thumbnail: ""
            },
            {
            title: "Broccoli and Cheese Omelet",
            href: "http://www.bigoven.com/45151-Broccoli-and-Cheese-Omelet-recipe.html",
            ingredients: "onions, garlic, chicken broth, cottage cheese, oregano, black pepper, egg substitute, bread, mozzarella cheese, butter",
            thumbnail: ""
            }];
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
