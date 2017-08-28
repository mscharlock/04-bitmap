'use-strict';
const Bitmap = require('../lib/bitmap');
const ColorTransformer = require ('../lib/transform');
const fs = require('fs');

module.exports = exports = {};

exports.copied;


//This is called from Index.js
//NOTE! because initFile is nested, we can use copied and don't need copied1, copied2. The chain will complete all calls before moving onto greyScale();
exports.initFile = () => {
  fs.readFile('./assets/palette-bitmap.bmp', (err, data) => {
    if(err) console.error(err);
    //This creates a new object that will be used to gather initial data.
    exports.copied = new Bitmap(data);
    //This calls invertColors() in read-write
    exports.invertColors();
    fs.readFile('./assets/palette-bitmap.bmp', (err, data) => {
      if(err) console.error(err);
      exports.copied = new Bitmap(data);
      exports.greyScale();
      fs.readFile('./assets/palette-bitmap.bmp', (err, data) => {
        if(err) console.error(err);
        exports.copied = new Bitmap(data);
        exports.blackOut();
      });
    });
  });
};


exports.writeNew = (path, data) => {
  data = exports.copied.allData;
  path = `./assets/${exports.path}.bmp`;
  fs.writeFile(path, data, (err) => {
    if(err) return err;
    return data;
  });
};

exports.invertColors = () => {
  //This is for dynamic file path, because we are using copied in all funcitons.
  exports.path = Object.keys(ColorTransformer)[0];
  //This is calling invertColors in TRANSFORM.JS with copied as its data argument.
  ColorTransformer.invertColors(exports.copied);
  //At this point data was sent to transform, was transformed, and then is being used to write.
  //This writeNew is above in read-write.js
  exports.writeNew();
};

exports.greyScale = () => {
  exports.path = Object.keys(ColorTransformer)[1];
  ColorTransformer.greyScale(exports.copied);
  exports.writeNew();
};

exports.blackOut = () => {
  exports.path = Object.keys(ColorTransformer)[2];
  ColorTransformer.blackOut(exports.copied);
  exports.writeNew();
};
