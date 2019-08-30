import {historySelector, addSearch, removeSearch, ADD_TO_HISTORY, REMOVE_FROM_HISTORY} from '../searchHistoryDuck';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('searchHistoryDuck', () => {
    it('should return history list when call historySelector', () => {
        const state = {
            history: ['banana', 'beans', 'butter']
        }
        expect(historySelector(state)).toEqual(state.history);
    })

    it('should add search value to list', () => {
        const store = mockStore({history: []})
        const expectedActions = [
            {type: ADD_TO_HISTORY, payload:['onion']}
        ]

        store.dispatch(addSearch('onion'));
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should add search value to beginning of list when list size is 5', () => {
        const store = mockStore({history: ['onion', 'milk', 'meat', 'rice', 'beans']})
        const expectedActions = [
            {type: ADD_TO_HISTORY, payload:['banana', 'onion', 'milk', 'meat', 'rice']}
        ]

        store.dispatch(addSearch('banana'));
        expect(store.getActions()).toEqual(expectedActions);
    })

    it('should remove value from search list', () => {
        const store = mockStore({history: ['onion', 'milk', 'meat', 'rice', 'beans']})
        const expectedActions = [
            {type: REMOVE_FROM_HISTORY, payload:['onion', 'milk', 'meat', 'beans']}
        ]

        store.dispatch(removeSearch(3));
        expect(store.getActions()).toEqual(expectedActions);
    })
})