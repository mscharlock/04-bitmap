'use-strict';

module.exports = function Bitmap (buffer) {
  this.allData = buffer;
  this.type = buffer.toString('utf-8', 0, 2);
  this.fileSize = buffer.readInt32LE(2);
  this.offset = buffer.readInt32LE(10);
  this.width = buffer.readInt32LE(18);
  this.height = buffer.readInt32LE(22);
  this.pixelArray = buffer.slice(54, this.offset);
  // this.pixelArrayToMod = this.pixelArray.toString('utf-8', 0, 100);
  // this.pixelTable = data.toString('hex', this.pixelArrayStart, this.size).match(/.{1,2}/g);

  // this.colorMap = this.pixelTable.map(function (pix) {
  //   return parseInt(pix);
  // });

};
console.log(module.type);
console.log('is this text?', module.pixelArrayToMod);
console.log(module.allData);
