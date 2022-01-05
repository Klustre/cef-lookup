# CEF Lookup

Retrieve the CEF, Chromium, NodeJS and V8 versions associated with a version of Adobe CEP.

```js
{
    cef: '3729',
    chromium: '74.0.3729.157',
    nodejs: '12.3.1',
    cef_node: 'Node-Webkit 0.38',
    v8: '7.4.288',
}
```

_Note: I wrote this module for a single use case. It was not tested beyond that._

The module exposes 3 functions:

## cefLookup(`appId`, `appVersion`)
This function is the default export. 

### Parameters
- `appId`: The app identifier in the format of `AEFT`.
- `appVersion`: The app's version. Can be integer or float. Patch version numbers are ignored.

### Returns
An object with all the versions.
```js
{
    cef: '3729',
    chromium: '74.0.3729.157',
    nodejs: '12.3.1',
    cef_node: 'Node-Webkit 0.38',
    v8: '7.4.288',
}
```

## getCepVersion(`app`, `version`)
Gets the CEP version associated with the app's version. Based on [Adobe's documentation](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#applications-integrated-with-cep).

### Parameters
- `appId`: The app identifier in the format of `AEFT`.
- `appVersion`: The app's version. Can be integer or float. Patch version numbers are ignored.

### Returns
The CEP version number as an integer.

## getCefVersions(`cepVersion`)
Gets the CEF versions associated with `cepVersion`. Based on [Adobe's documentation](https://github.com/Adobe-CEP/CEP-Resources/blob/master/CEP_11.x/Documentation/CEP%2011.1%20HTML%20Extension%20Cookbook.md#chromium-embedded-framework-cef).

### Parameters
- `cepVersion`: The CEP version as an integer.

# Install
Use `npm i klustre/cef-lookup --save` or download the code directly from Github.

# Contribute
Open a pull request or issue if you find any mistakes or want to support earlier versions.

# Disclaimer
As mentioned, I wrote this module for a single use case and it was not tested beyond that. The data was taken from [Adobe's own documentation](https%3A%2F%2Fgithub.com%2FAdobe-CEP%2FCEP-Resources%2Fblob%2Fmaster%2FCEP_11.x%2FDocumentation%2FCEP%2011.1%20HTML%20Extension%20Cookbook.md).
