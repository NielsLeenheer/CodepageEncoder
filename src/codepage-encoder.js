import definitions from '../generated/definitions.js';
import aliases from '../generated/aliases.js';
import strings from './strings.js';

/**
 * A library for converting Unicode to obscure single byte codepage for use with thermal printers
 */
class CodepageEncoder {
  /**
     * Get list of supported codepages
     *
     * @return {array}           Return an array with the supported codepages
     *
     */
  static getEncodings() {
    return Object.keys(definitions);
  }

  /**
     * Get codepage definition
     *
     * @param  {string}   codepage  The codepage, defaults to ascii when it cannot find the codepage
     * @return {object}             Return an object with the codepage definition
     *
     */
  static getEncoding(codepage) {
    if (typeof aliases[codepage] !== 'undefined') {
      codepage = aliases[codepage];
    }

    if (typeof definitions[codepage] === 'undefined') {
      codepage = 'ascii';
    }

    /* Create codepoints array if it doesn't exist */

    if (typeof definitions[codepage].codepoints === 'undefined') {
      definitions[codepage].codepoints = this.getCodepoints(codepage, true);
    }

    /* Return codepage definition */

    return structuredClone(definitions[codepage]);
  }


  /**
     * Get test strings for the specified codepage
     *
     * @param  {string}   codepage  The codepage
     * @return {array}              Return an array with one or more objects
     *                              containing a property for the language of
     *                              the string and a property for the string itself
     *
     */
  static getTestStrings(codepage) {
    if (typeof aliases[codepage] !== 'undefined') {
      codepage = aliases[codepage];
    }

    if (typeof definitions[codepage] !== 'undefined' &&
        typeof definitions[codepage].languages !== 'undefined') {
      return definitions[codepage].languages.map((i) => ({language: i, string: strings[i]}));
    }

    return [];
  }

  /**
     * Determine if the specified codepage is supported
     *
     * @param  {string}   codepage  The codepage
     * @return {boolean}            Return a boolean, true if the encoding is supported,
     *                              otherwise false
     *
     */
  static supports(codepage) {
    if (typeof aliases[codepage] !== 'undefined') {
      codepage = aliases[codepage];
    }

    if (typeof definitions[codepage] === 'undefined') {
      return false;
    }

    return true;
  }

  /**
     * Encode a string in the specified codepage
     *
     * @param  {string}   input     Text that needs encoded to the specified codepage
     * @param  {string}   codepage  The codepage
     * @return {Uint8Array}         Return an array of bytes with the encoded string
     *
     */
  static encode(input, codepage) {
    const output = new Uint8Array(input.length);
    const definition = this.getEncoding(codepage);

    for (let c = 0; c < input.length; c++) {
      const codepoint = input.codePointAt(c);
      const position = definition.codepoints.findIndex((i) => i === codepoint);

      if (position !== -1) {
        output[c] = position;
      } else {
        output[c] = 0x3f;
      }
    }

    return output;
  }

  /**
     * Encode a string in the most optimal set of codepages.
     *
     * @param  {string}   input         Text that needs encoded
     * @param  {array}    candidates    An array of candidate codepages that are allowed to be used, ranked by importance
     * @return {Uint8Array}             Return an array of bytes with the encoded string
     *
     */
  static autoEncode(input, candidates) {
    const fragments = [];
    let fragment = -1;
    let current;

    for (let c = 0; c < input.length; c++) {
      const codepoint = input.codePointAt(c);

      let available;
      let char = 0;

      if (!available && current) {
        const definition = this.getEncoding(current);
        const position = definition.codepoints.findIndex((i) => i === codepoint);

        if (position !== -1) {
          available = current;
          char = position;
        }
      }

      if (!available) {
        for (let i = 0; i < candidates.length; i++) {
          const definition = this.getEncoding(candidates[i]);
          const position = definition.codepoints.findIndex((i) => i === codepoint);

          if (position !== -1) {
            available = candidates[i];
            char = position;
            break;
          }
        }
      }

      if (!available) {
        available = current || candidates[0];
        char = 0x3f;
      }

      if (current != available) {
        if (current) {
          fragments[fragment].bytes = new Uint8Array(fragments[fragment].bytes);
        }

        fragment++;
        fragments[fragment] = {
          codepage: available,
          bytes: [],
        };

        current = available;
      }

      fragments[fragment].bytes.push(char);
    }

    if (current) {
      fragments[fragment].bytes = new Uint8Array(fragments[fragment].bytes);
    }

    return fragments;
  }

  /**
     * Get codepoints
     *
     * @param  {string}   codepage         The codepage
     * @param  {boolean}  evaluateExtends  Evaluate the extends property
     * @return {array}                     Return an object array with 256 codepoints for the specified codepage
     *
     */
  static getCodepoints(codepage, evaluateExtends) {
    let codepoints = new Array(256);

    if (evaluateExtends) {
      if (typeof definitions[codepage].extends === 'undefined') {
        codepoints = codepoints.fill(0xfffd);
      } else {
        codepoints = this.getEncoding(definitions[codepage].extends).codepoints;
      }
    }

    if (definitions[codepage].value.length === 16) {
      for (let i = 0; i < 16; i++) {
        if (typeof definitions[codepage].value[i] !== 'object') {
          continue;
        }

        for (let j = 0; j < 16; j++) {
          if (typeof definitions[codepage].value[i][j] !== 'number') {
            continue;
          }

          codepoints[i * 16 + j] = definitions[codepage].value[i][j];
        }
      }
    } else {
      const offset = definitions[codepage].offset || 0;

      for (let i = 0; i < definitions[codepage].value.length; i++) {
        if (typeof definitions[codepage].value[i] !== 'number') {
          continue;
        }

        codepoints[offset + i] = definitions[codepage].value[i];
      }
    }

    return codepoints;
  }
}

export default CodepageEncoder;
