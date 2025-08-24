/**
 * @param {number} initialValue
 * @return {Function}
 */
module.exports = function makeCounter(initialValue) {
    let count = initialValue - 1;

    return () => {
        count += 1;
        return count;
    }
}