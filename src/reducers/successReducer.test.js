import { actionTypes } from '../actions/index';
import successReducer from './successReducer';


describe('success reducer test', () => {
    test('not guessed word correctly', () => {
        const newState = successReducer(undefined, {});
        expect(newState).toBe(false);
    });
    test('guessed word correctly', () => {
        const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS});
        expect(newState).toBe(true);
    });
})