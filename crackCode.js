// Please do not change the name of this function
const crackCode = (encryptedKey) => {
  //1 - check if letters in brackets are in alphabetical order
  const lettersInBrackets = encryptedKey.slice(-5, -1);
  if (lettersInBrackets.split("").sort().join("") !== lettersInBrackets)
    return false;
  else {
    //2 - check if they are all contained in list of four or more of most common letters
    const letterFrequencies = {};
    const mostCommonLetters = [];
    const eligibleLetters = [];
    //Create object showing how many of each letter there is before brackets
    for (let i = 0; i < encryptedKey.length - 6; i++) {
      const letter = encryptedKey[i];
      if (!/[a-zA-z]/.test(letter)) continue;
      else {
        if (letterFrequencies.hasOwnProperty(letter))
          letterFrequencies[letter] += 1;
        else letterFrequencies[letter] = 1;
      }
    }
    //Create array of letters in order of frequency
    for (let letter in letterFrequencies) {
      mostCommonLetters.push(letter);
    }
    mostCommonLetters.sort((a, b) => {
      return letterFrequencies[b] - letterFrequencies[a];
    });
    //Create array of letters with frequency equal to or higher than the fourth most frequent letter
    for (let i in mostCommonLetters) {
      if (
        letterFrequencies[mostCommonLetters[i]] >=
        letterFrequencies[mostCommonLetters[3]]
      )
        eligibleLetters.push(mostCommonLetters[i]);
    }
    //Check if each letter in brackets is also included in elgible letters array
    for (let i = 0; i < lettersInBrackets.length; i++) {
      if (!eligibleLetters.includes(lettersInBrackets[i])) return false;
    };
  }
  return true;
};

module.exports = { crackCode };
