import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';

describe('RecipeItem Component', () => {
    let item;
    let wrapper;

    beforeEach(() => {
        item = {
                title: "Vegetable-Pasta Oven Omelet",
                href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
                ingredients: "tomato, milk, red pepper",
                thumbnail: "http://img.recipepuppy.com/560556.jpg"
                };
        wrapper = shallow(<RecipeItem item={item}/>);
    })

    it('should render without broken', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('should render correctly', () => {
        const tree = renderer.create(<RecipeItem item={item}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })
 
    it('should contain a list of ingredients', () => {
        expect(wrapper.find("li")).toHaveLength(3);
        expect(wrapper.find("li").get(0).props.children).toEqual('tomato');
        expect(wrapper.find("li").get(1).props.children).toEqual('milk');
        expect(wrapper.find("li").get(2).props.children).toEqual('red pepper');
    })

    it('should contain lactose label if ingredients contain milk or cheese', () => {
        expect(wrapper.find(".recipe__label")).toHaveLength(1);
    })

    it('should not contain a list of ingredients', () => {
        item = {
                title: "Vegetable-Pasta Oven Omelet",
                href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
                ingredients: "",
                thumbnail: "http://img.recipepuppy.com/560556.jpg"
            };
        wrapper = shallow(<RecipeItem item={item}/>);

        expect(wrapper.find("li")).toEqual({});
    })

    it('should not contain lactose label', () => {
        item = {
            title: "Vegetable-Pasta Oven Omelet",
            href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
            ingredients: "tomato, cheese, red pepper",
            thumbnail: "http://img.recipepuppy.com/560556.jpg"
            };

        wrapper = shallow(<RecipeItem item={item}/>);

        expect(wrapper).not.toContain(".recipe__label");
    })

})