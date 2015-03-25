# url-type

Categorize URLs by their semantics.

## Installation
````sh
npm install url-type --save
````

## Usage

Get it into your program.
````javascript
var urlType = require('url-type');
````

Tell if a URL is relative or absolute.
````javascript
var category = urlType(
    '//example.com:8000'  // url to analyze
);
console.log(category);  // => 'relative'
````

Save time and space.
````javascript
var relative = urlType.isRelative(
    '//example.com:8000'  // url to analyze
);
console.log(relative);  // => true
````

But that's boring, so let's find out what it is relative to.
````javascript
var relativity = urlType.isRelativeTo(
    '//example.com:8000'
);
console.log(relativity);  // => 'protocol'
````

## Contributing
See our [contribution guidelines](https://github.com/sholladay/url-type/blob/master/CONTRIBUTING.md "The guidelines for being involved in this project.") for mode details.
1. [Fork it](https://github.com/sholladay/url-type/fork).
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. [Submit a pull request](https://github.com/sholladay/url-type/compare "Submit code to this repo now for review.").

## License
[MPL-2.0](https://github.com/sholladay/url-type/blob/master/LICENSE "The license for url-type.")

Go make something, dang it.
