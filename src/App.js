import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Header className="App-header"/>
        <RecipeList />
      </div>
    </Provider>
  );
}

export default App;
