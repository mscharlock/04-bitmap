'use strict';

const fs = require('fs');
const ColorTransform = (`../lib/read-write`);
const readWrite = require(`../lib/read-write`);
const Bitmap = require(`../lib/bitmap`);
console.log(readWrite);

// let bmp = [];
// let bmp2 = [];
// // let bmp3;
module.exports = exports = {};

ColorTransform.prototype.greyScale = function(data) {
  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp2 = new Bitmap(data);
    let greyscaleArr = [bmp2.pixelArray[i], bmp2.pixelArray[i + 1], bmp2.pixelArray[i + 2], bmp2.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let newnambuffer = invertbuffer
    console.log(greyscaleArr);
  }
  index.writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied1, exports.writeNew);
};

////// Shaun's Solution
// module.exports = exports = function(data, bitmap, startOffset, endOffset) {
//   for (var i = startOffset; i < endOffset; i += bitmap.bitsPerPixel / 8) {
//     var greyScaleValueR = parseInt(data.readUInt8(i + 2), 10) * 0.3;
//     var greyScaleValueG = parseInt(data.readUInt8(i + 1), 10) * 0.59;
//     var greyScaleValueB = parseInt(data.readUInt8(i), 10) * 0.11;
//
//     var greyScale = greyScaleValueR + greyScaleValueG + greyScaleValueB;
//
//     data.writeUInt8(greyScale, i);
//     data.writeUInt8(greyScale, i + 1);
//     data.writeUInt8(greyScale, i + 2);
//   }
// };

///
