import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import { Search } from '../Search';

describe('Search Component', () => {
    let submit;
    let wrapper;

    beforeEach(() => {
        submit = jest.fn();
        wrapper = shallow(<Search submit={submit}/>);
    })

    it('should render without broken', () => {
        expect(wrapper.exists()).toBe(true);
    })

    it('should render correctly', () => {
        const tree = renderer.create(<Search submit={submit}/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

    it('should not call the submit function when input less than 3 characters', () => {
        wrapper.find('#searchForm').simulate(
            'submit',
            {preventDefault() {}}
        )
        expect(submit.mock.calls.length).toBe(0);
    })

    it('should update state on change of input', () => {
        wrapper.find('#searchInput').simulate('change', {target:{value:'a'}});
        expect(wrapper.find('#searchInput').prop('value')).toEqual('a');
    })

    it('should call the submit function when input more than 3 characters', () => {
        wrapper.find('#searchInput').simulate('change', {target:{value:'abcd'}});
        wrapper.find('#searchForm').simulate(
            'submit',
            {preventDefault() {}}
        )
        expect(submit.mock.calls.length).toBe(1);
    })
})