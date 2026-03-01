type Codepage = 'ascii' | 'cp437' | 'cp720' | 'cp737' | 'cp771' | 'cp2001' | 'cp772' | 'cp1119' | 'cp774' | 'cp1118' | 'cp775' | 'cp850' | 'cp851' | 'cp852' | 'cp853' | 'cp855' | 'cp857' | 'cp858' | 'cp860' | 'cp861' | 'cp862' | 'cp863' | 'cp864' | 'cp865' | 'cp866' | 'cp869' | 'cp874' | 'cp1162' | 'cp1001' | 'cp1098' | 'cp1125' | 'cp3001' | 'cp3002' | 'cp3011' | 'cp3012' | 'cp3021' | 'cp3041' | 'cp3840' | 'cp3841' | 'cp3843' | 'cp3844' | 'cp3845' | 'cp3846' | 'cp3847' | 'cp3848' | 'iso8859-1' | 'iso88591' | 'iso8859-2' | 'iso88592' | 'iso8859-7' | 'iso88597' | 'iso8859-15' | 'iso885915' | 'windows1250' | 'windows1251' | 'windows1252' | 'windows1253' | 'windows1254' | 'windows1255' | 'windows1256' | 'windows1257' | 'windows1258' | 'rk1048' | 'thai11' | 'thai13' | 'thai14' | 'thai16' | 'thai18' | 'thai42' | 'tcvn3' | 'tcvn3capitals' | 'viscii' | 'khmer' | 'latvian' | 'epson/katakana' | 'shiftjis' | 'katakana' | 'epson/iso8859-2' | 'star/standard' | 'star/katakana' | 'star/cp874' | 'star/cp928' | 'cp928' | 'bixolon/cp866' | 'bixolon/hebrew' | 'xprinter/hebrew' | 'pos8360/hebrew';

type CodepageEncoding = {
    name: string;
    languages?: string[];
    extends?: string;
    offset?: number;
    codepoints: number[];
};
type TestString = {
    language: string;
    string: string;
};
type AutoEncodeFragment = {
    codepage: Codepage;
    bytes: Uint8Array;
};
/** @typedef {import('../generated/codepage.js').Codepage} Codepage */
/**
 * @typedef {Object} CodepageEncoding
 * @property {string} name
 * @property {string[]} [languages]
 * @property {string} [extends]
 * @property {number} [offset]
 * @property {number[]} codepoints
 */
/**
 * @typedef {Object} TestString
 * @property {string} language
 * @property {string} string
 */
/**
 * @typedef {Object} AutoEncodeFragment
 * @property {Codepage} codepage
 * @property {Uint8Array} bytes
 */
/**
 * A library for converting Unicode to obscure single byte codepage for use with thermal printers
 */
declare class CodepageEncoder {
    /**
       * Get list of supported codepages
       *
       * @return {Codepage[]}           Return an array with the supported codepages
       *
       */
    static getEncodings(): Codepage[];
    /**
       * Get codepage definition
       *
       * @param  {Codepage}   codepage  The codepage, defaults to ascii when it cannot find the codepage
       * @return {CodepageEncoding}             Return an object with the codepage definition
       *
       */
    static getEncoding(codepage: Codepage): CodepageEncoding;
    /**
       * Get test strings for the specified codepage
       *
       * @param  {Codepage}   codepage  The codepage
       * @return {TestString[]}              Return an array with one or more objects
       *                              containing a property for the language of
       *                              the string and a property for the string itself
       *
       */
    static getTestStrings(codepage: Codepage): TestString[];
    /**
       * Determine if the specified codepage is supported
       *
       * @param  {string}   codepage  The codepage
       * @return {boolean}            Return a boolean, true if the encoding is supported,
       *                              otherwise false
       *
       */
    static supports(codepage: string): boolean;
    /**
       * Encode a string in the specified codepage
       *
       * @param  {string}   input     Text that needs encoded to the specified codepage
       * @param  {Codepage}   codepage  The codepage
       * @return {Uint8Array}         Return an array of bytes with the encoded string
       *
       */
    static encode(input: string, codepage: Codepage): Uint8Array;
    /**
       * Encode a string in the most optimal set of codepages.
       *
       * @param  {string}   input         Text that needs encoded
       * @param  {Codepage[]}    candidates    An array of candidate codepages that are allowed to be used, ranked by importance
       * @return {AutoEncodeFragment[]}             Return an array of fragments with the encoded string
       *
       */
    static autoEncode(input: string, candidates: Codepage[]): AutoEncodeFragment[];
    /**
       * Get codepoints
       *
       * @param  {Codepage}   codepage         The codepage
       * @param  {boolean}  evaluateExtends  Evaluate the extends property
       * @return {number[]}                     Return an array with 256 codepoints for the specified codepage
       *
       */
    static getCodepoints(codepage: Codepage, evaluateExtends: boolean): number[];
}

export { CodepageEncoder as default };
export type { AutoEncodeFragment, Codepage, CodepageEncoding, TestString };
