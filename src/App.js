import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/store';
import Header from './components/Header';
import RecipeItem from './components/RecipeItem';

function App() {
  const item = { title: "Vegetable-Pasta Oven Omelet",
                  href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
                  ingredients: "tomato, onions, red pepper, garlic, olive oil, zucchini, cream cheese, vermicelli, eggs, parmesan cheese, milk, italian seasoning, salt, black pepper",
                  thumbnail: "http://img.recipepuppy.com/560556.jpg"};
  return (
    <Provider store={configureStore()}>
      <div className="App">
        <Header className="App-header"/>
        <RecipeItem item={item}/>
      </div>
    </Provider>
  );
}

export default App;
