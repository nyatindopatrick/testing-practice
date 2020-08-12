const analyze = require('../src/analyze');

it('returns analyzed object', () => expect(analyze([2, 5])).toEqual({
  average: 3.5, min: 2, max: 5, length: 2,
}));
