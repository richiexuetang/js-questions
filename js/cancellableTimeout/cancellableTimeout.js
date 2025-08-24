module.exports = function setCancellableTimeout(callback, delay, ...args) {
    const timerId = setTimeout(callback, delay, ...args);

    return () => {
        clearTimeout(timerId);
    }
}