'use strict';
// Generate random integer value in given range

const random = (min, max) => {
  const rnd = Math.random();
  return min + Math.floor(rnd * max);
};

require('../Tests/random.js')(random);
