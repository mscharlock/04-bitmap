'use-strict';

const fs = require('fs');
const readWrite = require(`../lib/read-write`);
console.log(readWrite);

// let bmp;
// let bmp2;
// let bmp3;
module.exports = exports = {};


exports.invertColors = function(err, data) {
  console.log('this is data', data);
  let invertArr = data;
  let invertedStuff = [];
  for (var i = 0; i < data.pixelArray.length; i += 1078) {
    //returning chunks
    invertedStuff.push(255 - data.pixelArray[i]);
    console.log('invertArr', invertArr);
    // let invertArr = [data.pixelArray[i]*2, data.pixelArray[i + 1]*2, data.pixelArray[i + 2]*2, data.pixelArray[i + 3]*2];
    // console.log('this is invertarrrrr',invertArr);
  }
  let blarg = invertArr.toString(16);
  console.log('this is blarg.', blarg);
  let rightingBuffer = Buffer.alloc(10, blarg);
  console.log(rightingBuffer);
  fs.writeFile(`./assets/palette-bitmap.bmp`, rightingBuffer);
};
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
