function isValid(v, l) {
    return typeof v === 'object' && v.length === l;
}

/**
 *
 * @class BibleBookTypesLanguages
 */

class BibleBookTypesLanguages {
    /**
     * @param hebrew {Array}
     * @param greek {Array}
     */
    constructor(hebrew, greek) {
        if (!isValid(hebrew, 39))
            throw "Das Object 'hebrew' ist ungültig.";

        if (!isValid(greek, 27))
            throw "Das Object 'greek' ist ungültig.";

        let _hebrew = hebrew;
        let _greek = greek;

        Object.defineProperties(this, {
            hebrew: {
                get: function () {
                    return _hebrew;
                },
                set: function (v) {
                    console.log({setHebrew: v})
                    if (isValid(v, 39)) {
                        console.error('Ungültiger Parameter für "BibleBookTypesLanguages:hebrew"');
                        return;
                    }
                    _hebrew = v;
                }
            },
            greek: {
                get: function () {
                    return _greek;
                },
                set: function (v) {
                    if (isValid(v, 27)) {
                        console.error('Ungültiger Parameter für "BibleBookTypesLanguages:greek"');
                        return;
                    }
                    _greek = v;
                }
            },
            both: {
                get: function () {
                    return _hebrew.concat(_greek);
                }
            }
        });
    }
}

export default BibleBookTypesLanguages;