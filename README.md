# url-type [![Build status for url-type on Circle CI.](https://img.shields.io/circleci/project/sholladay/url-type/master.svg "Circle Build Status")](https://circleci.com/gh/sholladay/url-type "URL Type Builds")

> Categorize URLs by semantics.

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

Ask if a URL is relative or absolute.

```js
const category = urlType('//example.com:8000');
console.log(category === 'relative');  // => true
```

Save time and space.

```js
const relative = urlType.isRelative('//example.com:8000');
console.log(relative);  // => true
```

But that is boring, so let's find out what it is relative to.

```js
const relativity = urlType.relativeTo('//example.com:8000');
console.log(relativity);  // => 'scheme'
```

## API

### urlType(url)

Returns a string for the URL type, either `absolute` or `relative`.

### urlType.isAbsolute(url)

Returns a boolean for whether the URL has a scheme.

### urlType.isRelative(url)

Returns a boolean for whether the URL is relative, which means it is _not absolute_. That is, anything that does not start with a scheme, such as `foo`, `./foo`, `../foo`, `/foo`, or `//foo.com`.

### urlType.isSchemeRelative(url)

Returns a boolean for whether the URL is relative to a scheme. That is, anything that starts with two `//` slashes, such as `//foo.com`.

### urlType.isOriginRelative(url)

Returns a boolean for whether the URL is relative to an origin. That is, anything that starts with a `/` slash except for scheme relative URLs, such as `/foo`.

### urlType.isDirectoryRelative(url)

Returns a boolean for whether the URL is relative to a directory. That is, anything that doesn't start with a `/` slash or a scheme, such as as `foo`, `./foo`, or `../foo`.

### urlType.relativeTo(url)

Returns a string for the type of relativity, one of `scheme`, `origin`, or `directory`. Returns `null` If the URL is not relative.

### urlType.hasHost(url)

Returns a boolean for whether the URL has a host.

### urlType.getScheme(url)

Returns the scheme name.

Example: `https` or `mailto`

### urlType.getScheme.keepSeparator(url)

Returns the scheme name with separator.

Example: `https://` or `mailto:`

### urlType.isHttpOrHttps(url)

Returns a boolean for whether the URL has an `http` or `https` scheme.

#### url

Type: `string`

A URL to analyze, such as `http://example.com`.

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
