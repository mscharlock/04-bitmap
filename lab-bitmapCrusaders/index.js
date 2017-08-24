'use-strict';

const Bitmap = require('./lib/bitmap');

const fs = require('fs');

module.exports = exports = {};
let bmp;
fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  bmp = new Bitmap(data);

  console.log(bmp);
  let work = bmp.pixelArray.slice(0, 4);
  
  console.log(work);

});

// let grey = bmp.slice(0, 3);
//
// grey.forEach( ele => {
//   let greyTooWrite = ele * 2;
// });
//
//
// render greyTooWrite to greyscale bitmap
