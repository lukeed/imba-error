# Imba Error
> Easily extend the native `Error` for custom use within Imba

## Installation

```
npm install imba-error --save
```

## Usage

```imba
import Errorable from 'imba-error'

class CustomError < Errorable
	def initialize msg = 'Default Custom Message!'
		super msg

# somewhere else...
throw CustomError.new "Hey! Don't do that!"

# outputs:
# CustomError {message: "Hey! Don't do that!", name: "CustomError", stack: (...)}
```

## API

#### message

Type: `string`
Default: `''`

The message to throw

## License

MIT © [Luke Edwards](https://lukeed.com)

[releases]:     https://github.com/lukeed/imba-error/releases
[npm-pkg-link]: https://www.npmjs.org/package/imba-error
[npm-ver-link]: https://img.shields.io/npm/v/imba-error.svg?style=flat-square
[dl-badge]:     http://img.shields.io/npm/dm/imba-error.svg?style=flat-square
[travis-link]:  https://travis-ci.org/lukeed/imba-error
[travis-badge]: http://img.shields.io/travis/lukeed/imba-error.svg?style=flat-square
