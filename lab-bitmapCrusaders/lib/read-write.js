'use-strict';
const Bitmap = require('../lib/bitmap');
const ColorTransformer = require ('../lib/transform');
const fs = require('fs');

module.exports = exports = {};

exports.initFile = () => {
  fs.readFile('./assets/palette-bitmap.bmp', (err, data) => {
    if(err) console.error(err);
    console.log('before copy');
    let copied = new Bitmap(data);
    let copied1 = new Bitmap(data);
    let copied2 = new Bitmap(data);
    console.log(copied, copied1, copied2);
    ColorTransformer.invertColors(err, copied);
    ColorTransformer.greyScale(err, copied1);
    ColorTransformer.blackOut(err, copied2);
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
