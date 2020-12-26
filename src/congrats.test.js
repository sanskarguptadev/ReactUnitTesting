import React from 'react';
import {shallow} from 'enzyme';

import {findByTestAttr, checkProps} from '../test/testUtils';
import Congrats from './congrats';

const setup = (props={}) => {
    return shallow(<Congrats {...props} />)
}
test('render without error', () => {
    const wrapper = setup({ success: false});
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

test('does not throw warning with expected props', () => {
    const expectedProps = {success: false}
    checkProps(Congrats, expectedProps);
})