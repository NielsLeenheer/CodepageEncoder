export default CodepageEncoder;
export type Codepage = import("../generated/codepage.js").Codepage;
export type CodepageEncoding = {
    name: string;
    languages?: string[];
    extends?: string;
    offset?: number;
    codepoints: number[];
};
export type TestString = {
    language: string;
    string: string;
};
export type AutoEncodeFragment = {
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
