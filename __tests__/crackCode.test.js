const { crackCode } = require('../crackCode')

describe('crackCode()', () => {
  it('passes correct tests', () => {
    expect(crackCode('ddd-aaa-z-y-x-123(adxy)')).toBe(true);
    expect(crackCode('a-b-c-d-e-f-g-h-i-577(abcd)')).toBe(true);
  });
  it('passes incorrect tests', () => {
    expect(crackCode('fff-gg-xx-ss-y(fgsy)')).toBe(false);
    expect(crackCode('fff-gg-xx-ss-y(hjy7)')).toBe(false);
    expect(crackCode('aa-bb-cc-dd-e-f(abdc)')).toBe(false);
  });
})
