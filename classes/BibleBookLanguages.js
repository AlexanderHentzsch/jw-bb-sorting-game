import BibleBookTypes from "~/classes/BibleBookTypes";
import * as de from "~/biblebooks/de";
import * as deLa from "~/biblebooks/de-la";

/**
 * @return BibleBookTypesLanguages
 */
class BibleBookLanguages {
    constructor() {
        const __initLanguage = (obj) => {
            if (!!obj
                && obj.hasOwnProperty('isoCode')
                && obj.hasOwnProperty('shortHebrew')
                && obj.hasOwnProperty('shortGreek')
                && obj.hasOwnProperty('longHebrew')
                && obj.hasOwnProperty('longGreek')
            ) {
                this[obj.isoCode] = new BibleBookTypes(obj.shortHebrew, obj.shortGreek, obj.longHebrew, obj.longGreek);
            } else {
                console.error("Ungültiges Objekt bei der Bibelbuch-Sprache Initiierung.", obj);
            }
        }

        __initLanguage(de);
        __initLanguage(deLa);
    }

    getByLanguageAndType(language, type) {
        return this.filter((v, key) => key === language).filter((v, key) => key === type);
    }
}

export default BibleBookLanguages;