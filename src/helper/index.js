export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetter = new Set(secretWord.split(''));
    const guessed = new Set(guessedWord.split(''));
    return [...secretLetter].filter(letter => guessed.has(letter)).length;
}