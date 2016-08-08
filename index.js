'use strict';

// Determine whether a URL is fully resolved (has a scheme).
const isAbsolute = (url) => {
    return /^\w+:/.test(url);
};

// Determine whether a URL is not fully resolved.
const isRelative = (url) => {
    return !isAbsolute(url);
};

// Determine whether a URL is relative only to a scheme.
const isSchemeRelative = (url) => {
    return url.startsWith('//');
};

// Determine whether a URL is relative to the root directory of its host.
const isOriginRelative = (url) => {
    return !isSchemeRelative(url) && url.startsWith('/');
};

// Determine whether a URL would change directories differently depending
// on the current path.
const isDirectoryRelative = (url) => {
    return isRelative(url) && !isSchemeRelative(url) && !isOriginRelative(url);
};

// Determine the type of relativity (or lack thereof) for a URL.
const relativeTo = (url) => {
    if (isRelative(url)) {
        if (isSchemeRelative(url)) {
            return 'scheme';
        }
        else if (isOriginRelative(url)) {
            return 'origin';
        }
        else if (isDirectoryRelative(url)) {
            return 'directory';
        }
    }

    return null;
};

// Determine whether a URL is resolved enough to contain a host.
const hasHost = (url) => {
    return isAbsolute(url) || isSchemeRelative(url);
};

// Get the scheme used by a URL.
const getScheme = (url, option) => {
    const config = Object.assign({}, option);

    return url.match(/^(\w+):(?:\/\/)?/)[config.keepSeparator ? 0 : 1];
};

// Determine whether a URL uses one of the schemes for HTTP or HTTPS. This is
// useful for web servers to route or filter traffic.
const isHttpOrHttps = (url) => {
    return /^(?:https?):/i.test(url);
};

// Determine whether a URL is absolute or relative.
const urlType = (url) => {
    return isAbsolute(url) ? 'absolute' : 'relative';
};

urlType.isAbsolute = isAbsolute;
urlType.isRelative = isRelative;
urlType.isSchemeRelative = isSchemeRelative;
urlType.isOriginRelative = isOriginRelative;
urlType.isDirectoryRelative = isDirectoryRelative;
urlType.relativeTo = relativeTo;
urlType.hasHost = hasHost;
urlType.getScheme = getScheme;
urlType.isHttpOrHttps = isHttpOrHttps;

module.exports = urlType;
