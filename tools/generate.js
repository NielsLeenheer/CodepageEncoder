import encodings from '../data/encodings.js';
import fs from 'node:fs';
import { get } from 'node:http';
import { stringify } from 'javascript-stringify';


function getCodepoints(codepage) {
    let codepoints = new Array(256);
    let data;

    try {
        data = fs.readFileSync('data/encodings/' + codepage + '.txt', 'utf8');
    } catch (err) {
        console.error(err);
    }

    if (data) {
        data = data.split("\n").
                    filter(line => line.length && line.charAt(0) != '#').
                    map(line => line.split(/\t/)).
                    map(line => [ parseInt(line[0],16), parseInt(line[1],16) ]).
                    map(line => [ line[0], isNaN(line[1]) ? 0xfffd : line[1] ]);
        
        data = new Map(data);

        for (let i = 0; i < 256; i++) {
            if (data.has(i)) {
                codepoints[i] = data.get(i);
            }
        }
    }

    return codepoints;
}

function getEncoding(codepage) {
    if (encodings[codepage]) {
        let encoding = encodings[codepage];

        if (encoding.extends) {
            let base = getEncoding(encoding.extends);
            let codepoints = getCodepoints(codepage);

            for (let i = 0; i < 256; i++) {
                if (codepoints[i] !== null) {
                    base[i] = codepoints[i];
                }
            }

            return base;
        }

        return getCodepoints(codepage);
    }
}


function getDefinition(codepage) {
    let encoding = encodings[codepage];

    if (encoding) {
        let result = getEncoding(codepage);

        if (encoding.extends) {
            let base = getEncoding(encoding.extends);

            let offset = 0;
            let minimum = 256;
            let maximum = 0;
            let diffs = new Array(17);
            
            for (let i = 0; i < 256; i++) {
                if (typeof result[i] !== 'undefined' && result[i] != null) {
                    maximum = Math.max(maximum, i);
                }

                if (typeof result[i] !== 'undefined' && result[i] != base[i]) {
                    minimum = Math.min(minimum, i);

                    let row = i >> 4;

                    if (typeof diffs[row] === 'undefined') {
                        diffs[row] = new Array(17);
                    }

                    diffs[row][i % 16] = result[i];
                }
            }

            if (minimum >= 128) {
                offset = 128;
            }

            let diffString = stringify(diffs);
            let resultString = stringify(result.slice(offset));

            if (diffString.length < resultString.length) {
                encoding.value = diffs;
            } else {
                if (offset > 0) {
                    encoding.value = new Array(result.length - offset);

                    for (let i = offset; i < result.length; i++) {
                        if (typeof result[i] === 'number') {
                            encoding.value[i - offset] = result[i];
                        }
                    }
                }
                else {
                    encoding.value = result;
                }

                encoding.offset = offset;
            }
        }

        else {
            encoding.value = result;
            encoding.offset = 0;
        }

        return encoding;
    }
}
 
function generateDefinitions() {
    let output = '';

    output += 'const definitions = {\n\n';

    for (let codepage in encodings) {
        let definition = getDefinition(codepage);

        output += `\t'${codepage}': {\n`;
        output += `\t\tname: ${stringify(definition.name)},\n`;
        
        if (definition.languages) {
            output += `\t\tlanguages: ${stringify(definition.languages)},\n`;
        }

        if (definition.extends) {
            output += `\t\textends: '${definition.extends}',\n`;
        }

        if (definition.offset) {
            output += `\t\toffset: ${definition.offset},\n`;
        }

        if (codepage == 'ascii') {
            output += `\t\tvalue: new Array(256).fill(1,0,128).map((v,i) => i),\n`;
        } else {
            output += `\t\tvalue: ${stringify(definition.value)}\n`;
        }
        output += `\t},\n\n`;
    }

    output += '};\n\n';
    output += 'export default definitions;\n';

    fs.writeFileSync('generated/definitions.js', output, 'utf8');
}


function generateAliases() {
    let aliases = [];

    for (let codepage in encodings) {
        let encoding = encodings[codepage];

        if (encoding.aliases) {
            for (let alias of encoding.aliases) {
                aliases.push([alias, codepage]);
            }
        }
    }

    let output = '';
    output += 'const aliases = {\n';

    for (let alias of aliases) {
        output += `\t'${alias[0]}': '${alias[1]}',\n`;
    }

    output += '};\n\n';
    output += 'export default aliases;\n';

    fs.writeFileSync('generated/aliases.js', output, 'utf8');
}




generateDefinitions();
generateAliases();