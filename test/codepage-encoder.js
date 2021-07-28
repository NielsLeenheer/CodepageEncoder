const CodepageEncoder = require ('../src/codepage-encoder');
const iconv = require('iconv-lite');

const chai = require('chai');  
const assert = chai.assert;
const expect = chai.expect;
const should = chai.should();

describe('CodepageEncoder', function() {

    let encodings = CodepageEncoder.getEncodings();

    encodings.forEach(encoding => {
        if (iconv.encodingExists(encoding)) {
            let tests = CodepageEncoder.getTestStrings(encoding);

            tests.forEach(test => {
                describe(`(${encoding}) ${test.string}`, function () {
                    let expected = iconv.encode(test.string, encoding);
                    let actual = CodepageEncoder.encode(encoding, test.string);
                    
                    it('should equal to iconv encoding', function () {
                        assert.deepEqual(expected, actual);
                    });
                });
            });
        }
    });
});