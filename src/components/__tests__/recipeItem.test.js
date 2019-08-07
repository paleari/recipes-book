import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import RecipeItem from '../RecipeItem';

describe('RecipeItem Component', () => {
    let item;
    let wrapper;
    let getIngredientsList;

    beforeEach(() => {
        getIngredientsList = jest.fn();
        item = {
                title: "Vegetable-Pasta Oven Omelet",
                href: "http://find.myrecipes.com/recipes/recipefinder.dyn?action=displayRecipe&recipe_id=520763",
                ingredients: "tomato, onions, red pepper",
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

    describe('getIngredientsList function', () => {    
        it('should return a list of ingredients', () => {
            const expectedValue = <>
                                    <li className="recipe__ingredient">tomato</li>,
                                    <li className="recipe__ingredient"> onions</li>,
                                    <li className="recipe__ingredient"> red pepper</li>
                                  </>

            expect(getIngredientsList).toHaveReturnedWith(expectedValue);
        })
    })
})