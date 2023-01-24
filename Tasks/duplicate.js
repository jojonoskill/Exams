'use strict';
// Return an array without duplicates

const duplicate = (value, n) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(value);
  }
  return result;
};

require('../Tests/duplicate.js')(duplicate);
