'use-strict';
const Bitmap = require('./lib/bitmap');

const fs = require('fs');

module.exports = exports = {};
let bmp;

fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  bmp = new Bitmap(data);

  // console.log(bmp);


  module.exports.prototype.greyscale(err, data);
  module.exports.prototype.invert(err, data);
  module.exports.prototype.blackOut(err, data);

  //
  //     fs.writeNew(`${__dirname}/assets/invert-bitmap.bmp`, COMPLETEDBUFFER, exports.writeNew);
  //   // };
  //   // fs.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
  // // };

});
