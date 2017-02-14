import test from 'ava';
import urlType from '.';

test('urlType() basics', (t) => {
    const abs = urlType('http://example.com');
    t.truthy(abs);
    t.is(typeof abs, 'string');
    t.is(abs, 'absolute');

    t.is(urlType('https://a'), 'absolute');
    t.is(urlType('https://b?c'), 'absolute');

    t.is(urlType('foo'), 'relative');
    t.is(urlType('/foo'), 'relative');
    t.is(urlType('//foo'), 'relative');

    t.is(urlType(), 'relative');
    t.is(urlType(''), 'relative');
    t.is(urlType(0), 'relative');
    t.is(urlType(null), 'relative');
    t.is(urlType(false), 'relative');
    t.is(urlType(NaN), 'relative');
    t.is(urlType(true), 'relative');
    t.is(urlType({}), 'relative');
});

test('.isAbsolute() returns a boolean', (t) => {
    t.true(urlType.isAbsolute('http://a'));
    t.false(urlType.isAbsolute('//a'));
});

test('.isRelative() returns a boolean', (t) => {
    t.true(urlType.isRelative('//a'));
    t.false(urlType.isRelative('http://a'));
});

test('.isSchemeRelative() returns a boolean', (t) => {
    t.true(urlType.isSchemeRelative('//a'));
    t.false(urlType.isSchemeRelative('/a'));
    t.false(urlType.isSchemeRelative('a'));
    t.false(urlType.isSchemeRelative('a.com'));
    t.false(urlType.isSchemeRelative('https://a'));
});

test('.isOriginRelative() returns a boolean', (t) => {
    t.true(urlType.isOriginRelative('/a'));
    t.false(urlType.isOriginRelative('./a'));
    t.false(urlType.isOriginRelative('a'));
    t.false(urlType.isOriginRelative('a.com'));
    t.false(urlType.isOriginRelative('//a'));
    t.false(urlType.isOriginRelative('https://example.com'));
});

test('.isDirectoryRelative() returns a boolean', (t) => {
    t.true(urlType.isDirectoryRelative('a'));
    t.true(urlType.isDirectoryRelative('./a'));
    t.true(urlType.isDirectoryRelative('../a'));
    t.true(urlType.isDirectoryRelative('a.com'));
    t.true(urlType.isDirectoryRelative('.a.com'));
    t.false(urlType.isDirectoryRelative('/a'));
    t.false(urlType.isDirectoryRelative('//a'));
    t.false(urlType.isDirectoryRelative('https://example.com'));
    t.false(urlType.isDirectoryRelative('mailto:me@example.com'));
});

test('.relativeTo() returns a category', (t) => {
    t.is(urlType.relativeTo('https://a'), null);
    t.is(urlType.relativeTo('https://b?c=/hello'), null);
    t.is(urlType.relativeTo('//a'), 'scheme');
    t.is(urlType.relativeTo('/a'), 'origin');
    t.is(urlType.relativeTo('a'), 'directory');
    t.is(urlType.relativeTo('./a'), 'directory');
    t.is(urlType.relativeTo('../a'), 'directory');
});

test('.hasHost() returns a boolean', (t) => {
    t.true(urlType.hasHost('https://a'));
    t.true(urlType.hasHost('https://b?c=/hello'));
    t.true(urlType.hasHost('//a'));
    t.false(urlType.hasHost('/a'));
    t.false(urlType.hasHost('a'));
    t.false(urlType.hasHost('./a'));
    t.false(urlType.hasHost('../a'));
});

test('.getScheme() returns a scheme', (t) => {
    t.is(urlType.getScheme('https://a'), 'https');
    t.is(urlType.getScheme('https://b?c=/hello'), 'https');
    t.is(urlType.getScheme('http://example.com'), 'http');
    t.is(urlType.getScheme('mailto:me@example.com'), 'mailto');
    t.is(urlType.getScheme('ftp://example.com'), 'ftp');
    t.is(urlType.getScheme('//a'), null);
    t.is(urlType.getScheme('/a'), null);
    t.is(urlType.getScheme('a'), null);
    t.is(urlType.getScheme('./a'), null);
    t.is(urlType.getScheme('../a'), null);

    t.is(urlType.getScheme.keepSeparator('foo://'), 'foo://');
    t.is(urlType.getScheme.keepSeparator('foo://a'), 'foo://');
    t.is(urlType.getScheme.keepSeparator('mailto:me@foo.com'), 'mailto:');
    t.is(urlType.getScheme.keepSeparator('foo'), null);
});

test('.isHttpOrHttps() returns a boolean', (t) => {
    t.true(urlType.isHttpOrHttps('http://a'));
    t.true(urlType.isHttpOrHttps('https://a'));
    t.true(urlType.isHttpOrHttps('https://a=/file:///b'));
    t.true(urlType.isHttpOrHttps('http:'));
    t.true(urlType.isHttpOrHttps('https:'));
    t.true(urlType.isHttpOrHttps('http://'));
    t.true(urlType.isHttpOrHttps('https://'));
    t.false(urlType.isHttpOrHttps('https.'));
    t.false(urlType.isHttpOrHttps('http'));
    t.false(urlType.isHttpOrHttps('https'));
    t.false(urlType.isHttpOrHttps('://'));
    t.false(urlType.isHttpOrHttps('//a'));
    t.false(urlType.isHttpOrHttps('/a'));
    t.false(urlType.isHttpOrHttps('a'));
    t.false(urlType.isHttpOrHttps('./a'));
    t.false(urlType.isHttpOrHttps('../a'));
});
