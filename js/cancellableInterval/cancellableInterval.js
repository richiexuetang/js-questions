/**
 * @param {Function} callback
 */
module.exports = function cancellableInterval(callback, delay, ...args) {
    const timerId = setInterval(callback, delay, ...args);

    return () => {
        clearInterval(timerId);
    }
}