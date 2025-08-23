module.exports = function clamp(value, lower, upper) {
    return Math.min(Math.max(value, lower), upper);
}