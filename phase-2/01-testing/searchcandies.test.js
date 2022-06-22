searchCandies = require('./searchcandies');

describe ('searchCandies', () => {
  it('returns mars and maltesars based on submitted value of Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns  Mars based on submitted value of Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns 3 results beginning with S', () => {
    expect(searchCandies('S', 10)).toEqual(['Skitties', 'Skittles', 'Starburst']);
  });

  it('returns 2 results based on submitted value of S and 4', () => {
    expect(searchCandies('S', 4)).toEqual(['Skitties', 'Skittles']);
  });

  it('returns result even when submitted entry is in lowercase', () => {
    expect(searchCandies('ma', 10)).toEqual(['Mars', 'Maltesers']);
  });
});