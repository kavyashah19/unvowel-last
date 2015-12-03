# unvowel-last [![Support this project][donate-now]][paypal-donations]

Removes the last letter from a string if it is a vowel.

## Installation

```sh
$ npm i --save unvowel-last
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

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md