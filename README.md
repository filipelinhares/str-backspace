# str-backspace [![Build Status](https://travis-ci.org/filipelinhares/str-backspace.svg?branch=master)](https://travis-ci.org/filipelinhares/str-backspace)
Backspace strings

### Installation
```sh
npm install --save str-backspace
```

### Usage
```js
import backspace from 'str-backspace';

backspace('Lorem ipsum');
// ==> Lorem ipsu

backspace('Lorem ipsum', 6);
// ==> Lorem
```

### Test
```sh
npm install
npm test
```

## License
[MIT](LICENSE.md) © Filipe Linhares
