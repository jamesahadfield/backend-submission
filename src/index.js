"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericStringInterpolate = void 0;
function GenericStringInterpolate(contentToBeParsed, variables) {
    // fn could have maybe been done using generic types, although may have needed a constraint on T to account for string edge case?
    const stringParseFn = (stringToParse, variableMap) => {
        const strArray = stringToParse.split(' ').map(x => {
            const variableFinderStr = x.replace(/[^a-z0-9$]/gi, ''); // accounts for things like ? or ! e.g. Hello $catName!
            if (variableMap.has(variableFinderStr)) {
                return x.replace(variableFinderStr, variableMap.get(variableFinderStr));
            }
            return x;
        });
        return strArray.join(' ');
    };
    if (contentToBeParsed) {
        if (typeof contentToBeParsed === 'string') {
            return stringParseFn(contentToBeParsed, variables);
        }
        for (const [key, value] of Object.entries(contentToBeParsed)) {
            // first do a null check otherwise typeof null would return 'object'
            if (value) {
                if (typeof value === 'string') {
                    // we know we can do a replace now
                    contentToBeParsed[key] = stringParseFn(value, variables);
                }
                else if (typeof value === 'object') {
                    // recurse
                    contentToBeParsed[key] = GenericStringInterpolate(value, variables);
                }
            }
        }
    }
    return contentToBeParsed;
}
exports.GenericStringInterpolate = GenericStringInterpolate;
//# sourceMappingURL=index.js.map