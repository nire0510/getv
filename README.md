# getv
Get a value from an object by its path.

## Intro
Not only **getv** is a drop-in replacement of lodash.get method, but it does it twice as fast (check `benchmark.js` file) and also takes half of its size.

## Installation
* npm - `npm i getv -S`

## Usage
```javascript
const getv = require('getv');

const object = {
  foo: {
    bar: 1,
  },
  baz: 5,
  lor: ['mir', 'dal'],
};

getv(object, 'none.bar');             // => undefined

getv(object, 'none.bar', 'default');  // => 'default'

getv(object, 'baz');                  // => 5

getv(object, 'foo.bar');              // => 1

getv(object, 'lor.1');                // => 'dal'
```