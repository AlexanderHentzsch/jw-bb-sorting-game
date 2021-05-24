import BibleBookTypesLanguages from "~/classes/BibleBookTypesLanguages";

/**
 * @class BibleBookTypes
 */

class BibleBookTypes {
    /**
     * @constructor
     * @param shortHebrew {Array}
     * @param shortGreek {Array}
     * @param longHebrew {Array}
     * @param longGreek {Array}
     */
    constructor(shortHebrew, shortGreek, longHebrew, longGreek) {
        this.short = new BibleBookTypesLanguages(shortHebrew, shortGreek);
        this.long = new BibleBookTypesLanguages(longHebrew, longGreek);
    }
}

export default BibleBookTypes;