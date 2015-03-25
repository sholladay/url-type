function isAbsolute(url) {

    // This function is designed to return whether a URL
    // is fully resolved (has a protocol).

    return /^\w+:/.test(url);
}

function isRelative(url) {

    // This function is designed to return whether a URL
    // is not fully resolved.

    return !isAbsolute(url);
}

function isProtocolRelative(url) {

    // This function is designed to return whether a URL
    // is relative only to a protocol.

    return url.indexOf('//') === 0;
}

function isHostRelative(url) {

    // This function is designed to return whether a URL
    // is relative to the root directory of its host.

    return !isProtocolRelative(url) && url.indexOf('/') === 0;
}

function isDirectoryRelative(url) {

    // This function is designed to return whether a URL
    // would change directories differently depending
    // on the current path.

    return isRelative(url) && !isProtocolRelative(url) && !isHostRelative(url);
}

function relativeTo(url) {

    // This function is designed to return the type of
    // relativity (or lack thereof) for a URL.

    var result;

    if (isRelative(url)) {
        if (isProtocolRelative(url)) {
            result = 'protocol';
        }
        else if (isHostRelative(url)) {
            result = 'host';
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

    return isAbsolute(url) || isProtocolRelative(url);
}

function getProtocol(url, keepSeparator) {

    // This function is designed to return the protocol
    // used by a URL.

    return url.match(/^(\w+):(?:\/\/)?/)[keepSeparator ? 0 : 1];
}

function isHttpOrHttps(url) {

    // This function is designed to return whether a URL uses exactly
    // HTTP or HTTPS as its protocol. This is useful for web server
    // logic based on type of traffic.

    return /^(?:https?):/i.test(url);
}

function app(url) {

    // This function is designed to return whether a URL
    // is absoute or relative.

    return isAbsolute(url) ? 'absolute' : 'relative';
}

app.isAbsolute          = isAbsolute;
app.isRelative          = isRelative;
app.isProtocolRelative  = isProtocolRelative;
app.isHostRelative      = isHostRelative;
app.isDirectoryRelative = isDirectoryRelative;
app.relativeTo          = relativeTo;
app.hasHost             = hasHost;
app.getProtocol         = getProtocol;
app.isHttpOrHttps       = isHttpOrHttps;

module.exports = app;
