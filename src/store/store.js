import { createStore, applyMiddleware } from 'redux';
import reducer, {initialState} from './ducks';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

export default function configureStore(){
    return createStore(
        reducer, 
        initialState, 
        composeWithDevTools(applyMiddleware(thunk)));
}