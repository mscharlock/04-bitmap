'use-strict';

const Bitmap = require(`${__dirname}/lib/bitmap.js`);
const ColorTransform = require(`${__dirname}/lib/transform.js`);
const fileHelper = require(`${__dirname}/lib/read-write.js`);

module.exports = exports = {};

exports.invertBitmap = () => {
  let onRead = (err, data) => {
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    let copied = new Buffer(data);

    bitmap.colorTable = transform.invertColors(bitmap);

    let startToColorTable = copied.slice(0, bitmap.headerSize + 14);
    let subColorTableBuffer = new Buffer(bitmap.colorTable.join(''), 'hex');
    let colorTableToEnd = copied.slice(data.readInt32LE(10));
    let testcopy = Buffer.concat([startToColorTable, subColorTableBuffer, colorTableToEnd]);

    fileHelper.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, testcopy, exports.writeNew);
  };
  fileHelper.initFile(`${__dirname}/assets/palette-bitmap.bmp`, onRead);
};

exports.greyscale = () => {
  let onRead = (err, data) => {
    if (err) throw err;

  };

};

exports.blackOut = () => {
  let onRead = (err, data) => {
    if (err) throw err;

  };

};
