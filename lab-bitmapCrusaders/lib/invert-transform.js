'use strict';


// const fs = require('fs');
// const readWrite = require(`../lib/read-write`);
// console.log(readWrite);
//
// // let bmp;
// // let bmp2;
// // let bmp3;
// module.exports = exports = {};
//
//
// exports.invertColors = function(err, data) {
//   console.log('this is data', data);
//   let invertArr = data;
//   for (var i = startOffset; i < endOffset; i += bitmap.bitsPerPixel / 8) {
//     data.writeUInt8(255 - data.readUInt8(i), i);
//     data.writeUInt8(255 - data.readUInt8(i + 1), i + 1);
//     data.writeUInt8(255 - data.readUInt8(i + 2), i + 2);
//     console.log('this is invertarrrrr',invertArr);
//   }
//   let rightingBuffer = Buffer.alloc(4, invertArr);
//   fs.writeFile(`./assets/palette-bitmap.bmp`, rightingBuffer);
