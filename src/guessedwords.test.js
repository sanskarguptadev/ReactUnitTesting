import React from 'react';
import {shallow} from 'enzyme';
import {findTestAttr, checkProps, findByTestAttr} from '../test/testUtils';
import Gussedwords from './guessedwords';

const defaultProps = {
    guessedWords: [
        {guessedWord:'train', letterMatchCount: 3} 
    ]
}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Gussedwords {...setupProps} />)
};

test('does not throw warning expected props', () =>{
    checkProps(Gussedwords, defaultProps);
});

describe('if there are no words gussed', () =>{
    let wrapper
    beforeEach(() =>{
        wrapper = setup({ guessedWords: []})
    })
    test('render without error', () =>{
        const component = findByTestAttr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1)
    });
    test('render instruction to guess a word', ()=>{
        const instructions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instructions.text().length).not.toBe(0)
    })
});
describe('if there are word gussed', () =>{
    let wrapper;
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ];
    beforeEach(() => {
        wrapper = setup({ guessedWords });
    })
    test('render without error', () => {
        const component = findByTestAttr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1)
    });
    test('render guessed words section', () =>{
        const guessedWords = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWords.length).toBe(1);
    });
    test('correct number of guessed words', () => {
        const guessedWordNode = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordNode.length).toBe(guessedWords.length)
    });
});