const { vowelShift } = require('../vowelShift')

describe('vowelShift()', () => {
  it('does not change word with only consonants', () => {
    expect(vowelShift('fly', 1)).toBe('fly');
  });
  it('does not change word with one vowel', () => {
    expect(vowelShift('cow', 1)).toBe('cow');
  });
  it('swaps vowels of words with two vowels', () => {
    expect(vowelShift('hello', 1)).toBe('holle');
  });
  it('works across multiple words', () => {
    expect(vowelShift('hello world', 1)).toBe('holle world');
  });
  it('works if n is greater than 1', () => {
    expect(vowelShift('funnily enough', 4)).toBe('finnely onuugh');
  });
  it('works if n is negative', () => {
    expect(vowelShift('moleman', -1)).toBe('melamon');
    expect(vowelShift('moleman', 1)).toBe('malomen');
  });
})
