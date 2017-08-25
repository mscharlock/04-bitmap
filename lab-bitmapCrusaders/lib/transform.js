'use-strict';

const ColorTransform = module.exports = function () {};

ColorTransform.prototype.invertColors = function(bitmap) {
    for (var i = 0; i < bmp.pixelArray.length; i+=4) {
      let invertArr = [bmp.pixelArray[i], bmp.pixelArray[i+1], bmp.pixelArray[i+2], bmp.pixelArray[i+3]];
    //create a new buffer off math'ed data;
    // let asdf = greyscalebuffer
    //NEED TO INSERT CLIP INTO ORIGINAL BUFFER
    //insert greyscale buffer into all data?

  };
});


ColorTransform.prototype.greyscale = function(bitmap) {
    for (var i = 0; i < bmp.pixelArray.length; i+=4) {
      let greyscaleArr = [bmp.pixelArray[i], bmp.pixelArray[i+1], bmp.pixelArray[i+2], bmp.pixelArray[i+3]];
  //create a new buffer off math'ed data;
  // let newnambuffer = invertbuffer
  //NEED TO INSERT CLIP INTO ORIGINAL BUFFER
  //insert greyscale buffer into all data?

  };
});

ColorTransform.prototype.blackOut = function(bitmap) {

    for (var i = 0; i < bmp.pixelArray.length; i+=4) {
      let blackOutArr = [bmp.pixelArray[i], bmp.pixelArray[i+1], bmp.pixelArray[i+2], bmp.pixelArray[i+3]];
  //create a new buffer off math'ed data;
  // let newnambuffer = blackOut
  //NEED TO INSERT CLIP INTO ORIGINAL BUFFER
  //insert greyscale buffer into all data?

  };
});
