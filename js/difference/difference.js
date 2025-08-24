/**
 * difference.js
 * Main entry point for difference
 */

module.exports = function difference(array, values) {
  const result = [];

  const valuesSet = new Set(values);

  for (let i = 0; i < array.length; i++) {
    const value = array[i];

    if (!valuesSet.has(value) && !(value === undefined && !(i in array))) {
      result.push(value);
    }
  }
  return result
}

// Add your code here
function main() {
  console.log('difference is running...');
}
