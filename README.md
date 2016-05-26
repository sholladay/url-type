# url-type

> Categorize URLs by their semantics.

## Why?

 - Validate user input.
 - Route traffic more easily.
 - Ignore certain types of URLs.

## Install

```sh
npm install url-type --save
```

## Usage

Get it into your program.

```js
const urlType = require('url-type');
```

Tell if a URL is relative or absolute.

```js
const category = urlType(
    '//example.com:8000'  // url to analyze
);
console.log(category);  // => 'relative'
```

Save time and space.

```js
const relative = urlType.isRelative(
    '//example.com:8000'  // url to analyze
);
console.log(relative);  // => true
```

But that is boring, so let's find out what it is relative to.

```js
const relativity = urlType.relativeTo(
    '//example.com:8000'
);
console.log(relativity);  // => 'scheme'
```

## Contributing

See our [contributing guidelines](https://github.com/sholladay/url-type/blob/master/CONTRIBUTING.md "The guidelines for participating in this project.") for more details.

1. [Fork it](https://github.com/sholladay/url-type/fork).
2. Make a feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/url-type/compare "Submit code to this project for review.").

## License

[MPL-2.0](https://github.com/sholladay/url-type/blob/master/LICENSE "The license for url-type.") © [Seth Holladay](http://seth-holladay.com "Author of url-type.")

Go make something, dang it.
