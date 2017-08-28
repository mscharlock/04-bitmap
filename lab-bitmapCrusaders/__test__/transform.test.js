'use strict';

const fs = require('fs');
const handleFile = require(__dirname + '/../lib/handleFile');
const invert = require(__dirname + '/../lib/inverttransform');
const greyscale = require(__dirname + '/../lib/greytransform');

describe('bitmap file to a buffer to a file', () => {
  var answers = {
    file: __dirname + '/../img/pikachu.bmp',
    transOption: 'greyscale'
  };
  var oldNumFiles;
  var newNumFiles;

  before((done) => {
    var oldList = fs.readdirSync(__dirname + '/../img');
    oldNumFiles = oldList.length;
    done();
  });

  it('should load a bitmap into a buffer', (done) => {
    handleFile.run(answers, (data) => {
      expect(Buffer.isBuffer(data)).to.eql(true);
      done();
    });
  });

  it('should show that the number of files has increased', () => {
    var newList = fs.readdirSync(__dirname + '/../img');
    newNumFiles = newList.length;
    expect(newNumFiles).to.eql(oldNumFiles + 1);
  });
});

describe('extract header data', () => {
  it('should extract the bitmap headers into an object', () => {
    expect(typeof handleFile.bitmapHead === 'object').to.eql(true);
  });
});

describe('transforms', () => {
  var testBuffer = new Buffer(4);
  var testHeaders = {};
  testHeaders.bitsPerPixel = 32;

  beforeEach(() => {
    testBuffer.writeUInt8(50, 0);
    testBuffer.writeUInt8(100, 1);
    testBuffer.writeUInt8(150, 2);
  });

  it('should invert the colors', () => {
    invert(testBuffer, testHeaders, 0, 3);
    expect(testBuffer.readUInt8(0)).to.eql(255 - 50);
    expect(testBuffer.readUInt8(1)).to.eql(255 - 100);
    expect(testBuffer.readUInt8(2)).to.eql(255 - 150);
  });

  it('should greyscale the colors', () => {
    greyscale(testBuffer, testHeaders, 0, 3);
    expect(testBuffer.readUInt8(0)).to.eql(109);
    expect(testBuffer.readUInt8(1)).to.eql(109);
    expect(testBuffer.readUInt8(2)).to.eql(109);
  });
});
