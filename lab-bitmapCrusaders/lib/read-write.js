// 'use strict';
// const Bitmap = require('./lib/bitmap');
//
// const fs = require('fs');
//
// exports.invertBitmap = () => {
//   let onRead = (err, data) => {
//     if (err) throw err;
//
//     let bitmap = new Bitmap(data);
//     console.log(bitmap);
//
//     // let transform = new ColorTransform();
//     let copied = Buffer.from(data);
//
//     // bitmap.colorTable = transform.invertColors(bitmap);
//
//     let startToColorTable = copied.slice(0, 2);
//     console.log(startToColorTable);
//
//     let subColorTableBuffer = new Buffer(bitmap.colorTable.join(''), 'hex');
//
//     let colorTableToEnd = copied.slice(data.readInt32LE(10));
//
//     let testcopy = Buffer.concat([startToColorTable, subColorTableBuffer, colorTableToEnd]);
//     console.log('concated stuff', testcopy);
//
//     fs.writeNew(`${__dirname}/assets/invert-bitmap.bmp`, testcopy, exports.writeNew);
//   };
//   fs.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
// };
