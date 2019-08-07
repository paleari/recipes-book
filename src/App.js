import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import Header from './components/Header';
import RecipeList from './components/RecipeList';
import Search from './components/Search';
import './App.css';

function App() {
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Header className="App-header"/>
        <Search/>
        <RecipeList />
      </div>
    </Provider>
  );
}

export default App;
