const { wrongWayCow } = require('../wrongWayCow')

describe('wrongWayCow()', () => {
  it('returns no coordinates if the cows are all the same way', () => {
    const field = 'cowcowcowcow';
    expect(wrongWayCow(field)).toEqual([]);
  });
  it('returns no coordinates if field is empty', () => {
    const field = '......';
    expect(wrongWayCow(field)).toEqual([]);
  });
  it('returns coordinates of wrong way cow in field of single row', () => {
    const field = 'cowcowcowwoc';
    expect(wrongWayCow(field)).toEqual([0, 3]);
  });
  it('works if cows are facing the other way', () => {
    const field = 'wocwoccowwoc';
    expect(wrongWayCow(field)).toEqual([0, 2]);
  });
  it('works for fields with multiple rows', () => {
    const field = 'cowcowcow...\n...woccowcow\n............';
    expect(wrongWayCow(field)).toEqual([1,1]);
  });
})
