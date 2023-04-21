import CodepageEncoder from '../src/codepage-encoder.js';
import iconv from 'iconv-lite';
import chai from 'chai';

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
                    let actual = CodepageEncoder.encode(test.string, encoding);
                    
                    it('should equal to iconv encoding', function () {
                        assert.deepEqual(expected, actual);
                    });
                });
            });
        }
    });

    const string = "The quick brown fox ψυχοφθόρα bäckasiner söka strax hwila på ægithales hâtifs pondant à Noël Съешь же ещё этих yağız şoföre çabucak Pchnąć w tę łódź";
    const candidates = [ 'cp437', 'cp858', 'cp860', 'cp861', 'cp863', 'cp865', 'cp852', 'cp857', 'cp855', 'cp866', 'cp869' ];
    const expected = [
        {
          codepage: 'cp437',
          bytes: new Uint8Array([
             84, 104, 101, 32, 113, 117,
            105,  99, 107, 32,  98, 114,
            111, 119, 110, 32, 102, 111,
            120,  32
          ])
        },
        {
          codepage: 'cp869',
          bytes: new Uint8Array([
            246, 242, 244, 233,
            243, 226, 162, 235,
            214,  32,  98
          ])
        },
        {
          codepage: 'cp437',
          bytes: new Uint8Array([
            132,  99, 107,  97, 115, 105, 110, 101, 114,  32,
            115, 148, 107,  97,  32, 115, 116, 114,  97, 120,
             32, 104, 119, 105, 108,  97,  32, 112, 134,  32,
            145, 103, 105, 116, 104,  97, 108, 101, 115,  32,
            104, 131, 116, 105, 102, 115,  32, 112, 111, 110,
            100,  97, 110, 116,  32, 133,  32,  78, 111, 137,
            108,  32
          ])
        },
        {
          codepage: 'cp855',
          bytes: new Uint8Array([
            228, 158, 168, 245, 237,  32,
            233, 168,  32, 168, 249, 132,
             32, 247, 229, 183, 181,  32,
            121,  97
          ])
        },
        {
          codepage: 'cp857',
          bytes: new Uint8Array([
            167, 141, 122,  32, 159, 111,
            102, 148, 114, 101,  32, 135,
             97,  98, 117,  99,  97, 107,
             32,  80,  99, 104, 110
          ])
        },
        {
          codepage: 'cp852',
          bytes: new Uint8Array([
            165, 134,  32, 119,
             32, 116, 169,  32,
            136, 162, 100, 171
          ])
        }
      ];

    describe(`Autoencode "${string}"`, function () {
        let actual = CodepageEncoder.autoEncode(string, candidates);
        
        it('should equal', function () {
            assert.deepEqual(expected, actual);
        });
    });
});