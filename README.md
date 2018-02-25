# getv
Get a value from an object by its path.

## Installation
* npm - `npm i getv -S`

## Usage
```javascript
const getv = require('getv');

const object = {
  foo: {
    bar: 1
  },
  baz: 5,
  lor: ['mir', 'dal']
};

getv(object, 'none.bar');             // => undefined

getv(object, 'none.bar', 'default');  // => 'default'

getv(object, 'baz');                  // => 5

getv(object, 'foo.bar');              // => 1

getv(object, 'lor.1');                // => 'dal'
```