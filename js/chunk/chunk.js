/**
 * chunk.js
 * Main entry point for chunk
 */

module.exports = function chunk(array, size = 1) {
  if (!Array.isArray(array) || size < 1) {
    return []
  }

  const result = [];
  let chunk = [];

  for (let i = 0; i < array.length; i++) {
    chunk.push(array[i]);

    if (chunk.length === size || i === array.length - 1) {
      result.push(chunk);
      chunk = [];
    }
  }
  return result;
}

// Add your code here
function main() {
  console.log('chunk is running...');
}
