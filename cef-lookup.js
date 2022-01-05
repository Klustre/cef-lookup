export function getCefVersions(cepversion) {
    if (!Number.isInteger(cepversion)) {
        throw '`cepversion` is not an integer'
    } 
    switch (cepversion) {
        case 9:
            return {
                cef: '3163',
                chromium: '61.0.3163.91',
                nodejs: '8.6.0',
                cef_node: 'Node-Webkit 0.25',
                v8: '6.3.292.49',
            }
        case 10:
            return {
                cef: '3729',
                chromium: '74.0.3729.157',
                nodejs: '12.3.1',
                cef_node: 'Node-Webkit 0.38',
                v8: '7.4.288',
            }
        case 11:
            return {
                cef: '(88)',
                chromium: '88',
                nodejs: '15.9.0',
                cef_node: 'Node-Webkit 0.50.1',
                v8: '8.7',
            }
        default:
            return
    }
}

export function getCepVersion(app, version) {
    app = app.toString().toUpperCase()
    if (app.length !== 4) {
        throw '`app` requires 4 letters'
    }
    version = parseFloat(version)
    version = Number.isInteger(version) ? `${version}.0` : version
    const CEP_VERSION = {
        PHSP: {
            "20.0": 9,
            "21.0": 9,
            "22.0": 10,
            "23.0": 11,
        },
        PHXS: {
            "20.0": 9,
            "21.0": 9,
            "22.0": 10,
            "23.0": 11,
        },
        IDSN: {
            "14.0": 9,
            "15.0": 9,
            "16.0": 10,
            "16.3": 11,
        },
        AICY: {
            "14.0": 9,
            "15.0": 9,
            "16.0": 10,
            "16.3": 11,
        },
        ILST: {
            "23.0": 9,
            "24.0": 9,
            "25.0": 10,
            "25.3": 11,
        },
        PPRO: {
            "13.0": 9,
            "14.0": 9,
            "14.4": 10,
            "15.4": 11,
        },
        PRLD: {
            "8.0": 9,
            "9.0": 9,
            "10.0": 10,
            "10.1": 11,
        },
        AEFT: {
            "16.0": 9,
            "17.0": 9,
            "17.1.4": 10, // Reference only
            "17.2": 10,
            "18.4": 11,
        },
        FLPR: {
            "19.0": 9,
            "20.0": 9,
            "21.0": 10,
            "22.0": 11,
        },
        AUDT: {
            "12.0": 9,
            "13.0": 9,
            "13.0.10": 10, // Reference only
            "13.1": 10,
            "14.4": 11,
        },
        DRWV: {
            "19.0": 9,
            "20.0": 9,
            "21.0": 10,
            "22.0": 11,
        },
        KBRG: {
            "9.0": 9,
            "10.0": 9,
            "11.0": 10,
            "12.0": 11,
        },
        RUSH: {
            "1.0": 9,
            "1.2.1": 9, // Reference only
            "1.3": 9,
            "1.5.29": 10, // Reference only
            "1.6": 10,
            "2.1": 11,
        },
    }
    const appversions = CEP_VERSION[app]
    if (!appversions) return
    const cepversion = appversions[version]
    return cepversion
}

export function cefLookup(app, version) {
    const cepv = getCepVersion(app, version)
    const cefv = getCefVersions(cepv)
    return cefv
}

export default cefLookup
