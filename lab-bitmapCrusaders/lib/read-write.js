'use-strict';
const Bitmap = require('./lib/bitmap');

const fs = require('fs');

module.exports = exports = {};
let bmp;

fs.readFile(`${__dirname}/assets/palette-bitmap.bmp`, (err, data) => {
  if(err) console.error(err);

  bmp = new Bitmap(data);
  console.log(bmp);


  exports.initFile = (path, callback) => {
    fs.readFile(path, (err, data) => {
      if(err) return callback(err);
      return callback(null, data);
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


  module.exports.prototype.greyscale(err, data);
  module.exports.prototype.invert(err, data);
  module.exports.prototype.blackOut(err, data);


});
