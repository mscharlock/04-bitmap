'use-strict';

const fs = require('fs');
const bitmap = require('../lib/bitmap');
const readWrite = require(`../lib/read-write`);
console.log(readWrite);

// let bmp;
// let bmp2;
// let bmp3;
module.exports = exports = {};

//Ok I think the issue might be that what we had before, exports.invertColors (err, data), it doesn't know what data is??
exports.invertColors = function(err, bitmap) {
  // console.log('this is data', data);
  let bob = bitmap.data;
  let thing = [];
  for (var i = 0; i < bob.length; i += 4) {
    //do math
    bob.pixelArray[i] = 255-bob.pixelArray[i];
    bob.pixelArray[i+1] =255-bob.pixelArray[i+1];
    bob.pixelArray[i+2]=255-bob.pixelArray[i+2];
    //we don't do things on [i+3] because it's the stupid a value

    // parseInt(invertArr, 2);
    //  <-- Don't use this, this is leftover from when I was considering converting it to binary

    // console.log('this is invertarrrrr',invertArr);
    thing.push(bob);
  }
  // console.log('this is completed thing', thing);

  let rightingBuffer = Buffer.from(thing);
  // let rightingBuffer = Buffer.alloc(1087, thing);
  console.log('this is the righting buffer', rightingBuffer);
  fs.writeFile(`./assets/invert-bitmap.bmp`, bitmap.allData);
};

//we have to actually call this function?

// exports.invertColors();
// invertArr.forEach(ele => {
//     ele[0]*0;
//     ele[1]*0;
//     ele[2]*0;
//     ele[3];
//   });
//
// write file with new data
// readWrite.writeNew(invertArr);

// create a new buffer off math'ed data;
// let asdf = greyscalebuffer
// console.log(invertArr);
// we have to then write it
// then we pass it back up to write
//
// , exports.writeNew

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
