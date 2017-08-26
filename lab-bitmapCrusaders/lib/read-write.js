'use-strict';
const Bitmap = require('./lib/bitmap');
const ColorTransform = require ('./lib/transform');
const fs = require('fs');

module.exports = exports = {};

exports.initFile = () => {
  fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
    if(err) console.error(err);

    let copied = new Bitmap(data);
    let copied1 = new Bitmap(data);
    let copied2 = new Bitmap(data);
    ColorTransform.invertColors(err, copied);
    ColorTransform.greyScale(err, copied1);
    ColorTransform.blackOut(err, copied2);
  });
};

exports.writeNew = (path, data) => {
  return fs.writeFile(path, data, (err, data) => {
    if(err) return err;
    return data;
  });
};

exports.eraseFile = (path) => {
  return fs.writeFile(path, '', (err, data) => {
    if(err) return err;
    return data;
  });
};
