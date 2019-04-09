/**
 * @author Meena
 * @description Based on this link from stack overflow
 * https://stackoverflow.com/a/45894024/2206971
 *
 * Since the new version no longer supports nested messages objects, It's not required to use nested objects,
 * but it's quite good for organizing code, and makes it easier while translation with babelEdit
 */

/**
 *
 * @type {Function}
 * @param JSON with nested objects
 * @return JSON, with nested objects flattened
 *
 * Later, this can be replaced with a hook that runs on build, that creates new translation files flattened,
 * That can be applied only for production mode,
 *
 */
export const flattenMessages = ((nestedMessages, prefix = '') => {
    if (nestedMessages === null) {
        return {}
    }
    return Object.keys(nestedMessages).reduce((messages, key) => {
        const value = nestedMessages[key];
        const prefixedKey = prefix ? `${prefix}.${key}` : key;

        if (typeof value === 'string') {
            Object.assign(messages, {[prefixedKey]: value})
        } else {
            Object.assign(messages, flattenMessages(value, prefixedKey))
        }

        return messages
    }, {})
});