'use-strict';


const readWrite = require(`../lib/read-write`);
console.log(readWrite);

module.exports = exports = {};

//Copied is refering too the copied on read-write.
exports.invertColors = function(copied) {

  for (var i = 0; i < copied.pixelArray.length; i += 4) {
    //Do math
    copied.pixelArray[i] = 255-copied.pixelArray[i];
    copied.pixelArray[i+1] = 255-copied.pixelArray[i+1];
    copied.pixelArray[i+2] = 255-copied.pixelArray[i+2];
  }
};




exports.greyScale = function(copied) {
  for (var i = 0; i < copied.pixelArray.length; i+= 4) {
    var carol = (copied.pixelArray[i] + copied.pixelArray[i+1] + copied.pixelArray[i+2])/3;
    copied.pixelArray[i] = carol;
    copied.pixelArray[i+1] = carol;
    copied.pixelArray[i+2] = carol;
  }
};


exports.blackOut = function(copied) {

  for (var i = 0; i < copied.pixelArray.length; i+= 4) {
    copied.pixelArray[i] = 0;
    copied.pixelArray[i+1] = 0;
    copied.pixelArray[i+2] = 0;
  }
};
