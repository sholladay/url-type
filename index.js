function isAbsolute(url) {

    // This function is designed to return whether a URL
    // is fully resolved.

    return /^\w+:/.test(url);
}

function isRelative(url) {
    return !isAbsolute(url);
}

function isProtocolRelative(url) {
    return url.indexOf('//') === 0;
}

function isHostRelative(url) {
    return !isProtocolRelative(url) && url.indexOf('/') === 0;
}

function isDirectoryRelative(url) {
    return isRelative(url) && !isProtocolRelative(url) && !isHostRelative(url);
}

function relativeTo(url) {

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

function app(url) {

    return isAbsolute(url) ? 'absolute' : 'relative';
}

app.isAbsolute          = isAbsolute;
app.isRelative          = isRelative;
app.isProtocolRelative  = isProtocolRelative;
app.isHostRelative      = isHostRelative;
app.isDirectoryRelative = isDirectoryRelative;
app.relativeTo          = relativeTo;

module.exports = app;
