const get = require('./dist/getv.min');
// const get = require('lodash.get');
const now = require('performance-now');

const object = {
  foo: {
    bar: 1,
  },
  baz: 5,
  lor: ['mir', 'dal'],
};

const t0 = now();
for (let i = 0; i < 1000; i++) {
  get(object, 'none.bar'); // => undefined
  get(object, 'none.bar', 'default'); // => 'default'
  get(object, 'baz'); // => 5
  get(object, 'foo.bar'); // => 1
  get(object, 'lor.1'); // => 'dal'
}
const t1 = now();
console.log(`Call to doSomething took ${t1 - t0} milliseconds.`);
