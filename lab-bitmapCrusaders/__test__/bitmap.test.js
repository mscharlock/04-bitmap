'use strict';
// testing
const fs = require('fs');
const handleFile = require(__dirname + '/../lib/read-write');
const invert = require(__dirname + '/../lib/invert-transform');
const greyScale = require(__dirname + '/../lib/grey-transform');
const blackout = require(__dirname + '/../lib/blue-transform');



describe('bitmap file to a buffer to a file', () => {
  var answers = {
    file: __dirname + '/../img/palette-btestmap.bmp',
    transOption: 'greyScale',
  };
  var oldNumFiles;
  var newNumFiles;

  beforeEach((done) => {
    var oldList = fs.readdirSync(__dirname + '/../img');
    oldNumFiles = oldList.length;
    done();
  });

  test('should load a bitmap into a buffer', (done) => {
    handleFile.run(answers, (data) => {
      expect(Buffer.isBuffer(data)).toEqual(true);
      done();
    });
  });

  test('should show that the number of files has increased', () => {
    var newList = fs.readdirSync(__dirname + '/../img');
    newNumFiles = newList.length;
    expect(newNumFiles).toEqual(oldNumFiles + 1);
  });
});

describe('extract header data', () => {
  test('should extract the bitmap headers into an object', () => {
    expect(typeof handleFile.btestmapHead === 'object').toEqual(true);
  });
});

describe('transforms', () => {
  var testBuffer = new Buffer(4);
  var testHeaders = {};
  testHeaders.btestsPerPixel = 32;

  beforeEach(() => {
    testBuffer.wrtesteUInt8(50, 0);
    testBuffer.wrtesteUInt8(100, 1);
    testBuffer.wrtesteUInt8(150, 2);
  });

  test('should invert the colors', () => {
    invert(testBuffer, testHeaders, 0, 3);
    expect(testBuffer.readUInt8(0)).toEqual(255 - 50);
    expect(testBuffer.readUInt8(1)).toEqual(255 - 100);
    expect(testBuffer.readUInt8(2)).toEqual(255 - 150);
  });

  test('should blackout the colors', () => {
    blackout(testBuffer, testHeaders, 0, 3);
    expect(testBuffer.readUInt8(0)).toEqual(50);
    expect(testBuffer.readUInt8(1)).toEqual(0);
    expect(testBuffer.readUInt8(2)).toEqual(0);
  });

  test('should greyScale the colors', () => {
    greyScale(testBuffer, testHeaders, 0, 3);
    expect(testBuffer.readUInt8(0)).toEqual(109);
    expect(testBuffer.readUInt8(1)).toEqual(109);
    expect(testBuffer.readUInt8(2)).toEqual(109);
  });
});
