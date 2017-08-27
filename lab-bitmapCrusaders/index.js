'use-strict';
// const Bitmap = require('../lib/bitmap');
// const ColorTransformer = require ('../lib/transform');
// const fs = require('fs');
//^ I think we need to require all of these in in order to avoid getting undefined values in the bitmap???
const read = require(`./lib/read-write`);

module.exports = exports = {};
console.log('before init');
read.initFile();
