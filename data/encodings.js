const encodings = {

    'ascii': {
      name: 'ASCII',
      languages: ['en'],
    },
  
    /* PC codepages */
  
    'cp437': {
      name: 'USA, Standard Europe',
      languages: ['en'],
      extends: 'ascii',
    },
    'cp720': {
      name: 'Arabic',
      languages: ['ar'],
      extends: 'cp437',
    },
    'cp737': {
      name: 'Greek',
      languages: ['el'],
      extends: 'cp437',
    },
    'cp771': {
      name: 'Lithuanian KBL',
      languages: ['lt'],
      aliases: ['cp2001'],
      extends: 'cp866',
    },
    'cp772': {
      name: 'Lithuanian LST 1284',
      languages: ['lt'],
      aliases: ['cp1119'],
      extends: 'cp866',
    },
    'cp774': {
      name: 'Lithuanian LST 1283',
      languages: ['lt'],
      aliases: ['cp1118'],
      extends: 'cp437',
    },
    'cp775': {
      name: 'Baltic Rim',
      languages: ['et', 'lt'],
      extends: 'cp437',
    },
    'cp850': {
      name: 'Multilingual',
      languages: ['en'],
      extends: 'cp437',
    },
    'cp851': {
      name: 'Greek',
      languages: ['el'],
      extends: 'cp437',
    },
    'cp852': {
      name: 'Latin 2',
      languages: ['hu', 'pl', 'cz'],
      extends: 'cp850',
    },
    'cp853': {
      name: 'Turkish',
      languages: ['tr'],
      extends: 'cp437',
    },
    'cp855': {
      name: 'Cyrillic',
      languages: ['bg'],
      extends: 'cp437',
    },
    'cp857': {
      name: 'Turkish',
      languages: ['tr'],
      extends: 'cp437',
    },
    'cp858': {
      name: 'Euro',
      languages: ['en'],
      extends: 'cp850',
    },
    'cp860': {
      name: 'Portuguese',
      languages: ['pt'],
      extends: 'cp437',
    },
    'cp861': {
      name: 'Icelandic',
      languages: ['is'],
      extends: 'cp437',
    },
    'cp862': {
      name: 'Hebrew',
      languages: ['he'],
      extends: 'cp437',
    },
    'cp863': {
      name: 'Canadian French',
      languages: ['fr'],
      extends: 'cp437',
    },
    'cp864': {
      name: 'Arabic',
      languages: ['ar'],
      extends: 'cp437',
    },
    'cp865': {
      name: 'Nordic',
      languages: ['sv', 'dk'],
      extends: 'cp437',
    },
    'cp866': {
      name: 'Cyrillic 2',
      languages: ['ru'],
      extends: 'cp437',
    },
    'cp869': {
      name: 'Greek',
      languages: ['el'],
      extends: 'cp437',
    },
    'cp874': {
      name: 'Thai',
      languages: ['th'],
      aliases: ['cp1162'],
      extends: 'ascii',
    },
    'cp1001': {
      name: 'Arabic',
      languages: ['ar'],
      extends: 'cp437',
    },
    'cp1098': {
      name: 'Farsi',
      languages: ['fa'],
      extends: 'cp437',
    },
    'cp1125': {
      name: 'Ukrainian',
      languages: ['uk'],
      extends: 'cp866',
    },
    'cp3001': {
      name: 'Estonian 1 or 1116',
      languages: ['et'],
      extends: 'cp850',
    },
    'cp3002': {
      name: 'Estonian 2',
      languages: ['et'],
      extends: 'iso8859-1',
    },
    'cp3011': {
      name: 'Latvian 1',
      languages: ['lv'],
      extends: 'cp437',
    },
    'cp3012': {
      name: 'Latvian 2 (modified 866)',
      languages: ['lv'],
      extends: 'cp866',
    },
    'cp3021': {
      name: 'Bulgarian (MIK)',
      languages: ['bg'],
      extends: 'cp866',
    },
    'cp3041': {
      name: 'Maltese ISO 646',
      languages: ['mt'],
      extends: 'ascii',
    },
    'cp3840': {
      name: 'Russian (modified 866)',
      languages: ['ru'],
      extends: 'cp866',
    },
    'cp3841': {
      name: 'Ghost',
      languages: ['ru'],
      extends: 'cp437',
    },
    'cp3843': {
      name: 'Polish (Mazovia)',
      languages: ['pl'],
      extends: 'cp437',
    },
    'cp3844': {
      name: 'Czech (Kamenický)',
      languages: ['cz'],
      extends: 'cp437',
    },
    'cp3845': {
      name: 'Hungarian (CWI-2)',
      languages: ['hu'],
      extends: 'cp437',
    },
    'cp3846': {
      name: 'Turkish',
      languages: ['tr'],
      extends: 'cp437',
    },
    'cp3847': {
      name: 'Brazil ABNT',
      languages: ['pt'],
      extends: 'iso8859-1',
    },
    'cp3848': {
      name: 'Brazil ABICOMP',
      languages: ['pt'],
      extends: 'ascii',
    },
  
    /* ISO 8859 */
  
    'iso8859-1': {
      name: 'Latin 1',
      languages: ['en'],
      extends: 'ascii',
      aliases: ['iso88591'],
    },
    'iso8859-2': {
      name: 'Latin 2',
      languages: ['hu', 'pl', 'cz'],
      extends: 'iso8859-1',
      aliases: ['iso88592'],
    },
    'iso8859-7': {
      name: 'Greek',
      languages: ['el'],
      extends: 'iso8859-1',
      aliases: ['iso88597'],
    },
    'iso8859-15': {
      name: 'Latin 9',
      languages: ['fr'],
      extends: 'iso8859-1',
      aliases: ['iso885915'],
    },
  
    /* Windows */
  
  
    'windows1250': {
      name: 'Latin 2',
      languages: ['hu', 'pl', 'cz'],
      extends: 'windows1252',
    },
    'windows1251': {
      name: 'Cyrillic',
      languages: ['ru'],
      extends: 'windows1252',
    },
    'windows1252': {
      name: 'Latin',
      languages: ['fr'],
      extends: 'iso8859-1',
    },
    'windows1253': {
      name: 'Greek',
      languages: ['el'],
      extends: 'windows1252',
    },
    'windows1254': {
      name: 'Turkish',
      languages: ['tr'],
      extends: 'windows1252',
    },
    'windows1255': {
      name: 'Hebrew',
      languages: ['he'],
      extends: 'windows1252',
    },
    'windows1256': {
      name: 'Arabic',
      languages: ['ar'],
      extends: 'windows1252',
    },
    'windows1257': {
      name: 'Baltic Rim',
      languages: ['et', 'lt'],
      extends: 'windows1252',
    },
    'windows1258': {
      name: 'Vietnamese',
      languages: ['vi'],
      extends: 'windows1252',
    },
  
    /* Others */
  
    'rk1048': {
      name: 'Kazakh',
      languages: ['kk'],
      extends: 'windows1251',
    },
    'thai11': {
      name: 'Thai (Charcter Code 11)',
      languages: ['th'],
      extends: 'cp874',
    },
    'thai13': {
      name: 'Thai (Charcter Code 13)',
      languages: ['th'],
      extends: 'thai11',
    },
    'thai14': {
      name: 'Thai (Charcter Code 14)',
      languages: ['th'],
      extends: 'cp874',
    },
    'thai16': {
      name: 'Thai (Charcter Code 16)',
      languages: ['th'],
      extends: 'thai18',
    },
    'thai18': {
      name: 'Thai (Charcter Code 18)',
      languages: ['th'],
      extends: 'thai14',
    },
    'thai42': {
      name: 'Thai (Charcter Code 42)',
      languages: ['th'],
      extends: 'thai18',
    },
    'tcvn3': {
      name: 'Vietnamese (VSCII3 / TCVN3)',
      languages: ['vi'],
      extends: 'ascii',
    },
    'tcvn3capitals': {
      name: 'Vietnamese (VSCII3 / TCVN3 Capitals)',
      languages: ['vi'],
      extends: 'ascii',
    },
    'viscii': {
      name: 'Vietnamese (VISCII)',
      languages: ['vi'],
      extends: 'ascii',
    },
  
    /* Languages */
  
    'khmer': {
      name: 'Khmer',
      languages: ['km'],
      extends: 'ascii',
    },
    'latvian': {
      name: 'Latvian (based on cp3012)',
      languages: ['lv'],
      extends: 'cp3012',
    },
  
    /* Epson codepages */
  
    'epson/katakana': {
      name: 'Katakana',
      languages: ['ja'],
      extends: 'cp437',
    },
  
    'epson/iso8859-2': {
      name: 'Latin 2 modified with box drawing characters',
      languages: ['hu', 'pl', 'cz'],
      extends: 'iso8859-2',
    },
  
    /* Star codepages */
  
    'star/standard': {
      name: 'Standard',
      languages: ['en'],
      extends: 'cp437',
    },
  
    'star/katakana': {
      name: 'Katakana',
      languages: ['ja'],
      extends: 'star/standard',
    },
  
    'star/cp874': {
      name: 'Thai',
      languages: ['th'],
      extends: 'cp874',
    },
  
    'star/cp928': {
      name: 'Greek',
      languages: ['el'],
      extends: 'cp437',
    },
  
    /* Bixolon codepages */
  
    'bixolon/cp866': {
      name: 'Cyrillic 2 (modified with euro sign)',
      languages: ['ru'],
      extends: 'cp866',
    },
  
    'bixolon/hebrew': {
      name: 'Hebrew',
      languages: ['he'],
      extends: 'cp437',
    },
  
    /* Xprinter codepages */
  
    'xprinter/hebrew': {
      name: 'Hebrew (based on CP862 minus CP437)',
      languages: ['he'],
      extends: 'ascii',
    },
  
    /* POS-8360 codepages */
  
    'pos8360/hebrew': {
      name: 'Hebrew (based on cp862 with repeated characters)',
      languages: ['he'],
      extends: 'cp862',
    },
  };

  export default encodings;