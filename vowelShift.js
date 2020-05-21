// Please do not change the name of this function
const vowelShift = (str, n) => {
  //Extract vowels into array
  const vowels = str.match(/[aeiou]/g);

  //If there aren't any, return the string as is
  if (!vowels) return str;

  //Move vowels to the right n number of times
  for (let i = 0; i < n; i++) {
    vowels.unshift(vowels.pop());
  };
  //Move vowels to left if n is negative
  for (let i = 0; i > n; i--) {
    vowels.push(vowels.shift());
  };

  //Loop through str
  let newStr = str;
  let vowelNumber = 0;
  for (let i = 0; i < str.length; i++) {
    //If it's a vowel
    if (['a', 'e', 'i', 'o', 'u'].indexOf(str[i].toLowerCase()) !== -1) {
      //Replace vowel with vowel from array
      newStr = newStr.substr(0, i) + vowels[vowelNumber] + newStr.substr(i + 1);
      //Increment vowelNumber
      vowelNumber++;
    };
  };
  
  return newStr;
}

module.exports = { vowelShift }
