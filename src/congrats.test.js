import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import {findByTestAttr} from '../test/testUtils';
import Congrats from './congrats';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}
test('render without error', () => {
    const wrapper = setup();
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.length).toBe(1);

});
test('render no text when success props is false', () => {
    const wrapper = setup({ success: false});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text()).toBe('')
});

test('render non-empty congrats when success prop is true', () => {
    const wrapper = setup({success: true});
    const component = findByTestAttr(wrapper, 'component-congrats');
    expect(component.text().length).not.toBe(0)
})