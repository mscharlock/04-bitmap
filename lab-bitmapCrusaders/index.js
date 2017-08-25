'use-strict';

//need to be adjusted
const Bitmap = require(`./lib/bitmap`);
const ColorTransform = require(`./lib/transform`);
const writerReader = require(`./lib/read-write`);

module.exports = exports = {};

//we call the invertBitmap method
exports.invertBitmap = () => {
  let onRead = (err, data) => { //we read the data
    if (err) throw err;

    let bitmap = new Bitmap(data);
    let transform = new ColorTransform();
    let copied = new Buffer(data);
    let copied1 = new Buffer(data);
    let copied2 = new Buffer(data);

    transform.invertColors(copied);
    transform.greyscale(copied1);
    transform.blackOut(copied2);

    writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied, exports.writeNew);
    writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied1, exports.writeNew);
    writerReader.writeNew(`${__dirname}/assets/palette-invert-bitmap.bmp`, copied2, exports.writeNew);
