'use-strict';
const Bitmap = require('./lib/bitmap');

let bmp;
let bmp2;
let bmp3;

const ColorTransform = module.exports = function() {};

ColorTransform.prototype.invertColors = function(data) {
  bmp = new Bitmap(data);
  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    let invertArr = [bmp.pixelArray[i], bmp.pixelArray[i + 1], bmp.pixelArray[i + 2], bmp.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let asdf = greyscalebuffer
    //NEED TO INSERT CLIP INTO ORIGINAL BUFFER
    //insert greyscale buffer into all data?
    console.log(invertArr);
  }
};


ColorTransform.prototype.greyscale = function(data) {
  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp2 = new Bitmap(data);
    let greyscaleArr = [bmp2.pixelArray[i], bmp2.pixelArray[i + 1], bmp2.pixelArray[i + 2], bmp2.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let newnambuffer = invertbuffer
    //NEED TO INSERT CLIP INTO ORIGINAL BUFFER
    //insert greyscale buffer into all data?
    console.log(greyscaleArr);
  }
};

ColorTransform.prototype.blackOut = function(data) {

  for (var i = 0; i < bmp.pixelArray.length; i += 4) {
    bmp3 = new Bitmap(data);
    let blackOutArr = [bmp3.pixelArray[i], bmp3.pixelArray[i + 1], bmp3.pixelArray[i + 2], bmp3.pixelArray[i + 3]];
    //create a new buffer off math'ed data;
    // let newnambuffer = blackOut
    //NEED TO INSERT CLIP INTO ORIGINAL BUFFER
    //insert greyscale buffer into all data?
    console.log(blackOutArr);
  }
};
