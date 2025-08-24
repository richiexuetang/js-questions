/**
 * @param {number} duration
 * @return {Promise<void>}
 */
module.exports = function sleep(duration) {
    return new Promise((resolve) => setTimeout(resolve, duration));
}