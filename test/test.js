const assert = require('assert');
const getv = require('../dist/getv.min');

const object = {
  foo: {
    bar: 1,
  },
  baz: 5,
  lor: ['mir', 'dal'],
};

describe('getv', () => {
  it('should return undefined when path is incorrect', () => {
    assert.equal(getv(object, 'none.bar'), undefined);
  });

  it('should return a default value when path is incorrect and a default value is specified', () => {
    assert.equal(getv(object, 'none.bar', 'default'), 'default');
  });

  it('should return 5 for baz', () => {
    assert.equal(getv(object, 'baz'), 5);
  });

  it('should return 1 for foo.bar', () => {
    assert.equal(getv(object, 'foo.bar'), 1);
  });

  it('should return "dal" for index 1 of lor', () => {
    assert.equal(getv(object, 'lor.1'), 'dal');
  });

  it('should ignore default value if path is correct', () => {
    assert.equal(getv(object, 'lor.1'), 'dal');
  });
});
