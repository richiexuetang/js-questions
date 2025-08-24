/**
 * @param {Array} array - Array from which the elements are all numbers
 * @return {Number} Mean
 */
module.exports = function mean(array) {
    let total = 0;

    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total / array.length;
}