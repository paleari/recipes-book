import {recipesSelector, getRecipes} from '../recipesDuck';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('recipesDuck', () => {
    it('should return recipes list when call recipesSelector', () => {
        const state = {
            recipes: ['a', 'b', 'c']
        }
        expect(recipesSelector(state)).toEqual(state.recipes);
    })

    it('should dispatch actions when called getRecipes', () => {
        const store = mockStore({recipes: []})
        const expectedActions = [
            {type: 'recipes-book/recipes/REQUEST_RECIPES'},
            {type: 'recipes-book/recipes/RESPONSE_RECIPES', payload:[]}
        ]

        return store.dispatch(getRecipes()).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it('should dispatch actions when called getRecipes with params', () => {
        const store = mockStore({recipes: []})
        const expectedActions = [
            {type: 'recipes-book/recipes/REQUEST_RECIPES'},
            {type: 'recipes-book/recipes/RESPONSE_RECIPES', payload:[]}
        ]

        return store.dispatch(getRecipes("abcd")).then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        })
    })
})