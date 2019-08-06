import { createStore, applyMiddleware } from 'redux';
import { recipes } from './ducks/recipesDuck';
import { combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {recipes: []};

export default function configureStore(){
    return createStore(
        combineReducers({recipes}), 
        initialState, 
        composeWithDevTools(applyMiddleware(thunk)));
}