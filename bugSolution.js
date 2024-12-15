function foo(a, b) {
  if (a === null || b === null) {
    return NaN; // Handle null values appropriately
  }
  return a + b;
}

console.log(foo(null, 1)); // Output: NaN
console.log(foo(1, null)); // Output: NaN
console.log(foo(1, 2)); // Output: 3