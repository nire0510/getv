const assert = require('assert');
const getv = require('../dist/getv.min');

const object = {
  foo: {
    bar: 1,
  },
  baz: 5,
  lor: ['mir', 'dal'],
  tar: false,
};

const array = [
  {
    id: 1,
    name: 'Test',
  },
];

describe('getv', () => {
  it('should return undefined when path is incorrect', () => {
    assert.equal(getv(object, 'none.bar'), undefined);
  });

  it('should return undefined when path is incorrect, even if it is deeply nested', () => {
    assert.equal(getv(object, 'none.bar.nor.gar'), undefined);
  });

  it('should be able to return false', () => {
    assert.equal(getv(object, 'tar'), false);
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

  it('should accept array', () => {
    assert.equal(getv(array, '0.id'), 1);
  });

  it('should treat missing inner array as undefined', () => {
    assert.equal(getv(array, '0.items', []).length, 0);
  });
});
