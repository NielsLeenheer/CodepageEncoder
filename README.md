# codepage-encoder

A library for converting Unicode to obscure single byte codepage for use with thermal printers. This library is internally used by `esc-pos-encoder`, `star-prnt-encoder` and `thermal-printer-encoder` and limited in functionality. We recommend that you use another library like `iconv` or `iconv-lite` for use with your project – unless you really, really need the codepages that are supported by this library.

## Usage

First, install the package using npm:

    npm install codepage-encoder --save

Then, require the package and use it like so:

    let CodepageEncoder = require('codepage-encoder');
    CodepageEncoder.encode('ξεσκεπάζω την ψυχοφθόρα βδελυγμία', 'cp869');

Or import it as an ES module:

    import CodepageEncoder from 'codepage-encoder';
    CodepageEncoder.encode('ξεσκεπάζω την ψυχοφθόρα βδελυγμία', 'cp869');
    

## Methods

The following static methods are available for you to use. You don't need to instantiate the object first.


### CodepageEncoder.encode

Encode the string to the codepage you specified. The result will be a Uint8Array containing all the bytes of the string in your codepage.

    CodepageEncoder.encode('ξεσκεπάζω την ψυχοφθόρα βδελυγμία', 'cp869');

Result: 

    Uint8Array(33) [
        232, 222, 236, 228, 222, 234, 155,
        224, 250,  32, 238, 225, 231,  32,
        246, 242, 244, 233, 243, 226, 162,
        235, 214,  32, 215, 221, 222, 229,
        242, 216, 230, 159, 214
    ]

See the method `CodepageEncoder.getEncodings()` for determining which codepages are currently supported by this library.


### CodepageEncoder.autoEncode

Encode the string with the most optimal set of codepages from the candidates codepages that you specified. The result will be a array of text fragments with the name of the codepage and an Uint8Array containing all the bytes of the string in that codepage.

    CodepageEncoder.autoEncode('Qwerty ψυχοφθόρα på Съешь łódź', [
        'cp437', 'cp858', 'cp860', 'cp861', 'cp863', 'cp865', 'cp852', 'cp857', 'cp855', 'cp866', 'cp869'
    ]);

Result: 

    [
        {
            codepage: 'cp437',
            bytes: Uint8Array(7) [
                81, 119, 101,
                114, 116, 121,
                32
            ]
        },
        {
            codepage: 'cp869',
            bytes: Uint8Array(11) [
                246, 242, 244, 233,
                243, 226, 162, 235,
                214,  32, 112
            ]
        },
        { 
            codepage: 'cp437', 
            bytes: Uint8Array(2) [ 
                134, 32 
            ] 
        },
        {
            codepage: 'cp855',
            bytes: Uint8Array(6) [ 
                228, 158, 168, 245, 237, 32 
            ]
        },
        { 
            codepage: 'cp852', 
            bytes: Uint8Array(4) [ 
                136, 162, 100, 171 
            ] 
        }
    ]

See the method `CodepageEncoder.getEncodings()` for determining which codepages are currently supported by this library.


### CodepageEncoder.supports

Determine if the specified codepage is supported. Return a boolean.

    CodepageEncoder.supports('cp1119')

Result: 

    true


### CodepageEncoder.getEncodings

Get the currently supported encodings. Returns an array of codepage identifiers. 

    CodepageEncoder.getEncodings()
    
Result: 

    [
        'cp437',       'cp720',       'cp737',       'cp775',
        'cp850',       'cp851',       'cp852',       'cp853',
        'cp855',       'cp857',       'cp858',       'cp860',
        'cp861',       'cp862',       'cp863',       'cp864',
        'cp865',       'cp866',       'cp869',       'cp874',
        'cp1098',      'cp1118',      'cp1119',      'cp1125',
        'cp1162',      'cp2001',      'cp3001',      'cp3002',
        'cp3011',      'cp3012',      'cp3021',      'cp3041',
        'cp3840',      'cp3841',      'cp3843',      'cp3844',
        'cp3845',      'cp3846',      'cp3847',      'cp3848',
        'iso88591',    'iso88592',    'iso88597',    'iso885915',
        'rk1048',      'windows1250', 'windows1251', 'windows1252',
        'windows1253', 'windows1254', 'windows1255', 'windows1256',
        'windows1257', 'windows1258'
    ]


### CodepageEncoder.getTestStrings

Get a number of example strings that can be used for the codepage you specified.

    CodepageEncoder.getTestStrings('cp865')

Result: 

    [
        { language: 'sv', string: 'Flygande bäckasiner söka strax hwila på mjuka tuvor.' },
        { language: 'dk', string: 'Quizdeltagerne spiste jordbær med fløde' }
    ]


## License

MIT
