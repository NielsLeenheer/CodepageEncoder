!function(e,a){"object"==typeof exports&&"undefined"!=typeof module?module.exports=a():"function"==typeof define&&define.amd?define(a):(e="undefined"!=typeof globalThis?globalThis:e||self).CodepageEncoder=a()}(this,(function(){"use strict";const e={ascii:{name:"ASCII",languages:["en"],value:new Array(256).fill(1,0,128).map(((e,a)=>a))},cp437:{name:"USA, Standard Europe",languages:["en"],extends:"ascii",value:[[,9786,9787,9829,9830,9827,9824,8226,9688,9675,9689,9794,9792,9834,9835,9788],[9658,9668,8597,8252,182,167,9644,8616,8593,8595,8594,8592,8735,8596,9650,9660],,,,,,[,,,,,,,,,,,,,,,8962],[199,252,233,226,228,224,229,231,234,235,232,239,238,236,196,197],[201,230,198,244,246,242,251,249,255,214,220,162,163,165,8359,402],[225,237,243,250,241,209,170,186,191,8976,172,189,188,161,171,187],[9617,9618,9619,9474,9508,9569,9570,9558,9557,9571,9553,9559,9565,9564,9563,9488],[9492,9524,9516,9500,9472,9532,9566,9567,9562,9556,9577,9574,9568,9552,9580,9575],[9576,9572,9573,9561,9560,9554,9555,9579,9578,9496,9484,9608,9604,9612,9616,9600],[945,223,915,960,931,963,181,964,934,920,937,948,8734,966,949,8745],[8801,177,8805,8804,8992,8993,247,8776,176,8729,183,8730,8319,178,9632,160]]},cp720:{name:"Arabic",languages:["ar"],extends:"cp437",value:[,,,,,,,,[65533,65533,,,65533,,65533,,,,,,,65533,65533,65533],[65533,1617,1618,,164,1600,,,1569,1570,1571,1572,,1573,1574,1575],[1576,1577,1578,1579,1580,1581,1582,1583,1584,1585,1586,1587,1588,1589,,,],,,,[1590,1591,1592,1593,1594,1601,,1602,1603,1604,1605,1606,1607,1608,1609,1610],[,1611,1612,1613,1614,1615,1616,,,,,,,,,,]]},cp737:{name:"Greek",languages:["el"],extends:"cp437",value:[,,,,,,,,[913,914,915,916,917,918,919,920,921,922,923,924,925,926,927,928],[929,931,932,933,934,935,936,937,945,946,947,948,949,950,951,952],[953,954,955,956,957,958,959,960,961,963,962,964,965,966,967,968],,,,[969,940,941,942,970,943,972,973,971,974,902,904,905,906,908,910],[911,,,,938,939,,,,,,,,,,,]]},cp771:{name:"Lithuanian KBL",languages:["lt"],extends:"cp866",value:[,,,,,,,,,,,,,[,,,,,,,,,,,,260,261,268,269],,[280,281,278,279,302,303,352,353,370,371,362,363,381,382,,,]]},cp772:{name:"Lithuanian LST 1284",languages:["lt"],extends:"cp866",value:[,,,,,,,,,,,[,,,,,260,268,280,278,,,,,302,352,,],[,,,,,,370,362,,,,,,,,381],[261,269,281,279,303,353,371,363,382,,,,,,,,],,[,,8805,8804,8222,8220,247,8776,,,,,8319,178,,,]]},cp774:{name:"Lithuanian LST 1283",languages:["lt"],extends:"cp437",value:[,,,,,,,,,,,[,,,,,260,268,280,278,,,,,302,352,,],[,,,,,,370,362,,,,,,,,381],[261,269,281,279,303,353,371,363,382,,,,,,,,],[,946,,,,,,,,,,,,,,8898],[,,,,8222,8220,,,,,729,,,,,,]]},cp775:{name:"Baltic Rim",languages:["et","lt"],extends:"cp437",value:[,,,,,,,,[262,,,257,,291,,263,322,275,342,343,299,377,,,],[,,,333,,290,162,346,347,,,248,,216,215,164],[256,298,,379,380,378,8221,166,169,174,,,,321,,,],[,,,,,260,268,280,278,,,,,302,352,,],[,,,,,,370,362,,,,,,,,381],[261,269,281,279,303,353,371,363,382,,,,,,,,],[211,,332,323,245,213,,324,310,311,315,316,326,274,325,8217],[173,,8220,190,182,167,,8222,,,,185,179,,,,]]},cp850:{name:"Multilingual",languages:["en"],extends:"cp437",value:[,,,,,,,,,[,,,,,,,,,,,248,,216,215,,],[,,,,,,,,,174,,,,,,,],[,,,,,193,194,192,169,,,,,162,165,,],[,,,,,,227,195,,,,,,,,164],[240,208,202,203,200,305,205,206,207,,,,,166,204,,],[211,,212,210,245,213,,254,222,218,219,217,253,221,175,180],[173,,8215,190,182,167,,184,,168,,185,179,,,,]]},cp851:{name:"Greek",languages:["el"],extends:"cp437",value:[,,,,,,,,[,,,,,,902,,,,,,,904,,905],[906,65533,908,,,910,,,911,,,940,,941,942,943],[970,912,972,973,913,914,915,916,917,918,919,,920,921,,,],[,,,,,922,923,924,925,,,,,926,927,,],[,,,,,,928,929,,,,,,,,931],[932,933,934,935,936,937,945,946,947,,,,,948,949,,],[950,951,952,953,954,955,956,957,958,959,960,961,963,962,964,180],[173,,965,966,967,167,968,184,,168,969,971,944,974,,,]]},cp852:{name:"Latin 2",languages:["hu","pl","cz"],extends:"cp850",value:[,,,,,,,,[,,,,,367,263,,322,,336,337,,377,,262],[,313,314,,,317,318,346,347,,,356,357,321,,269],[,,,,260,261,381,382,280,281,,378,268,351,,,],[,,,,,,,282,350,,,,,379,380,,],[,,,,,,258,259,,,,,,,,,],[273,272,270,,271,327,,,283,,,,,354,366,,],[,,,323,324,328,352,353,340,,341,368,,,355,,],[,733,731,711,728,,,,,,729,369,344,345,,,]]},cp853:{name:"Turkish",languages:["tr"],extends:"cp437",value:[,,,,,,,,[,,,,,,265,,,,,,,,,264],[,267,266,,,,,,304,,,285,,284,215,309],[,,,,,,286,287,292,293,65533,,308,351,,,],[,,,,,193,194,192,350,,,,,379,380,,],[,,,,,,348,349,,,,,,,,164],[65533,65533,202,203,200,305,205,206,207,,,,,65533,204,,],[211,,212,210,288,289,,294,295,218,219,217,364,365,65533,180],[173,65533,8467,329,728,167,,184,,168,729,65533,179,,,,]]},cp855:{name:"Cyrillic",languages:["bg"],extends:"cp437",value:[,,,,,,,,[1106,1026,1107,1027,1105,1025,1108,1028,1109,1029,1110,1030,1111,1031,1112,1032],[1113,1033,1114,1034,1115,1035,1116,1036,1118,1038,1119,1039,1102,1070,1098,1066],[1072,1040,1073,1041,1094,1062,1076,1044,1077,1045,1092,1060,1075,1043,,,],[,,,,,1093,1061,1080,1048,,,,,1081,1049,,],[,,,,,,1082,1050,,,,,,,,164],[1083,1051,1084,1052,1085,1053,1086,1054,1087,,,,,1055,1103,,],[1071,1088,1056,1089,1057,1090,1058,1091,1059,1078,1046,1074,1042,1100,1068,8470],[173,1099,1067,1079,1047,1096,1064,1101,1069,1097,1065,1095,1063,167,,,]]},cp857:{name:"Turkish",languages:["tr"],extends:"cp437",value:[,,,,,,,,[,,,,,,,,,,,,,305,,,],[,,,,,,,,304,,,248,,216,350,351],[,,,,,,286,287,,174,,,,,,,],[,,,,,193,194,192,169,,,,,162,165,,],[,,,,,,227,195,,,,,,,,164],[186,170,202,203,200,8364,205,206,207,,,,,166,204,,],[211,,212,210,245,213,,65533,215,218,219,217,236,255,175,180],[173,,65533,190,182,167,,184,,168,,185,179,,,,]]},cp858:{name:"Euro",languages:["en"],extends:"cp850",value:[,,,,,,,,,,,,,[,,,,,8364,,,,,,,,,,,],,,]},cp860:{name:"Portuguese",languages:["pt"],extends:"cp437",value:[,,,,,,,,[,,,,227,,193,,,202,,205,212,,195,194],[,192,200,,245,,218,,204,213,,,,217,,211],[,,,,,,,,,210,,,,,,,],,,,,,]},cp861:{name:"Icelandic",languages:["is"],extends:"cp437",value:[,,,,,,,,[,,,,,,,,,,,208,240,222,,,],[,,,,,254,,221,253,,,248,,216,,,],[,,,,193,205,211,218,,,,,,,,,],,,,,,]},cp862:{name:"Hebrew",languages:["he"],extends:"cp437",value:[,,,,,,,,[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503],[1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,,,,,,],,,,,,,]},cp863:{name:"Canadian French",languages:["fr"],extends:"cp437",value:[,,,,,,,,[,,,,194,,182,,,,,,,8215,192,167],[,200,202,,203,207,,,164,212,,,,217,219,,],[166,180,,,168,184,179,175,206,,,,,190,,,],,,,,,]},cp864:{name:"Arabic",languages:["ar"],extends:"cp437",offset:128,value:[176,183,8729,8730,9618,9472,9474,9532,9508,9516,9500,9524,9488,9484,9492,9496,946,8734,966,177,189,188,8776,171,187,65271,65272,65533,65533,65275,65276,65533,160,173,65154,163,164,65156,65533,65533,65166,65167,65173,65177,1548,65181,65185,65189,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,65233,1563,65201,65205,65209,1567,162,65152,65153,65155,65157,65226,65163,65165,65169,65171,65175,65179,65183,65187,65191,65193,65195,65197,65199,65203,65207,65211,65215,65217,65221,65227,65231,166,172,247,215,65225,1600,65235,65239,65243,65247,65251,65255,65259,65261,65263,65267,65213,65228,65230,65229,65249,65149,1617,65253,65257,65260,65264,65266,65232,65237,65269,65270,65245,65241,65265,9632,65533]},cp865:{name:"Nordic",languages:["sv","dk"],extends:"cp437",value:[,,,,,,,,,[,,,,,,,,,,,248,,216,,,],[,,,,,,,,,,,,,,,164],,,,,,]},cp866:{name:"Cyrillic 2",languages:["ru"],extends:"cp437",value:[,,,,,,,,[1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055],[1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071],[1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087],,,,[1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],[1025,1105,1028,1108,1031,1111,1038,1118,,,,,8470,164,,,]]},cp869:{name:"Greek",languages:["el"],extends:"cp437",value:[,,,,,,,,[65533,65533,65533,65533,65533,65533,902,65533,183,172,166,8216,8217,904,8213,905],[906,938,908,65533,65533,910,939,169,911,178,179,940,,941,942,943],[970,912,972,973,913,914,915,916,917,918,919,,920,921,,,],[,,,,,922,923,924,925,,,,,926,927,,],[,,,,,,928,929,,,,,,,,931],[932,933,934,935,936,937,945,946,947,,,,,948,949,,],[950,951,952,953,954,955,956,957,958,959,960,961,963,962,964,900],[173,,965,966,967,167,968,901,,168,969,971,944,974,,,]]},cp874:{name:"Thai",languages:["th"],extends:"ascii",offset:128,value:[8364,65533,65533,65533,65533,8230,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,8216,8217,8220,8221,8226,8211,8212,65533,65533,65533,65533,65533,65533,65533,65533,160,3585,3586,3587,3588,3589,3590,3591,3592,3593,3594,3595,3596,3597,3598,3599,3600,3601,3602,3603,3604,3605,3606,3607,3608,3609,3610,3611,3612,3613,3614,3615,3616,3617,3618,3619,3620,3621,3622,3623,3624,3625,3626,3627,3628,3629,3630,3631,3632,3633,3634,3635,3636,3637,3638,3639,3640,3641,3642,65533,65533,65533,65533,3647,3648,3649,3650,3651,3652,3653,3654,3655,3656,3657,3658,3659,3660,3661,3662,3663,3664,3665,3666,3667,3668,3669,3670,3671,3672,3673,3674,3675,65533,65533,65533,65533]},cp1001:{name:"Arabic",languages:["ar"],extends:"cp437",value:[,,,,,,,,[1569,1570,1571,1572,1573,65163,1575,1576,65169,1577,1578,65175,1579,65179,1583,1584],[1585,1586,1587,65203,65204,1588,65207,65208,1589,65211,65212,1590,65215,65216,1591,1592],[1593,65227,1594,65231,1601,65235,1602,65239,1603,1705,1604,65271,65273,65275,9496,1605],[65251,1606,65255,1607,65259,1608,1609,1657,65267,9474,1548,1563,1567,65154,65156,65162],[,1580,65183,1581,65187,1582,65191,65226,65228,65230,65231,65272,65274,65276,65259,65260],[1632,65264,9472,65533,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,65533,65533],[65533,65533,65275,65533,65533,65533,65533,9524,,,,,,,,,],,]},cp1098:{name:"Farsi",languages:["fa"],extends:"cp437",value:[,,[,,,,,65533,,,,,65533,,,,,,],,,,,,[65533,65533,1548,1563,1567,1611,1570,65154,63738,1575,65166,63739,1569,1571,65156,63737],[1572,65163,1576,65169,64342,64344,1578,65175,1579,65179,1580,65183,64378,64380,215,1581],[65187,1582,65191,1583,1584,1585,1586,64394,1587,65203,1588,65207,1589,65211,,,],[,,,,,1590,65215,65217,65219,,,,,164,65221,,],[,,,,,,65223,1593,,,,,,,,65533],[65226,65227,65228,1594,65230,65231,65232,1601,65235,,,,,1602,65239,,],[64398,65243,64402,64404,1604,65247,1605,65251,1606,65255,1608,1607,65259,65260,64420,64508],[173,64509,64510,1600,1632,1633,1634,1635,1636,1637,1638,1639,1640,1641,,,]]},cp1125:{name:"Ukrainian",languages:["uk"],extends:"cp866",value:[,,,,,,,,,,,,,,,[,,1168,1169,1028,1108,1030,1110,1031,1111,247,177,,,,,]]},cp3001:{name:"Estonian 1 or 1116",languages:["et"],extends:"cp850",value:[,,,,,,,,,,,,,[353,352,,,,,,,,,,,,,,,],[,,,,,,,382,381,,,,,,,,],,]},cp3002:{name:"Estonian 2",languages:["et"],extends:"iso8859-1",value:[,,,,,,,,[65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533],[65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533],[32,,,,,,,,,,,,,,,8254],,,[352,,,,,,,,,,,,,,381,,],,[353,,,,,,,,,,,,,,382,,]]},cp3011:{name:"Latvian 1",languages:["lv"],extends:"cp437",value:[,,,,,,,,,,,[,,,,,256,,326,,,,,,,,,],[,,,,,,257,,,,,,,,,,],[352,,269,268,,,291,298,299,,,,,363,362,,],,[274,275,290,311,310,316,315,382,381,,,,325,353,,,]]},cp3012:{name:"Latvian 2 (modified 866)",languages:["lv"],extends:"cp866",value:[,,,,,,,,,,,[,,,,,256,,326,,,,,,332,,,],[,,,,,,257,,,,,,,,,,],[352,,269,268,,,291,298,299,,,,,363,362,,],,[274,275,290,311,310,316,315,382,381,333,,,325,353,,,]]},cp3021:{name:"Bulgarian (MIK)",languages:["bg"],extends:"cp866",value:[,,,,,,,,,,,[1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103],[,,,,,,9571,9553,,,,,,,,9488],[9617,9618,9619,9474,9508,8470,167,9559,9565,,,,,,,,],[945,223,915,960,931,963,181,964,934,920,937,948,8734,966,949,8745],[8801,177,8805,8804,8992,8993,247,8776,,,,,8319,178,,,]]},cp3041:{name:"Maltese ISO 646",languages:["mt"],extends:"ascii",value:[,,,,,[,,,,,,,,,,,289,380,295,,,],[267,,,,,,,,,,,,,,,,],[,,,,,,,,,,,288,379,294,266,,],,,,,,,,,]},cp3840:{name:"Russian (modified 866)",languages:["ru"],extends:"cp866",value:[,,,,,,,,,,,,,,,[8801,177,8805,8804,8992,8993,247,8776,,,,,8319,178,,,]]},cp3841:{name:"Ghost",languages:["ru"],extends:"cp437",offset:128,value:[1171,1241,1105,1110,1111,1112,1181,1257,1118,1199,1277,1224,1209,1207,1108,163,1170,1240,1025,1030,1031,1032,1180,1256,1038,1198,1276,1223,1208,1206,1028,1066,32,33,34,35,164,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,1102,1072,1073,1094,1076,1077,1092,1075,1093,1080,1081,1082,1083,1084,1085,1086,1087,1103,1088,1089,1090,1091,1078,1074,1100,1099,1079,1096,1101,1097,1095,1098,1070,1040,1041,1062,1044,1045,1060,1043,1061,1048,1049,1050,1051,1052,1053,1054,1055,1071,1056,1057,1058,1059,1046,1042,1068,1067,1047,1064,1069,1065,1063,8709]},cp3843:{name:"Polish (Mazovia)",languages:["pl"],extends:"cp437",value:[,,,,,,,,[,,,,,,261,,,,,,,263,,260],[280,281,322,,,262,,,346,,,,321,,347,,],[377,379,,211,324,323,378,380,,,,,,,,,],,,,,,]},cp3844:{name:"Czech (Kamenický)",languages:["cz"],extends:"cp437",value:[,,,,,,,,[268,,,271,,270,356,269,283,282,313,205,318,314,,193],[,382,381,,,211,367,218,253,,,352,317,221,344,357],[,,,,328,327,366,212,353,345,341,340,,167,,,],,,,,,]},cp3845:{name:"Hungarian (CWI-2)",languages:["hu"],extends:"cp437",value:[,,,,,,,,[,,,,,,,,,,,,,205,,193],[,,,337,,211,369,218,368,,,,,,,,],[,,,,,,,336,,,,,,,,,],,,,,,]},cp3846:{name:"Turkish",languages:["tr"],extends:"cp437",value:[,,,,,,,,[,,,,,,,,,,,,,305,,,],[,,,,,,,,304,,,,,,350,351],[,,,,,,286,287,,,,,,,,,],,,,,,]},cp3847:{name:"Brazil ABNT",languages:["pt"],extends:"iso8859-1",value:[,,,,,,,,,,,,,[,,,,,,,65533,,,,,,,,,],,[,,,,,,,65533,,,,,,,,,]]},cp3848:{name:"Brazil ABICOMP",languages:["pt"],extends:"ascii",value:[,,,,,,,,,,[160,192,193,194,195,196,199,200,201,202,203,204,205,206,205,209],[210,211,212,213,214,198,217,218,219,220,376,168,163,166,167,176],[161,224,225,226,227,228,231,232,233,234,235,236,237,238,239,241],[242,243,244,245,246,230,249,250,251,252,255,223,170,186,191,177],,,]},"iso8859-1":{name:"Latin 1",languages:["en"],extends:"ascii",offset:128,value:[128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,154,155,156,157,158,159,160,161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223,224,225,226,227,228,229,230,231,232,233,234,235,236,237,238,239,240,241,242,243,244,245,246,247,248,249,250,251,252,253,254,255]},"iso8859-2":{name:"Latin 2",languages:["hu","pl","cz"],extends:"iso8859-1",value:[,,,,,,,,,,[,260,728,321,,317,346,,,352,350,356,377,,381,379],[,261,731,322,,318,347,711,,353,351,357,378,733,382,380],[340,,,258,,313,262,,268,,280,,282,,,270],[272,323,327,,,336,,,344,366,,368,,,354,,],[341,,,259,,314,263,,269,,281,,283,,,271],[273,324,328,,,337,,,345,367,,369,,,355,729]]},"iso8859-7":{name:"Greek",languages:["el"],extends:"iso8859-1",value:[,,,,,,,,,,[,8216,8217,,8364,8367,,,,,890,,,,,8213],[,,,,900,901,902,,904,905,906,,908,,910,911],[912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927],[928,929,,931,932,933,934,935,936,937,938,939,940,941,942,943],[944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959],[960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,,]]},"iso8859-15":{name:"Latin 9",languages:["fr"],extends:"iso8859-1",value:[,,,,,,,,,,[,,,,8364,,352,,353,,,,,,,,],[,,,,381,,,,382,,,,338,339,376,,],,,,,]},windows1250:{name:"Latin 2",languages:["hu","pl","cz"],extends:"windows1252",value:[,,,,,,,,[,,,65533,,,,,65533,,,,346,356,,377],[,,,,,,,,65533,,,,347,357,,378],[,711,728,321,,260,,,,,350,,,,,379],[,,731,322,,,,,,261,351,,317,733,318,380],[340,,,258,,313,262,,268,,280,,282,,,270],[272,323,327,,,336,,,344,366,,368,,,354,,],[341,,,259,,314,263,,269,,281,,283,,,271],[273,324,328,,,337,,,345,367,,369,,,355,729]]},windows1251:{name:"Cyrillic",languages:["ru"],extends:"windows1252",value:[,,,,,,,,[1026,1027,,1107,,,,,8364,,1033,,1034,1036,1035,1039],[1106,,,,,,,,65533,,1113,,1114,1116,1115,1119],[,1038,1118,1032,,1168,,,1025,,1028,,,,,1031],[,,1030,1110,1169,,,,1105,8470,1108,,1112,1029,1109,1111],[1040,1041,1042,1043,1044,1045,1046,1047,1048,1049,1050,1051,1052,1053,1054,1055],[1056,1057,1058,1059,1060,1061,1062,1063,1064,1065,1066,1067,1068,1069,1070,1071],[1072,1073,1074,1075,1076,1077,1078,1079,1080,1081,1082,1083,1084,1085,1086,1087],[1088,1089,1090,1091,1092,1093,1094,1095,1096,1097,1098,1099,1100,1101,1102,1103]]},windows1252:{name:"Latin",languages:["fr"],extends:"iso8859-1",value:[,,,,,,,,[8364,65533,8218,402,8222,8230,8224,8225,710,8240,352,8249,338,65533,381,65533],[65533,8216,8217,8220,8221,8226,8211,8212,732,8482,353,8250,339,65533,382,376],,,,,,,]},windows1253:{name:"Greek",languages:["el"],extends:"windows1252",value:[,,,,,,,,[,,,,,,,,65533,,65533,,65533,,65533,,],[,,,,,,,,65533,,65533,,65533,,65533,65533],[,901,902,,,,,,,,65533,,,,,8213],[,,,,900,,,,904,905,906,,908,,910,911],[912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927],[928,929,65533,931,932,933,934,935,936,937,938,939,940,941,942,943],[944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959],[960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,65533]]},windows1254:{name:"Turkish",languages:["tr"],extends:"windows1252",value:[,,,,,,,,[,,,,,,,,,,,,,,65533,,],[,,,,,,,,,,,,,,65533,,],,,,[286,,,,,,,,,,,,,304,350,,],,[287,,,,,,,,,,,,,305,351,,]]},windows1255:{name:"Hebrew",languages:["he"],extends:"windows1252",value:[,,,,,,,,[,,,,,,,,,,65533,,65533,,65533,,],[,,,,,,,,,,65533,,65533,,65533,65533],[,,,,8362,,,,,,215,,,,,,],[,,,,,,,,,,247,,,,,,],[1456,1457,1458,1459,1460,1461,1462,1463,1464,1465,65533,1467,1468,1469,1470,1471],[1472,1473,1474,1475,1520,1521,1522,1523,1524,65533,65533,65533,65533,65533,65533,65533],[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503],[1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,65533,65533,8206,8207,65533]]},windows1256:{name:"Arabic",languages:["ar"],extends:"windows1252",value:[,,,,,,,,[,1662,,,,,,,,,1657,,,1670,1688,1672],[1711,,,,,,,,1705,,1681,,,8204,8205,1722],[,1548,,,,,,,,,1726,,,,,,],[,,,,,,,,,,1563,,,,,1567],[1729,1569,1570,1571,1572,1573,1574,1575,1576,1577,1578,1579,1580,1581,1582,1583],[1584,1585,1586,1587,1588,1589,1590,,1591,1592,1593,1594,1600,1601,1602,1603],[,1604,,1605,1606,1607,1608,,,,,,1609,1610,,,],[1611,1612,1613,1614,,1615,1616,,1617,,1618,,,8206,8207,1746]]},windows1257:{name:"Baltic Rim",languages:["et","lt"],extends:"windows1252",value:[,,,,,,,,[,,,65533,,,,,65533,,65533,,65533,168,711,184],[,,,,,,,,65533,,65533,,65533,175,731,65533],[,65533,,,,65533,,,216,,342,,,,,198],[,,,,,,,,248,,343,,,,,230],[260,302,256,262,,,280,274,268,,377,278,290,310,298,315],[352,323,325,,332,,,,370,321,346,362,,379,381,,],[261,303,257,263,,,281,275,269,,378,279,291,311,299,316],[353,324,326,,333,,,,371,322,347,363,,380,382,729]]},windows1258:{name:"Vietnamese",languages:["vi"],extends:"windows1252",value:[,,,,,,,,[,,,,,,,,,,65533,,,,65533,,],[,,,,,,,,,,65533,,,,65533,,],,,[,,,258,,,,,,,,,768,,,,],[272,,777,,,416,,,,,,,,431,771,,],[,,,259,,,,,,,,,769,,,,],[273,,803,,,417,,,,,,,,432,8363,,]]},rk1048:{name:"Kazakh",languages:["kk"],extends:"windows1251",value:[,,,,,,,,[,,,,,,,,,,,,,1178,1210,,],[,,,,,,,,,,,,,1179,1211,,],[,1200,1201,1240,,1256,,,,,1170,,,,,1198],[,,,,1257,,,,,,1171,,1241,1186,1187,1199],,,,,]},thai11:{name:"Thai (Charcter Code 11)",languages:["th"],extends:"cp874",value:[,,,,,,,,[65533,,,,,65533,,,,,,,,,,,],[,65533,65533,65533,65533,65533,65533,65533,,9484,9488,9492,9496,9474,9500,9508],,,,[,,,,,,,,,,,9472,9524,9516,9532,,],,[,,,,,,,,,,,3658,3650,3651,3652,,]]},thai13:{name:"Thai (Charcter Code 13)",languages:["th"],extends:"thai11",value:[,,,,,,,,,[,,,,,,,,,65533,65533,65533,65533,65533,65533,65533],,,,[,,,,,,,,,,,3619,65533,65533,3648,,],,[,,,,,,,,,,,3675,8592,8593,8594,8595]]},thai14:{name:"Thai (Charcter Code 14)",languages:["th"],extends:"cp874",value:[,,,,,,,,[9484,9488,9492,9496,9474,9472,9500,9508,9524,9516,9532,9608,,,,,],[3619,3634,65533,3632,65533,65533,65533,65533,,,,,,,,3648],,,,,,[,,,,,,,,,,3675,65533,,,,3652]]},thai16:{name:"Thai (Charcter Code 16)",languages:["th"],extends:"thai18",value:[,,,,,,,,,[3650,3651,,,,,,,,,,,,,,,],,,,,,,]},thai18:{name:"Thai (Charcter Code 18)",languages:["th"],extends:"thai14",value:[,,,,,,,,[,,,,,,,,,,,,8592,8593,8594,8595],,,,,,[,,,,,,,,,,,,,,3652,,],[,,,,,,,,,,,,,,,65533]]},thai42:{name:"Thai (Charcter Code 42)",languages:["th"],extends:"thai18",value:[,,,,,,,,,[3664,3665,3666,3667,3668,3669,3670,3671,3672,3673,3587,3589,3619,3634,3652,,],[,,,3588,3590,3591,3592,3593,3594,3595,3596,3597,3598,3599,3600,3601],[3602,3603,3604,3605,3606,3607,3608,3609,3610,3611,3612,3613,3614,3615,3616,3617],[3618,3619,3620,3621,3623,3624,3625,3626,3627,3628,3629,3630,3632,3622,3634,3635],[3648,3649,3650,3651,3652,3654,3631,3640,3641,3636,3637,3638,3639,3658,3661,3655],[3656,3657,3658,3659,3660,65533,65533,65533,65533,65533,65533,3632,65533,65533,65533,65533],[65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,65533,,,,,160]]},tcvn3:{name:"Vietnamese (VSCII3 / TCVN3)",languages:["vi"],extends:"ascii",value:[,,,,,,,,,,[,,,,,,,,259,226,234,244,417,432,273,,],[,,,,,224,7843,227,225,7841,,7857,7859,7861,7855,,],[,,,,,,7863,7847,7849,7851,7845,7853,232,,7867,7869],[233,7865,7873,7875,7877,7871,7879,236,7881,,,,297,237,7883,242],[,7887,245,243,7885,7891,7893,7895,7889,7897,7901,7903,7905,7899,7907,249],[,7911,361,250,7909,7915,7917,7919,7913,7921,7923,7927,7929,253,7925,,]]},tcvn3capitals:{name:"Vietnamese (VSCII3 / TCVN3 Capitals)",languages:["vi"],extends:"ascii",value:[,,,,,,,,,,[,258,194,,,,,208,,,202,212,416,431,,,],[,,,,,192,7842,195,193,7840,,7856,7858,7860,7854,,],[,,,,,,7862,7846,7848,7850,7844,7852,200,,7866,7868],[201,7864,7872,7874,7876,7870,7878,204,7880,,,,296,205,7882,210],[,7886,213,211,7884,7890,7892,7894,7888,7896,7900,7902,7904,7898,7906,217],[,7910,360,218,7908,7914,7916,7918,7912,7920,7922,7926,7928,221,7924,,]]},viscii:{name:"Vietnamese (VISCII)",languages:["vi"],extends:"ascii",value:[[,,7858,,,7860,7850,,,,,,,,,,],[,,,,7926,,,,,7928,,,,,7924,,],,,,,,,[7840,7854,7856,7862,7844,7846,7848,7852,7868,7864,7870,7872,7874,7876,7878,7888],[7890,7892,7894,7896,7906,7898,7900,7902,7882,7886,7884,7880,7910,360,7908,7922],[213,7855,7857,7863,7845,7847,7849,7853,7869,7865,7871,7873,7875,7877,7879,7889],[7891,7893,7895,7904,416,7897,7901,7903,7883,7920,7912,7914,7916,417,7899,431],[192,193,194,195,7842,258,7859,7861,200,201,202,7866,204,205,296,7923],[272,7913,210,211,212,7841,7927,7915,7917,217,218,7929,7925,221,7905,432],[224,225,226,227,7843,259,7919,7851,232,233,234,7867,236,237,297,7881],[273,7921,242,243,244,245,7887,7885,7909,249,250,361,7911,253,7907,7918]]},khmer:{name:"Khmer",languages:["km"],extends:"ascii",value:[,,,,,,,,[6016,6017,6016,6019,6020,6021,6022,6023,6024,6025,6026,6027,6028,6029,6030,6031],[6032,6033,6032,6035,6036,6037,6038,6039,6040,6041,6042,6043,6044,6045,6046,6047],[6048,6049,6048,6051,6052,6053,6054,6055,6056,6057,6058,6059,6060,6061,6062,6063],[6064,6065,6064,6067,6068,6069,6070,6071,6072,6073,6074,6075,6076,6077,6078,6079],[6080,6081,6080,6083,6084,6085,6086,6087,6088,6089,6090,6091,6092,6093,6094,6095],[6096,6097,6096,6099,6100,6101,6102,6103,6104,6105,6106,6107,6108,6109,,,],[6112,6113,6112,6115,6116,6117,6118,6119,6120,6121,,,,,,,],[6128,6129,6128,6131,6132,6133,6134,,,,,,,,,,]]},latvian:{name:"Latvian (based on cp3012)",languages:["lv"],extends:"cp3012",value:[,,,,,,,,,,,,,[,,,,298,299,,,,,,,,,,,],,,]},"epson/katakana":{name:"Katakana",languages:["ja"],extends:"cp437",offset:128,value:[9601,9602,9603,9604,9605,9606,9607,9608,9615,9614,9613,9612,9611,9610,9609,9532,9524,9516,9508,9500,9620,9472,9474,9621,9484,9488,9492,9496,9581,9582,9584,9583,32,65377,65378,65379,65380,65381,65382,65383,65384,65385,65386,65387,65388,65389,65390,65391,65392,65393,65394,65395,65396,65397,65398,65399,65400,65401,65402,65403,65404,65405,65406,65407,65408,65409,65410,65411,65412,65413,65414,65415,65416,65417,65418,65419,65420,65421,65422,65423,65424,65425,65426,65427,65428,65429,65430,65431,65432,65433,65434,65435,65436,65437,65438,65439,9552,9566,9578,9569,9698,9699,9701,9700,9824,9829,9830,9827,9679,9675,9585,9586,9587,20870,24180,26376,26085,26178,20998,31186,12306,24066,21306,30010,26449,20154,9618,160]},"epson/iso8859-2":{name:"Latin 2 modified with box drawing characters",languages:["hu","pl","cz"],extends:"iso8859-2",value:[,,,,,,,,[9617,9618,9619,9474,9508,9496,9484,9608,169,9571,9553,9559,9565,162,165,9488],[9492,9524,9516,9500,9472,9532,9604,9600,9562,9556,9577,9574,9568,9552,9580,174],,,,,,,]},"star/standard":{name:"Standard",languages:["en"],extends:"cp437",offset:128,value:[160,129904,129910,129905,129911,129906,129912,129907,129913,129908,129914,129909,9500,129915,129916,129918,129919,129917,9624,9623,9622,9629,9585,9586,9701,9700,9484,9524,9516,9508,9830,9587,196,214,220,223,167,170,186,65533,162,189,65533,65533,165,188,256,235,233,232,275,234,239,237,236,299,238,246,243,242,333,244,252,250,249,363,251,231,191,65533,65533,274,8580,161,197,248,216,228,225,224,257,226,176,8451,8457,937,181,931,963,65533,65533,967,8734,177,247,960,9612,9604,9600,9616,9532,9496,9492,9488,9608,9618,9162,8592,8593,8594,8595,9581,9161,129923,65533,9601,9613,65533,129928,9626,9630,9698,9699,129840,9208,9584,9583,9582]},"star/katakana":{name:"Katakana",languages:["ja"],extends:"star/standard",value:[,,,,,,,,,,[32,65377,65378,65379,65380,65381,65382,65383,65384,65385,65386,65387,65388,65389,65390,65391],[65392,65393,65394,65395,65396,65397,65398,65399,65400,65401,65402,65403,65404,65405,65406,65407],[65408,65409,65410,65411,65412,65413,65414,65415,65416,65417,65418,65419,65420,65421,65422,65423],[65424,65425,65426,65427,65428,65429,65430,65431,65432,65433,65434,65435,65436,65437,65438,65439],,,]},"star/cp874":{name:"Thai",languages:["th"],extends:"cp874",value:[,,,,,,,,,[,,,,,9474,9472,9532,9484,9488,9492,9496,9500,9516,9508,9524],,,,[,,,,,,,,,,,3657,3658,3659,3660,,],,[,,,,,,,,,,,,162,172,166,,]]},"star/cp928":{name:"Greek",languages:["el"],extends:"cp437",value:[,,,,,,,,,,[160,8216,8217,163,65533,65533,166,167,168,169,65533,171,172,173,65533,8213],[176,177,178,179,900,901,902,183,904,905,906,187,908,189,910,911],[912,913,914,915,916,917,918,919,920,921,922,923,924,925,926,927],[928,929,65533,931,932,933,934,935,936,937,938,939,940,941,942,943],[944,945,946,947,948,949,950,951,952,953,954,955,956,957,958,959],[960,961,962,963,964,965,966,967,968,969,970,971,972,973,974,65533]]},"bixolon/cp866":{name:"Cyrillic 2 (modified with euro sign)",languages:["ru"],extends:"cp866",value:[,,,,,,,,,,,,,,,[,,,,9093,1055,8801,9824,8364,,,,,,,,]]},"bixolon/hebrew":{name:"Hebrew",languages:["he"],extends:"cp437",value:[,,,,,,,,,,[32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47],[48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63],[64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79],[80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95],[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503],[1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,123,124,125,126,,]]},"xprinter/hebrew":{name:"Hebrew (based on CP862 minus CP437)",languages:["he"],extends:"ascii",value:[,,,,,,,,[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503],[1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,,,,,,],,,,,,,]},"pos8360/hebrew":{name:"Hebrew (based on cp862 with repeated characters)",languages:["he"],extends:"cp862",value:[,,,,,,,,,,,,,,[1488,1489,1490,1491,1492,1493,1494,1495,1496,1497,1498,1499,1500,1501,1502,1503],[1504,1505,1506,1507,1508,1509,1510,1511,1512,1513,1514,,,,,,]]}},a={cp2001:"cp771",cp1119:"cp772",cp1118:"cp774",cp1162:"cp874",iso88591:"iso8859-1",iso88592:"iso8859-2",iso88597:"iso8859-7",iso885915:"iso8859-15"},n={en:"The quick brown fox jumps over the lazy dog.",jp:"イロハニホヘト チリヌルヲ ワカヨタレソ ツネナラム",pt:"O próximo vôo à noite sobre o Atlântico, põe freqüentemente o único médico.",fr:"Les naïfs ægithales hâtifs pondant à Noël où il gèle sont sûrs d'être déçus en voyant leurs drôles d'œufs abîmés.",sv:"Flygande bäckasiner söka strax hwila på mjuka tuvor.",dk:"Quizdeltagerne spiste jordbær med fløde",el:"ξεσκεπάζω την ψυχοφθόρα βδελυγμία",tr:"Pijamalı hasta, yağız şoföre çabucak güvendi.",ru:"Съешь же ещё этих мягких французских булок да выпей чаю",hu:"Árvíztűrő tükörfúrógép",pl:"Pchnąć w tę łódź jeża lub ośm skrzyń fig",cz:"Mohu jíst sklo, neublíží mi.",ar:"أنا قادر على أكل الزجاج و هذا لا يؤلمني.",et:"Ma võin klaasi süüa, see ei tee mulle midagi.",lt:"Aš galiu valgyti stiklą ir jis manęs nežeidžia.",bg:"Мога да ям стъкло, то не ми вреди.",is:"Ég get etið gler án þess að meiða mig.",he:"אני יכול לאכול זכוכית וזה לא מזיק לי.",fa:".من می توانم بدونِ احساس درد شيشه بخورم",uk:"Я можу їсти скло, і воно мені не зашкодить.",vi:"Tôi có thể ăn thủy tinh mà không hại gì.",kk:"қазақша",lv:"Es varu ēst stiklu, tas man nekaitē.",mt:"Nista' niekol il-ħġieġ u ma jagħmilli xejn.",th:"ฉันกินกระจกได้ แต่มันไม่ทำให้ฉันเจ็บ"};return class{static getEncodings(){return Object.keys(e)}static getEncoding(n){return void 0!==a[n]&&(n=a[n]),void 0===e[n]&&(n="ascii"),void 0===e[n].codepoints&&(e[n].codepoints=this.getCodepoints(n,!0)),structuredClone(e[n])}static getTestStrings(s){return void 0!==a[s]&&(s=a[s]),void 0!==e[s]&&void 0!==e[s].languages?e[s].languages.map((e=>({language:e,string:n[e]}))):[]}static supports(n){return void 0!==a[n]&&(n=a[n]),void 0!==e[n]}static encode(e,a){const n=new Uint8Array(e.length),s=this.getEncoding(a);for(let a=0;a<e.length;a++){const t=e.codePointAt(a),i=s.codepoints.findIndex((e=>e===t));n[a]=-1!==i?i:63}return n}static autoEncode(e,a){const n=[];let s,t=-1;for(let i=0;i<e.length;i++){const l=e.codePointAt(i);let u,g=0;if(!u&&s){const e=this.getEncoding(s).codepoints.findIndex((e=>e===l));-1!==e&&(u=s,g=e)}if(!u)for(let e=0;e<a.length;e++){const n=this.getEncoding(a[e]).codepoints.findIndex((e=>e===l));if(-1!==n){u=a[e],g=n;break}}u||(u=s||a[0],g=63),s!=u&&(s&&(n[t].bytes=new Uint8Array(n[t].bytes)),t++,n[t]={codepage:u,bytes:[]},s=u),n[t].bytes.push(g)}return s&&(n[t].bytes=new Uint8Array(n[t].bytes)),n}static getCodepoints(a,n){let s=new Array(256);if(n&&(s=void 0===e[a].extends?s.fill(65533):this.getEncoding(e[a].extends).codepoints),16===e[a].value.length){for(let n=0;n<16;n++)if("object"==typeof e[a].value[n])for(let t=0;t<16;t++)"number"==typeof e[a].value[n][t]&&(s[16*n+t]=e[a].value[n][t])}else{const n=e[a].offset||0;for(let t=0;t<e[a].value.length;t++)"number"==typeof e[a].value[t]&&(s[n+t]=e[a].value[t])}return s}}}));
//# sourceMappingURL=codepage-encoder.umd.js.map
