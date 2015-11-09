# unvowel-last [![Support this project][donate-now]][paypal-donations]

Removes the last letter from a string if it is a vowel.

## Installation

```sh
$ npm i -g unvowel-last
```

## Example

```js
// Dependencies
var UnvowelLast = require("unvowel-last");

console.log(UnvowelLast("sea"));
// => "se"

console.log(UnvowelLast("king"));
// => "king"
```

## Documentation

### `UnvowelLast(input)`
Removes the last letter if it is a vowel.

#### Params
- **String** `input`: The input string.

#### Return
- **String** The input string if the last letter was *not* a vowel, otherwise the same value, but without the last letter.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md