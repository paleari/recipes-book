import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { RecipesList } from '../RecipeList';

describe('RecipeList Component', () => {
    let recipes;
    let wrapper;

    beforeEach(() => {
        recipes = [{
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
            }];
        wrapper = shallow(<RecipesList recipes={recipes}/>);
    })

    it('should render without broken', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('should render correctly', () => {
        const tree = renderer.create(<RecipesList recipes={recipes}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should contain a list of recipes', () => {
        expect(wrapper.find("li")).toHaveLength(2);
    })
})