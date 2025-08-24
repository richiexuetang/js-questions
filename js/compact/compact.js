/**
 * compact.js
 * Main entry point for compact
 */

module.exports = function compact(array) {
  result = []

  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i])
    }
  }
  return result
}

// Add your code here
function main() {
  console.log('compact is running...');
}
