'use strict';

function isAbsolute(url) {

    // This function is designed to return whether a URL
    // is fully resolved (has a scheme).

    return /^\w+:/.test(url);
}

function isRelative(url) {

    // This function is designed to return whether a URL
    // is not fully resolved.

    return !isAbsolute(url);
}

function isSchemeRelative(url) {

    // This function is designed to return whether a URL
    // is relative only to a scheme.

    return url.indexOf('//') === 0;
}

function isOriginRelative(url) {

    // This function is designed to return whether a URL
    // is relative to the root directory of its host.

    return !isSchemeRelative(url) && url.indexOf('/') === 0;
}

function isDirectoryRelative(url) {

    // This function is designed to return whether a URL
    // would change directories differently depending
    // on the current path.

    return isRelative(url) && !isSchemeRelative(url) && !isOriginRelative(url);
}

function relativeTo(url) {

    // This function is designed to return the type of
    // relativity (or lack thereof) for a URL.

    let result = null;

    if (isRelative(url)) {
        if (isSchemeRelative(url)) {
            result = 'scheme';
        }
        else if (isOriginRelative(url)) {
            result = 'origin';
        }
        else if (isDirectoryRelative(url)) {
            result = 'directory';
        }
    }

    return result;
}

function hasHost(url) {

    // This function is designed to return whether a URL
    // is resolved enough to contain a host.

    return isAbsolute(url) || isSchemeRelative(url);
}

function getScheme(url, opts) {

    // This function is designed to return the scheme
    // used by a URL.

    if (!opts) {
        opts = {};
    }

    return url.match(/^(\w+):(?:\/\/)?/)[opts.keepSeparator ? 0 : 1];
}

function isHttpOrHttps(url) {

    // This function is designed to return whether a URL uses one of the
    // schemes for HTTP or HTTPS. This is useful for web server logic
    // to route or filter traffic.

    return /^(?:https?):/i.test(url);
}

function urlType(url) {

    // This function is designed to return whether a URL
    // is absoute or relative.

    return isAbsolute(url) ? 'absolute' : 'relative';
}

urlType.isAbsolute          = isAbsolute;
urlType.isRelative          = isRelative;
urlType.isSchemeRelative    = isSchemeRelative;
urlType.isOriginRelative    = isOriginRelative;
urlType.isDirectoryRelative = isDirectoryRelative;
urlType.relativeTo          = relativeTo;
urlType.hasHost             = hasHost;
urlType.getScheme           = getScheme;
urlType.isHttpOrHttps       = isHttpOrHttps;

module.exports = urlType;
