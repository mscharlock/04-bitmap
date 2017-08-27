'use-strict';

const fs = require('fs');
const readWrite = require(`../lib/read-write`);
console.log('readWrite');

// let bmp;
// let bmp2;
// let bmp3;
module.exports = exports = {};

//each entry in the color table occupies 4 bytes, in the order blue, green, red, 0x00 (see below for exceptions).

exports.invertColors = function(err, data) {
  console.log('this is data', data);
  let invertArr = data;


  for (var i = 0; i < data.pixelArray.length; i += 4) {
    let invertArr = [data.pixelArray[i]*1, data.pixelArray[i + 1]*1, data.pixelArray[i + 2]*1, data.pixelArray[i + 3]*1];
    console.log('this is invertarrrrr',invertArr);
  }
  let invertedBuffer = Buffer.from(invertArr);
  // let rightingBuffer = Buffer.alloc(4, invertArr);
  fs.writeFile(`./assets/palette-bitmap.bmp`, invertedBuffer);
};

console.log(module.invertedBuffer);
// invertArr.forEach(ele => {
//     ele[0]*0;
//     ele[1]*0;
//     ele[2]*0;
//     ele[3];
//   });

//write file with new data
// readWrite.writeNew(invertArr);

//create a new buffer off math'ed data;
// let asdf = greyscalebuffer
// console.log(invertArr);
//we have to then write it
//then we pass it back up to write

//, exports.writeNew

//
// ColorTransform.prototype.greyScale = function(data) {
//   for (var i = 0; i < bmp.pixelArray.length; i += 4) {
//     bmp2 = new Bitmap(data);
//     let greyscaleArr = [bmp2.pixelArray[i], bmp2.pixelArray[i + 1], bmp2.pixelArray[i + 2], bmp2.pixelArray[i + 3]];
//     //create a new buffer off math'ed data;
//     // let newnambuffer = invertbuffer
//     console.log(greyscaleArr);
//   }
//   index.writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied1, exports.writeNew);
// };
//
// ColorTransform.prototype.blackOut = function(data) {
//
//   for (var i = 0; i < bmp.pixelArray.length; i += 4) {
//     bmp3 = new Bitmap(data);
//     let blackOutArr = [bmp3.pixelArray[i], bmp3.pixelArray[i + 1], bmp3.pixelArray[i + 2], bmp3.pixelArray[i + 3]];
//     //create a new buffer off math'ed data;
//     // let newnambuffer = blackOut
//     console.log(blackOutArr);
//   }
//   index.writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied2, exports.writeNew);
// };
