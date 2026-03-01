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
declare class CodepageEncoder {
    static getEncodings(): Codepage[];
    static getEncoding(codepage: Codepage): CodepageEncoding;
    static getTestStrings(codepage: Codepage): TestString[];
    static supports(codepage: string): boolean;
    static encode(input: string, codepage: Codepage): Uint8Array;
    static autoEncode(input: string, candidates: Codepage[]): AutoEncodeFragment[];
    static getCodepoints(codepage: Codepage, evaluateExtends: boolean): number[];
}

export { CodepageEncoder as default };
export type { AutoEncodeFragment, Codepage, CodepageEncoding, TestString };
