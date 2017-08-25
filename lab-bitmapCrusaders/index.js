'use-strict';

//need to be adjusted
const Bitmap = require(`./lib/bitmap`);
const transform = require(`./lib/transform`);
const fs = require('fs');

module.exports = exports = {};
    // let bitmap = new Bitmap(buffer);

fs.readFile(`${__dirname}/assets/bitmap.bmp`, (err, data) => {


  let copied = new Bitmap(data);
  let copied1 = new Bitmap(data);
  let copied2 = new Bitmap(data);

  transform.invertColors(copied);
  transform.greyscale(copied1);
  transform.blackOut(copied2);
});
