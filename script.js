// EMBEDDED DATA
const TEAMS_DATA = [
  {
    "name": "Argentina",
    "rank": 1,
    "points": 1876.118331,
    "code": "ARG"
  },
  {
    "name": "Spain",
    "rank": 2,
    "points": 1873.013187,
    "code": "ESP"
  },
  {
    "name": "France",
    "rank": 3,
    "points": 1869.428449,
    "code": "FRA"
  },
  {
    "name": "England",
    "rank": 4,
    "points": 1827.048678,
    "code": "ENG"
  },
  {
    "name": "Portugal",
    "rank": 5,
    "points": 1766.177547,
    "code": "POR"
  },
  {
    "name": "Brazil",
    "rank": 6,
    "points": 1765.856297,
    "code": "BRA"
  },
  {
    "name": "Morocco",
    "rank": 7,
    "points": 1755.100232,
    "code": "MAR"
  },
  {
    "name": "Netherlands",
    "rank": 8,
    "points": 1751.097835,
    "code": "NED"
  },
  {
    "name": "Belgium",
    "rank": 9,
    "points": 1742.235945,
    "code": "BEL"
  },
  {
    "name": "Germany",
    "rank": 10,
    "points": 1735.771984,
    "code": "GER"
  },
  {
    "name": "Croatia",
    "rank": 11,
    "points": 1714.865572,
    "code": "CRO"
  },
  {
    "name": "Italy",
    "rank": 12,
    "points": 1704.733836,
    "code": "ITA"
  },
  {
    "name": "Colombia",
    "rank": 13,
    "points": 1698.351858,
    "code": "COL"
  },
  {
    "name": "Mexico",
    "rank": 14,
    "points": 1687.481759,
    "code": "MEX"
  },
  {
    "name": "Senegal",
    "rank": 15,
    "points": 1686.412769,
    "code": "SEN"
  },
  {
    "name": "Uruguay",
    "rank": 16,
    "points": 1673.068603,
    "code": "URU"
  },
  {
    "name": "USA",
    "rank": 17,
    "points": 1671.2341,
    "code": "USA"
  },
  {
    "name": "Japan",
    "rank": 18,
    "points": 1661.576187,
    "code": "JPN"
  },
  {
    "name": "Switzerland",
    "rank": 19,
    "points": 1650.064179,
    "code": "SUI"
  },
  {
    "name": "IR Iran",
    "rank": 20,
    "points": 1619.58163,
    "code": "IRN"
  },
  {
    "name": "Denmark",
    "rank": 21,
    "points": 1619.474248,
    "code": "DEN"
  },
  {
    "name": "Türkiye",
    "rank": 22,
    "points": 1605.730921,
    "code": "TUR"
  },
  {
    "name": "Ecuador",
    "rank": 23,
    "points": 1598.51582,
    "code": "ECU"
  },
  {
    "name": "Austria",
    "rank": 24,
    "points": 1597.404087,
    "code": "AUT"
  },
  {
    "name": "Korea Republic",
    "rank": 25,
    "points": 1591.630886,
    "code": "KOR"
  },
  {
    "name": "Nigeria",
    "rank": 26,
    "points": 1586.688586,
    "code": "NGA"
  },
  {
    "name": "Australia",
    "rank": 27,
    "points": 1579.34264,
    "code": "AUS"
  },
  {
    "name": "Algeria",
    "rank": 28,
    "points": 1571.033293,
    "code": "ALG"
  },
  {
    "name": "Egypt",
    "rank": 29,
    "points": 1562.367246,
    "code": "EGY"
  },
  {
    "name": "Canada",
    "rank": 30,
    "points": 1559.479301,
    "code": "CAN"
  },
  {
    "name": "Norway",
    "rank": 31,
    "points": 1557.437664,
    "code": "NOR"
  },
  {
    "name": "Ukraine",
    "rank": 32,
    "points": 1549.287173,
    "code": "UKR"
  },
  {
    "name": "Côte d'Ivoire",
    "rank": 33,
    "points": 1540.869533,
    "code": "CIV"
  },
  {
    "name": "Panama",
    "rank": 34,
    "points": 1539.155509,
    "code": "PAN"
  },
  {
    "name": "Russia",
    "rank": 35,
    "points": 1527.237131,
    "code": "RUS"
  },
  {
    "name": "Poland",
    "rank": 36,
    "points": 1526.183359,
    "code": "POL"
  },
  {
    "name": "Wales",
    "rank": 37,
    "points": 1516.946629,
    "code": "WAL"
  },
  {
    "name": "Sweden",
    "rank": 38,
    "points": 1509.785392,
    "code": "SWE"
  },
  {
    "name": "Czechia",
    "rank": 39,
    "points": 1505.737856,
    "code": "CZE"
  },
  {
    "name": "Paraguay",
    "rank": 40,
    "points": 1505.349689,
    "code": "PAR"
  },
  {
    "name": "Hungary",
    "rank": 41,
    "points": 1504.135797,
    "code": "HUN"
  },
  {
    "name": "Scotland",
    "rank": 42,
    "points": 1503.34027,
    "code": "SCO"
  },
  {
    "name": "Serbia",
    "rank": 43,
    "points": 1502.133186,
    "code": "SRB"
  },
  {
    "name": "Cameroon",
    "rank": 44,
    "points": 1481.235245,
    "code": "CMR"
  },
  {
    "name": "Congo DR",
    "rank": 45,
    "points": 1479.684122,
    "code": "COD"
  },
  {
    "name": "Tunisia",
    "rank": 46,
    "points": 1476.405088,
    "code": "TUN"
  },
  {
    "name": "Slovakia",
    "rank": 47,
    "points": 1473.660727,
    "code": "SVK"
  },
  {
    "name": "Greece",
    "rank": 48,
    "points": 1473.187305,
    "code": "GRE"
  },
  {
    "name": "Venezuela",
    "rank": 49,
    "points": 1464.303811,
    "code": "VEN"
  },
  {
    "name": "Uzbekistan",
    "rank": 50,
    "points": 1461.208132,
    "code": "UZB"
  },
  {
    "name": "Peru",
    "rank": 51,
    "points": 1459.390555,
    "code": "PER"
  },
  {
    "name": "Costa Rica",
    "rank": 52,
    "points": 1457.00228,
    "code": "CRC"
  },
  {
    "name": "Romania",
    "rank": 53,
    "points": 1455.894657,
    "code": "ROU"
  },
  {
    "name": "Mali",
    "rank": 54,
    "points": 1455.586659,
    "code": "MLI"
  },
  {
    "name": "Chile",
    "rank": 55,
    "points": 1452.939983,
    "code": "CHI"
  },
  {
    "name": "Iraq",
    "rank": 56,
    "points": 1451.153466,
    "code": "IRQ"
  },
  {
    "name": "Qatar",
    "rank": 57,
    "points": 1450.307729,
    "code": "QAT"
  },
  {
    "name": "Republic of Ireland",
    "rank": 58,
    "points": 1441.096901,
    "code": "IRL"
  },
  {
    "name": "Slovenia",
    "rank": 59,
    "points": 1441.087158,
    "code": "SVN"
  },
  {
    "name": "South Africa",
    "rank": 60,
    "points": 1428.379282,
    "code": "RSA"
  },
  {
    "name": "Saudi Arabia",
    "rank": 61,
    "points": 1421.538339,
    "code": "KSA"
  },
  {
    "name": "Burkina Faso",
    "rank": 62,
    "points": 1408.541965,
    "code": "BFA"
  },
  {
    "name": "Jordan",
    "rank": 63,
    "points": 1387.738222,
    "code": "JOR"
  },
  {
    "name": "Bosnia and Herzegovina",
    "rank": 64,
    "points": 1387.215771,
    "code": "BIH"
  },
  {
    "name": "Honduras",
    "rank": 65,
    "points": 1378.970301,
    "code": "HON"
  },
  {
    "name": "Albania",
    "rank": 66,
    "points": 1376.033234,
    "code": "ALB"
  },
  {
    "name": "Cabo Verde",
    "rank": 67,
    "points": 1371.10798,
    "code": "CPV"
  },
  {
    "name": "United Arab Emirates",
    "rank": 68,
    "points": 1370.469434,
    "code": "UAE"
  },
  {
    "name": "North Macedonia",
    "rank": 69,
    "points": 1369.159317,
    "code": "MKD"
  },
  {
    "name": "Northern Ireland",
    "rank": 70,
    "points": 1366.564198,
    "code": "NIR"
  },
  {
    "name": "Jamaica",
    "rank": 71,
    "points": 1357.840144,
    "code": "JAM"
  },
  {
    "name": "Georgia",
    "rank": 72,
    "points": 1355.261687,
    "code": "GEO"
  },
  {
    "name": "Ghana",
    "rank": 73,
    "points": 1346.881205,
    "code": "GHA"
  },
  {
    "name": "Iceland",
    "rank": 74,
    "points": 1343.920201,
    "code": "ISL"
  },
  {
    "name": "Finland",
    "rank": 75,
    "points": 1341.922408,
    "code": "FIN"
  },
  {
    "name": "Israel",
    "rank": 76,
    "points": 1333.904007,
    "code": "ISR"
  },
  {
    "name": "Bolivia",
    "rank": 77,
    "points": 1325.995377,
    "code": "BOL"
  },
  {
    "name": "Kosovo",
    "rank": 78,
    "points": 1319.120924,
    "code": "KOS"
  },
  {
    "name": "Oman",
    "rank": 79,
    "points": 1306.901717,
    "code": "OMA"
  },
  {
    "name": "Montenegro",
    "rank": 80,
    "points": 1301.977191,
    "code": "MNE"
  },
  {
    "name": "Guinea",
    "rank": 81,
    "points": 1295.598845,
    "code": "GUI"
  },
  {
    "name": "Curaçao",
    "rank": 82,
    "points": 1294.76909,
    "code": "CUW"
  },
  {
    "name": "Haiti",
    "rank": 83,
    "points": 1293.096585,
    "code": "HAI"
  },
  {
    "name": "Syria",
    "rank": 84,
    "points": 1283.051902,
    "code": "SYR"
  },
  {
    "name": "New Zealand",
    "rank": 85,
    "points": 1275.581062,
    "code": "NZL"
  },
  {
    "name": "Gabon",
    "rank": 86,
    "points": 1272.508139,
    "code": "GAB"
  },
  {
    "name": "Bulgaria",
    "rank": 87,
    "points": 1271.683325,
    "code": "BUL"
  },
  {
    "name": "Uganda",
    "rank": 88,
    "points": 1264.090591,
    "code": "UGA"
  },
  {
    "name": "Angola",
    "rank": 89,
    "points": 1262.219698,
    "code": "ANG"
  },
  {
    "name": "Benin",
    "rank": 90,
    "points": 1258.224853,
    "code": "BEN"
  },
  {
    "name": "Zambia",
    "rank": 91,
    "points": 1255.821846,
    "code": "ZAM"
  },
  {
    "name": "China PR",
    "rank": 92,
    "points": 1254.848285,
    "code": "CHN"
  },
  {
    "name": "Bahrain",
    "rank": 93,
    "points": 1254.406799,
    "code": "BHR"
  },
  {
    "name": "Thailand",
    "rank": 94,
    "points": 1250.763879,
    "code": "THA"
  },
  {
    "name": "Palestine",
    "rank": 95,
    "points": 1244.216499,
    "code": "PLE"
  },
  {
    "name": "Belarus",
    "rank": 96,
    "points": 1241.324607,
    "code": "BLR"
  },
  {
    "name": "Guatemala",
    "rank": 97,
    "points": 1238.74375,
    "code": "GUA"
  },
  {
    "name": "Luxembourg",
    "rank": 98,
    "points": 1232.81815,
    "code": "LUX"
  },
  {
    "name": "Vietnam",
    "rank": 99,
    "points": 1225.67943,
    "code": "VIE"
  },
  {
    "name": "Tajikistan",
    "rank": 100,
    "points": 1225.518979,
    "code": "TJK"
  },
  {
    "name": "El Salvador",
    "rank": 101,
    "points": 1225.344607,
    "code": "SLV"
  },
  {
    "name": "Mozambique",
    "rank": 102,
    "points": 1224.311107,
    "code": "MOZ"
  },
  {
    "name": "Trinidad and Tobago",
    "rank": 103,
    "points": 1221.951833,
    "code": "TRI"
  },
  {
    "name": "Madagascar",
    "rank": 104,
    "points": 1202.689766,
    "code": "MAD"
  },
  {
    "name": "Equatorial Guinea",
    "rank": 105,
    "points": 1195.197081,
    "code": "EQG"
  },
  {
    "name": "Kyrgyz Republic",
    "rank": 106,
    "points": 1191.655395,
    "code": "KGZ"
  },
  {
    "name": "Armenia",
    "rank": 107,
    "points": 1191.334973,
    "code": "ARM"
  },
  {
    "name": "Comoros",
    "rank": 108,
    "points": 1187.9109,
    "code": "COM"
  },
  {
    "name": "Kenya",
    "rank": 109,
    "points": 1185.076631,
    "code": "KEN"
  },
  {
    "name": "Kazakhstan",
    "rank": 110,
    "points": 1183.038315,
    "code": "KAZ"
  },
  {
    "name": "Libya",
    "rank": 111,
    "points": 1182.081264,
    "code": "LBY"
  },
  {
    "name": "Niger",
    "rank": 112,
    "points": 1180.416678,
    "code": "NIG"
  },
  {
    "name": "Tanzania",
    "rank": 113,
    "points": 1180.267847,
    "code": "TAN"
  },
  {
    "name": "Lebanon",
    "rank": 114,
    "points": 1172.215162,
    "code": "LBN"
  },
  {
    "name": "Mauritania",
    "rank": 115,
    "points": 1171.596379,
    "code": "MTN"
  },
  {
    "name": "The Gambia",
    "rank": 116,
    "points": 1159.637808,
    "code": "GAM"
  },
  {
    "name": "Sudan",
    "rank": 117,
    "points": 1157.223901,
    "code": "SDN"
  },
  {
    "name": "Sierra Leone",
    "rank": 118,
    "points": 1153.309176,
    "code": "SLE"
  },
  {
    "name": "Indonesia",
    "rank": 119,
    "points": 1151.448115,
    "code": "IDN"
  },
  {
    "name": "Korea DPR",
    "rank": 120,
    "points": 1151.052136,
    "code": "PRK"
  },
  {
    "name": "Namibia",
    "rank": 121,
    "points": 1148.839695,
    "code": "NAM"
  },
  {
    "name": "Togo",
    "rank": 122,
    "points": 1146.703618,
    "code": "TOG"
  },
  {
    "name": "Cyprus",
    "rank": 123,
    "points": 1133.247165,
    "code": "CYP"
  },
  {
    "name": "Suriname",
    "rank": 124,
    "points": 1132.425895,
    "code": "SUR"
  },
  {
    "name": "Faroe Islands",
    "rank": 125,
    "points": 1131.984479,
    "code": "FRO"
  },
  {
    "name": "Azerbaijan",
    "rank": 126,
    "points": 1130.263211,
    "code": "AZE"
  },
  {
    "name": "Rwanda",
    "rank": 127,
    "points": 1126.622275,
    "code": "RWA"
  },
  {
    "name": "Estonia",
    "rank": 128,
    "points": 1126.256951,
    "code": "EST"
  },
  {
    "name": "Malawi",
    "rank": 129,
    "points": 1122.488082,
    "code": "MWI"
  },
  {
    "name": "Zimbabwe",
    "rank": 130,
    "points": 1119.77695,
    "code": "ZIM"
  },
  {
    "name": "Nicaragua",
    "rank": 131,
    "points": 1114.634184,
    "code": "NCA"
  },
  {
    "name": "Guinea-Bissau",
    "rank": 132,
    "points": 1108.381553,
    "code": "GNB"
  },
  {
    "name": "Kuwait",
    "rank": 133,
    "points": 1106.474587,
    "code": "KUW"
  },
  {
    "name": "Congo",
    "rank": 134,
    "points": 1105.964661,
    "code": "CGO"
  },
  {
    "name": "Philippines",
    "rank": 135,
    "points": 1096.72639,
    "code": "PHI"
  },
  {
    "name": "Latvia",
    "rank": 136,
    "points": 1090.261315,
    "code": "LVA"
  },
  {
    "name": "Malaysia",
    "rank": 137,
    "points": 1086.218087,
    "code": "MAS"
  },
  {
    "name": "Central African Republic",
    "rank": 138,
    "points": 1084.180103,
    "code": "CTA"
  },
  {
    "name": "India",
    "rank": 139,
    "points": 1083.601894,
    "code": "IND"
  },
  {
    "name": "Turkmenistan",
    "rank": 140,
    "points": 1078.652346,
    "code": "TKM"
  },
  {
    "name": "Burundi",
    "rank": 141,
    "points": 1078.009468,
    "code": "BDI"
  },
  {
    "name": "Ethiopia",
    "rank": 142,
    "points": 1077.086308,
    "code": "ETH"
  },
  {
    "name": "Dominican Republic",
    "rank": 143,
    "points": 1076.498501,
    "code": "DOM"
  },
  {
    "name": "Liberia",
    "rank": 144,
    "points": 1074.686684,
    "code": "LBR"
  },
  {
    "name": "Yemen",
    "rank": 145,
    "points": 1065.236881,
    "code": "YEM"
  },
  {
    "name": "Lesotho",
    "rank": 146,
    "points": 1064.285838,
    "code": "LES"
  },
  {
    "name": "Botswana",
    "rank": 147,
    "points": 1063.631368,
    "code": "BOT"
  },
  {
    "name": "Lithuania",
    "rank": 148,
    "points": 1061.22966,
    "code": "LTU"
  },
  {
    "name": "Singapore",
    "rank": 149,
    "points": 1057.950212,
    "code": "SGP"
  },
  {
    "name": "Guyana",
    "rank": 150,
    "points": 1049.320241,
    "code": "GUY"
  },
  {
    "name": "New Caledonia",
    "rank": 151,
    "points": 1036.952253,
    "code": "NCL"
  },
  {
    "name": "St Kitts and Nevis",
    "rank": 152,
    "points": 1036.334924,
    "code": "SKN"
  },
  {
    "name": "Solomon Islands",
    "rank": 153,
    "points": 1031.894156,
    "code": "SOL"
  },
  {
    "name": "Hong Kong, China",
    "rank": 154,
    "points": 1030.240953,
    "code": "HKG"
  },
  {
    "name": "Fiji",
    "rank": 155,
    "points": 1024.384218,
    "code": "FIJ"
  },
  {
    "name": "Puerto Rico",
    "rank": 156,
    "points": 1024.297312,
    "code": "PUR"
  },
  {
    "name": "Tahiti",
    "rank": 157,
    "points": 1019.036032,
    "code": "TAH"
  },
  {
    "name": "Myanmar",
    "rank": 158,
    "points": 1015.138408,
    "code": "MYA"
  },
  {
    "name": "Moldova",
    "rank": 159,
    "points": 1006.537824,
    "code": "MDA"
  },
  {
    "name": "Vanuatu",
    "rank": 160,
    "points": 1002.318941,
    "code": "VAN"
  },
  {
    "name": "Malta",
    "rank": 161,
    "points": 992.793497,
    "code": "MLT"
  },
  {
    "name": "Antigua and Barbuda",
    "rank": 162,
    "points": 986.584414,
    "code": "ATG"
  },
  {
    "name": "Grenada",
    "rank": 163,
    "points": 981.823973,
    "code": "GRN"
  },
  {
    "name": "Cuba",
    "rank": 164,
    "points": 981.423455,
    "code": "CUB"
  },
  {
    "name": "Eswatini",
    "rank": 165,
    "points": 979.013939,
    "code": "SWZ"
  },
  {
    "name": "St Lucia",
    "rank": 166,
    "points": 976.708996,
    "code": "LCA"
  },
  {
    "name": "Bermuda",
    "rank": 167,
    "points": 975.053746,
    "code": "BER"
  },
  {
    "name": "Papua New Guinea",
    "rank": 168,
    "points": 974.9011,
    "code": "PNG"
  },
  {
    "name": "Afghanistan",
    "rank": 169,
    "points": 971.202635,
    "code": "AFG"
  },
  {
    "name": "South Sudan",
    "rank": 170,
    "points": 970.944527,
    "code": "SSD"
  },
  {
    "name": "St Vincent and the Grenadines",
    "rank": 171,
    "points": 968.269638,
    "code": "VIN"
  },
  {
    "name": "Andorra",
    "rank": 172,
    "points": 946.429826,
    "code": "AND"
  },
  {
    "name": "Maldives",
    "rank": 173,
    "points": 943.917901,
    "code": "MDV"
  },
  {
    "name": "Chinese Taipei",
    "rank": 174,
    "points": 923.782643,
    "code": "TPE"
  },
  {
    "name": "Montserrat",
    "rank": 175,
    "points": 916.75251,
    "code": "MSR"
  },
  {
    "name": "Cambodia",
    "rank": 176,
    "points": 916.241304,
    "code": "CAM"
  },
  {
    "name": "Nepal",
    "rank": 177,
    "points": 914.541224,
    "code": "NEP"
  },
  {
    "name": "Mauritius",
    "rank": 178,
    "points": 911.487501,
    "code": "MRI"
  },
  {
    "name": "Barbados",
    "rank": 179,
    "points": 909.893208,
    "code": "BRB"
  },
  {
    "name": "Belize",
    "rank": 180,
    "points": 907.001211,
    "code": "BLZ"
  },
  {
    "name": "Bangladesh",
    "rank": 181,
    "points": 902.92965,
    "code": "BAN"
  },
  {
    "name": "Dominica",
    "rank": 182,
    "points": 897.686437,
    "code": "DMA"
  },
  {
    "name": "Chad",
    "rank": 183,
    "points": 896.852819,
    "code": "CHA"
  },
  {
    "name": "Eritrea",
    "rank": 184,
    "points": 887.063341,
    "code": "ERI"
  },
  {
    "name": "Laos",
    "rank": 185,
    "points": 885.028891,
    "code": "LAO"
  },
  {
    "name": "Cook Islands",
    "rank": 186,
    "points": 877.534995,
    "code": "COK"
  },
  {
    "name": "Samoa",
    "rank": 187,
    "points": 876.407812,
    "code": "SAM"
  },
  {
    "name": "Bhutan",
    "rank": 188,
    "points": 875.845061,
    "code": "BHU"
  },
  {
    "name": "Aruba",
    "rank": 189,
    "points": 875.61115,
    "code": "ARU"
  },
  {
    "name": "Mongolia",
    "rank": 190,
    "points": 874.469074,
    "code": "MNG"
  },
  {
    "name": "Sri Lanka",
    "rank": 191,
    "points": 871.820215,
    "code": "SRI"
  },
  {
    "name": "American Samoa",
    "rank": 192,
    "points": 871.612081,
    "code": "ASA"
  },
  {
    "name": "Brunei Darussalam",
    "rank": 193,
    "points": 863.09176,
    "code": "BRU"
  },
  {
    "name": "Macau",
    "rank": 194,
    "points": 858.03342,
    "code": "MAC"
  },
  {
    "name": "São Tomé and Príncipe",
    "rank": 195,
    "points": 855.438666,
    "code": "STP"
  },
  {
    "name": "Djibouti",
    "rank": 196,
    "points": 853.581786,
    "code": "DJI"
  },
  {
    "name": "Cayman Islands",
    "rank": 197,
    "points": 850.061011,
    "code": "CAY"
  },
  {
    "name": "Somalia",
    "rank": 198,
    "points": 839.169697,
    "code": "SOM"
  },
  {
    "name": "Pakistan",
    "rank": 199,
    "points": 837.151593,
    "code": "PAK"
  },
  {
    "name": "Tonga",
    "rank": 200,
    "points": 835.64241,
    "code": "TGA"
  },
  {
    "name": "Timor-Leste",
    "rank": 201,
    "points": 825.639984,
    "code": "TLS"
  },
  {
    "name": "Gibraltar",
    "rank": 202,
    "points": 820.260818,
    "code": "GIB"
  },
  {
    "name": "Guam",
    "rank": 203,
    "points": 819.540575,
    "code": "GUM"
  },
  {
    "name": "Seychelles",
    "rank": 204,
    "points": 804.161509,
    "code": "SEY"
  },
  {
    "name": "Turks and Caicos Islands",
    "rank": 205,
    "points": 803.980015,
    "code": "TCA"
  },
  {
    "name": "Liechtenstein",
    "rank": 206,
    "points": 797.701009,
    "code": "LIE"
  },
  {
    "name": "Bahamas",
    "rank": 207,
    "points": 786.816217,
    "code": "BAH"
  },
  {
    "name": "US Virgin Islands",
    "rank": 208,
    "points": 779.764266,
    "code": "VIR"
  },
  {
    "name": "British Virgin Islands",
    "rank": 209,
    "points": 777.405734,
    "code": "VGB"
  },
  {
    "name": "Anguilla",
    "rank": 210,
    "points": 760.251852,
    "code": "AIA"
  },
  {
    "name": "San Marino",
    "rank": 211,
    "points": 722.933728,
    "code": "SMR"
  }
];
let MODEL_PARAMETERS = null;

async function loadModelParameters() {
    try {
        const resp = await fetch('data_copy/final_model_parameters.json');
        if (!resp.ok) throw new Error("Status code: " + resp.status);
        MODEL_PARAMETERS = await resp.json();
        console.log("Model parameters loaded dynamically:", MODEL_PARAMETERS);
    } catch (e) {
        console.error("Error loading model parameters dynamically, using fallback:", e);
        MODEL_PARAMETERS = {
            dixon_coles_teams: { alpha: {}, beta: {}, gamma: 0, rho: 0 },
            h2h_database_2026: {},
            recent_form_2026: {},
            ensemble_weights: { dixon_coles: 0.56, rolling_form: 0.44 }
        };
    }
}


// Reigning Champion for 2026 matches
const REIGNING_CHAMPION = "Argentina";

// State variables
let selectedVenue = 1; // 1 = Neutre, 2 = Chez T1, 3 = Chez T2
let isSimulating = false;
let stopSimulation = false;
let simFinished = false;
let simulationInterval = null;
let currentSimulationId = 0;
let lastConvergenceHistory = [];
let lastNumSims = 1000;

// DOM Elements
const selectTeam1 = document.getElementById('select-team1');
const selectTeam2 = document.getElementById('select-team2');
const selectModel = document.getElementById('select-model');
const statsTeam1 = document.getElementById('team1-stats');
const statsTeam2 = document.getElementById('team2-stats');

const btnNeutre = document.getElementById('btn-neutre');
const btnT1Host = document.getElementById('btn-t1-host');
const btnT2Host = document.getElementById('btn-t2-host');

const dispTeam1 = document.getElementById('disp-team1');
const dispTeam2 = document.getElementById('disp-team2');
const dispRank1 = document.getElementById('disp-rank1');
const dispRank2 = document.getElementById('disp-rank2');

const goalsT1 = document.getElementById('goals-team1');
const goalsT2 = document.getElementById('goals-team2');

const simCounter = document.getElementById('sim-counter');
const simPercentage = document.getElementById('sim-percentage');
const progressFill = document.getElementById('progress-fill');

const pctWin1 = document.getElementById('pct-win1');
const pctDraw = document.getElementById('pct-draw');
const pctWin2 = document.getElementById('pct-win2');

const fillWin1 = document.getElementById('fill-win1');
const fillDraw = document.getElementById('fill-draw');
const fillWin2 = document.getElementById('fill-win2');

const statLambda1 = document.getElementById('stat-lambda1');
const statLambda2 = document.getElementById('stat-lambda2');

const matrixGrid = document.getElementById('matrix-grid');

// H2H DOM Elements
const h2hHistoryPanel = document.getElementById('h2h-history-panel');
const h2hHeader = document.getElementById('h2h-header');
const h2hContent = document.getElementById('h2h-content');
const h2hToggleIcon = document.getElementById('h2h-toggle-icon');
const h2hHistoryTbody = document.getElementById('h2h-history-tbody');

const btnRun = document.getElementById('btn-run');
const btnReset = document.getElementById('btn-reset');
const liveClock = document.getElementById('live-clock');

// Populate Dropdowns
function initDropdowns() {
    const selectBettingT1 = document.getElementById('select-betting-t1');
    const selectBettingT2 = document.getElementById('select-betting-t2');

    TEAMS_DATA.forEach(team => {
        const opt1 = document.createElement('option');
        opt1.value = team.name;
        opt1.textContent = `${team.name} (#${team.rank})`;
        selectTeam1.appendChild(opt1);
        
        const opt2 = document.createElement('option');
        opt2.value = team.name;
        opt2.textContent = `${team.name} (#${team.rank})`;
        selectTeam2.appendChild(opt2);

        if (selectBettingT1) {
            const optB1 = document.createElement('option');
            optB1.value = team.name;
            optB1.textContent = `${team.name} (#${team.rank})`;
            selectBettingT1.appendChild(optB1);
        }
        if (selectBettingT2) {
            const optB2 = document.createElement('option');
            optB2.value = team.name;
            optB2.textContent = `${team.name} (#${team.rank})`;
            selectBettingT2.appendChild(optB2);
        }
    });

    selectTeam1.value = "France";
    selectTeam2.value = "Brazil";
    if (selectBettingT1) selectBettingT1.value = "France";
    if (selectBettingT2) selectBettingT2.value = "Brazil";
    
    updateTeamDetails();
    resetBoard();
}

function updateTeamDetails() {
    const t1 = getTeamStats(selectTeam1.value);
    const t2 = getTeamStats(selectTeam2.value);
    
    if (t1) {
        statsTeam1.textContent = `Rang: #${t1.rank} | Points: ${t1.points.toFixed(1)} ${t1.name === REIGNING_CHAMPION ? '(Tenant du Titre)' : ''}`;
        dispTeam1.querySelector('.team-name').textContent = t1.name;
        dispRank1.textContent = `#${t1.rank}`;
    }
    
    if (t2) {
        statsTeam2.textContent = `Rang: #${t2.rank} | Points: ${t2.points.toFixed(1)} ${t2.name === REIGNING_CHAMPION ? '(Tenant du Titre)' : ''}`;
        dispTeam2.querySelector('.team-name').textContent = t2.name;
        dispRank2.textContent = `#${t2.rank}`;
    }
    
    // Auto refresh H2H History list if expanded
    if (h2hContent && h2hContent.style.display === 'block') {
        updateH2HHistory();
    } else if (h2hHistoryTbody) {
        h2hHistoryTbody.innerHTML = '<tr><td colspan="4" class="terminal-msg">Veuillez étendre le panneau ci-dessus pour charger l\'historique H2H.</td></tr>';
    }
}

function getTeamStats(name) {
    return TEAMS_DATA.find(t => t.name === name) || null;
}

// Events
selectTeam1.addEventListener('change', () => {
    if (selectTeam1.value === selectTeam2.value) {
        const index = TEAMS_DATA.findIndex(t => t.name === selectTeam1.value);
        const nextIndex = (index + 1) % TEAMS_DATA.length;
        selectTeam2.value = TEAMS_DATA[nextIndex].name;
    }
    updateTeamDetails();
    resetBoard();
});

selectTeam2.addEventListener('change', () => {
    if (selectTeam1.value === selectTeam2.value) {
        const index = TEAMS_DATA.findIndex(t => t.name === selectTeam2.value);
        const nextIndex = (index + 1) % TEAMS_DATA.length;
        selectTeam1.value = TEAMS_DATA[nextIndex].name;
    }
    updateTeamDetails();
    resetBoard();
});

selectModel.addEventListener('change', () => {
    resetBoard();
});

// Venue Selection Toggles
const venueButtons = [btnNeutre, btnT1Host, btnT2Host];
venueButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        if (isSimulating) return;
        venueButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedVenue = parseInt(btn.getAttribute('data-value'));
        resetBoard();
    });
});

// Dixon-Coles Correction factor functions
function getDixonColesTau(x, y, l, m, rho) {
    if (x === 0 && y === 0) return 1.0 - l * m * rho;
    if (x === 1 && y === 0) return 1.0 + m * rho;
    if (x === 0 && y === 1) return 1.0 + l * rho;
    if (x === 1 && y === 1) return 1.0 - rho;
    return 1.0;
}

function sampleDixonColes(lambda_1, lambda_2, rho) {
    let attempts = 0;
    while (attempts < 50) {
        const g1 = samplePoisson(lambda_1);
        const g2 = samplePoisson(lambda_2);
        const tau = getDixonColesTau(g1, g2, lambda_1, lambda_2, rho);
        
        const u = Math.random() * 1.5;
        if (u < tau) {
            return [g1, g2];
        }
        attempts++;
    }
    return [samplePoisson(lambda_1), samplePoisson(lambda_2)]; // Fallback
}

// Dixon Coles Team Specific lookups
function getTeamDCParams(team) {
    const tData = MODEL_PARAMETERS.dixon_coles_teams.teams[team.name];
    if (tData) {
        return { att: tData.att, def: tData.def };
    }
    const ptsRatio = team.points / 1600.0;
    return {
        att: Math.max(0.3, Math.min(2.5, ptsRatio)),
        def: Math.max(0.3, Math.min(2.5, 1.0 / ptsRatio))
    };
}

// Get H2H stats between two teams from the embedded h2h_database_2026
function getH2HStats(t1Name, t2Name) {
    const sorted = [t1Name, t2Name].sort();
    const key = sorted[0] + "_" + sorted[1];
    const h2h = MODEL_PARAMETERS.h2h_database_2026 ? MODEL_PARAMETERS.h2h_database_2026[key] : null;
    
    const isValValid = (val) => val !== undefined && val !== null && !isNaN(val);
    
    if (h2h) {
        if (t1Name === sorted[0]) {
            const g1 = isValValid(h2h.goals_1) ? h2h.goals_1 : 1.2;
            const g2 = isValValid(h2h.goals_2) ? h2h.goals_2 : 1.2;
            const x1 = isValValid(h2h.xg_1) ? h2h.xg_1 : 1.2;
            const x2 = isValValid(h2h.xg_2) ? h2h.xg_2 : 1.2;
            return {
                goals_scored: g1,
                goals_conceded: g2,
                xg_scored: x1,
                xg_conceded: x2
            };
        } else {
            const g1 = isValValid(h2h.goals_2) ? h2h.goals_2 : 1.2;
            const g2 = isValValid(h2h.goals_1) ? h2h.goals_1 : 1.2;
            const x1 = isValValid(h2h.xg_2) ? h2h.xg_2 : 1.2;
            const x2 = isValValid(h2h.xg_1) ? h2h.xg_1 : 1.2;
            return {
                goals_scored: g1,
                goals_conceded: g2,
                xg_scored: x1,
                xg_conceded: x2
            };
        }
    }
    // Default fallback: 1.2 goals/xG
    return {
        goals_scored: 1.2,
        goals_conceded: 1.2,
        xg_scored: 1.2,
        xg_conceded: 1.2
    };
}

// Predict stats using selected model
function predictMatchStats(t1, t2, venue, modelName) {
    const t1_host = venue === 2 ? 1 : 0;
    const t2_host = venue === 3 ? 1 : 0;
    
    const pts_diff_1 = (t1.points - t2.points) / 100.0;
    const rnk_diff_1 = (t2.rank - t1.rank) / 10.0;
    
    const t1_champ = t1.name === REIGNING_CHAMPION ? 1 : 0;
    const t2_champ = t2.name === REIGNING_CHAMPION ? 1 : 0;
    
    // Regularization Prior based on FIFA points difference
    const prior_ratio = Math.exp((t1.points - t2.points) / 380.0);
    const dc_prior_1 = Math.pow(prior_ratio, 0.25);
    const dc_prior_2 = Math.pow(prior_ratio, -0.25);
    
    let lambda_1 = 0;
    let lambda_2 = 0;
    
    const rf1 = (MODEL_PARAMETERS.recent_form_2026 && MODEL_PARAMETERS.recent_form_2026[t1.name]) || { goals_scored: 1.2, goals_conceded: 1.2, xg_scored: 1.2, xg_conceded: 1.2 };
    const rf2 = (MODEL_PARAMETERS.recent_form_2026 && MODEL_PARAMETERS.recent_form_2026[t2.name]) || { goals_scored: 1.2, goals_conceded: 1.2, xg_scored: 1.2, xg_conceded: 1.2 };

    if (modelName === 'rolling_form') {
        const f1 = getH2HStats(t1.name, t2.name);
        const f2 = getH2HStats(t2.name, t1.name);
        
        const w = MODEL_PARAMETERS.rolling_form.weights;
        
        const X1 = [
            pts_diff_1, rnk_diff_1, t1_host, t2_host, t1_champ, t2_champ,
            f1.goals_scored, f1.goals_conceded, f1.xg_scored, f1.xg_conceded,
            rf1.goals_scored, rf2.goals_conceded
        ];
        const X2 = [
            -pts_diff_1, -rnk_diff_1, t2_host, t1_host, t2_champ, t1_champ,
            f2.goals_scored, f2.goals_conceded, f2.xg_scored, f2.xg_conceded,
            rf2.goals_scored, rf1.goals_conceded
        ];
        
        let z1 = w[0];
        let z2 = w[0];
        for (let i = 0; i < 12; i++) {
            z1 += X1[i] * w[i+1];
            z2 += X2[i] * w[i+1];
        }
        lambda_1 = Math.exp(Math.min(Math.max(z1, -10), 10));
        lambda_2 = Math.exp(Math.min(Math.max(z2, -10), 10));
    }
    else if (modelName === 'dixon_coles_teams') {
        const dc1 = getTeamDCParams(t1);
        const dc2 = getTeamDCParams(t2);
        const gamma = MODEL_PARAMETERS.dixon_coles_teams.gamma_host;
        
        // Incorporate regularization prior to Dixon-Coles forces
        lambda_1 = dc1.att * dc2.def * (t1_host ? gamma : 1.0) * dc_prior_1;
        lambda_2 = dc2.att * dc1.def * (t2_host ? gamma : 1.0) * dc_prior_2;
    }
    else if (modelName === 'mix_ensemble') {
        // Evaluate Dixon-Coles with Prior
        const dc1 = getTeamDCParams(t1);
        const dc2 = getTeamDCParams(t2);
        const gamma = MODEL_PARAMETERS.dixon_coles_teams.gamma_host;
        const lambda_1_dc = dc1.att * dc2.def * (t1_host ? gamma : 1.0) * dc_prior_1;
        const lambda_2_dc = dc2.att * dc1.def * (t2_host ? gamma : 1.0) * dc_prior_2;
        
        // Evaluate Rolling Form
        const f1 = getH2HStats(t1.name, t2.name);
        const f2 = getH2HStats(t2.name, t1.name);
        const w = MODEL_PARAMETERS.rolling_form.weights;
        const X1 = [
            pts_diff_1, rnk_diff_1, t1_host, t2_host, t1_champ, t2_champ,
            f1.goals_scored, f1.goals_conceded, f1.xg_scored, f1.xg_conceded,
            rf1.goals_scored, rf2.goals_conceded
        ];
        const X2 = [
            -pts_diff_1, -rnk_diff_1, t2_host, t1_host, t2_champ, t1_champ,
            f2.goals_scored, f2.goals_conceded, f2.xg_scored, f2.xg_conceded,
            rf2.goals_scored, rf1.goals_conceded
        ];
        let z1 = w[0];
        let z2 = w[0];
        for (let i = 0; i < 12; i++) {
            z1 += X1[i] * w[i+1];
            z2 += X2[i] * w[i+1];
        }
        const lambda_1_rf = Math.exp(Math.min(Math.max(z1, -10), 10));
        const lambda_2_rf = Math.exp(Math.min(Math.max(z2, -10), 10));
        
        // Dynamic Ensemble weight adjustment based on H2H match count completeness
        let w_dc = (MODEL_PARAMETERS.ensemble_weights && MODEL_PARAMETERS.ensemble_weights.dixon_coles) || 0.56;
        let w_rf = (MODEL_PARAMETERS.ensemble_weights && MODEL_PARAMETERS.ensemble_weights.rolling_form) || 0.44;
        
        if (f1.count === 0) {
            // No direct matchups: give more weight to general Dixon-Coles parameters
            w_dc = 0.75;
            w_rf = 0.25;
        } else if (f1.count >= 4) {
            // High direct matchup history: H2H is highly descriptive
            w_dc = 0.45;
            w_rf = 0.55;
        }
        
        lambda_1 = w_dc * lambda_1_dc + w_rf * lambda_1_rf;
        lambda_2 = w_dc * lambda_2_dc + w_rf * lambda_2_rf;
    }
    
    // Altitude Effect: Mexico host games (Azteca high-altitude stadium)
    const altitudeAccustomed = ["Mexico", "Colombia", "Ecuador"];
    if (venue === 2 && t1.name === "Mexico") {
        lambda_1 *= 1.06;
        if (!altitudeAccustomed.includes(t2.name)) {
            lambda_2 *= 0.92;
        }
    } else if (venue === 3 && t2.name === "Mexico") {
        lambda_2 *= 1.06;
        if (!altitudeAccustomed.includes(t1.name)) {
            lambda_1 *= 0.92;
        }
    }
    
    // Long-distance continental travel fatigue (Jetlag penalty)
    if (venue === 1) {
        const americasTeams = ["Argentina", "Paraguay", "United States", "Canada", "Brazil", "Haiti", "Uruguay", "Colombia", "Panama", "Ecuador", "Mexico"];
        if (!americasTeams.includes(t1.name)) {
            lambda_1 *= 0.985;
        }
        if (!americasTeams.includes(t2.name)) {
            lambda_2 *= 0.985;
        }
    }
    
    return { lambda_1, lambda_2 };
}

// Knuth Poisson random number sampler
function samplePoisson(lambda) {
    const L = Math.exp(-lambda);
    let k = 0;
    let p = 1.0;
    do {
        k++;
        p *= Math.random();
    } while (p > L);
    return k - 1;
}

// Matrix GUI Generation
function initMatrix() {
    matrixGrid.innerHTML = '';
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 6; c++) {
            const cell = document.createElement('div');
            cell.className = 'matrix-cell';
            cell.id = `cell-${r}-${c}`;
            
            const labelSpan = document.createElement('span');
            labelSpan.className = 'score-lbl';
            labelSpan.textContent = `${r}-${c}${r===5?'*':''}${c===5?'*':''}`;
            
            const pctSpan = document.createElement('span');
            pctSpan.className = 'score-pct';
            pctSpan.textContent = '0.0%';
            
            cell.appendChild(labelSpan);
            cell.appendChild(pctSpan);
            matrixGrid.appendChild(cell);
        }
    }
}

// ML Insights updates (Confidence and Double Chance)
function updateInsights(wins1, draws, wins2, currentSim) {
    if (currentSim === 0) {
        document.getElementById('val-confidence').textContent = '--%';
        const lblLevel = document.getElementById('lbl-confidence-level');
        lblLevel.textContent = '--';
        lblLevel.className = 'insight-level';
        document.getElementById('val-double-chance').textContent = '--';
        return;
    }
    
    const p1 = wins1 / currentSim;
    const pD = draws / currentSim;
    const p2 = wins2 / currentSim;
    
    const t1 = getTeamStats(selectTeam1.value);
    const t2 = getTeamStats(selectTeam2.value);
    
    if (!t1 || !t2) return;
    
    let confidenceVal = 0;
    let doubleChanceText = "--";
    
    const t1Code = t1.code || t1.name.substring(0, 3).toUpperCase();
    const t2Code = t2.code || t2.name.substring(0, 3).toUpperCase();
    
    if (p1 >= p2) {
        confidenceVal = p1 + pD;
        doubleChanceText = `${t1Code} OU NUL`;
    } else {
        confidenceVal = p2 + pD;
        doubleChanceText = `${t2Code} OU NUL`;
    }
    
    document.getElementById('val-confidence').textContent = `${(confidenceVal * 100).toFixed(1)}%`;
    document.getElementById('val-double-chance').textContent = doubleChanceText;
    
    const lblLevel = document.getElementById('lbl-confidence-level');
    lblLevel.className = 'insight-level';
    if (confidenceVal >= 0.75) {
        lblLevel.textContent = 'ÉLEVÉE';
        lblLevel.classList.add('level-high');
    } else if (confidenceVal >= 0.60) {
        lblLevel.textContent = 'MOYENNE';
        lblLevel.classList.add('level-medium');
    } else {
        lblLevel.textContent = 'FAIBLE';
        lblLevel.classList.add('level-low');
    }
}

function updateAnalyticalPreview() {
    const t1 = getTeamStats(selectTeam1.value);
    const t2 = getTeamStats(selectTeam2.value);
    if (!t1 || !t2) return;
    
    const modelName = selectModel.value;
    const stats_res = predictMatchStats(t1, t2, selectedVenue, modelName);
    const l1 = stats_res.lambda_1;
    const l2 = stats_res.lambda_2;
    
    // Simple Poisson analytical distribution for scores up to 8
    let p1 = 0;
    let pD = 0;
    let p2 = 0;
    
    const pmf1 = [];
    const pmf2 = [];
    for (let g = 0; g < 8; g++) {
        let fact = 1;
        for (let i = 2; i <= g; i++) fact *= i;
        pmf1.push((Math.pow(l1, g) * Math.exp(-l1)) / fact);
        pmf2.push((Math.pow(l2, g) * Math.exp(-l2)) / fact);
    }
    
    for (let g1 = 0; g1 < 8; g1++) {
        for (let g2 = 0; g2 < 8; g2++) {
            const pMatch = pmf1[g1] * pmf2[g2];
            if (g1 > g2) p1 += pMatch;
            else if (g1 === g2) pD += pMatch;
            else p2 += pMatch;
        }
    }
    
    const sum = p1 + pD + p2;
    if (sum > 0) {
        p1 /= sum;
        pD /= sum;
        p2 /= sum;
    }
    
    let confidenceVal = 0;
    let doubleChanceText = "--";
    const t1Code = t1.code || t1.name.substring(0, 3).toUpperCase();
    const t2Code = t2.code || t2.name.substring(0, 3).toUpperCase();
    
    if (p1 >= p2) {
        confidenceVal = p1 + pD;
        doubleChanceText = `${t1Code} OU NUL`;
    } else {
        confidenceVal = p2 + pD;
        doubleChanceText = `${t2Code} OU NUL`;
    }
    
    document.getElementById('val-confidence').textContent = `${(confidenceVal * 100).toFixed(1)}%`;
    document.getElementById('val-double-chance').textContent = doubleChanceText;
    
    const lblLevel = document.getElementById('lbl-confidence-level');
    lblLevel.className = 'insight-level';
    if (confidenceVal >= 0.75) {
        lblLevel.textContent = 'ÉLEVÉE';
        lblLevel.classList.add('level-high');
    } else if (confidenceVal >= 0.60) {
        lblLevel.textContent = 'MOYENNE';
        lblLevel.classList.add('level-medium');
    } else {
        lblLevel.textContent = 'FAIBLE';
        lblLevel.classList.add('level-low');
    }
}

// Board Resets
function resetBoard() {
    goalsT1.textContent = '0';
    goalsT2.textContent = '0';
    simCounter.textContent = `SIMULATION : 0 / ${document.getElementById('select-sim-count').value}`;
    simPercentage.textContent = '0%';
    progressFill.style.width = '0%';
    
    pctWin1.textContent = '0.0%';
    pctDraw.textContent = '0.0%';
    pctWin2.textContent = '0.0%';
    fillWin1.style.width = '0%';
    fillDraw.style.width = '0%';
    fillWin2.style.width = '0%';
    
    statLambda1.textContent = '0.00';
    statLambda2.textContent = '0.00';
    
    initMatrix();
    clearConvergenceChart();
    lastConvergenceHistory = [];
    btnRun.textContent = "LANCER LA SIMULATION (RUN)";
    isSimulating = false;
    stopSimulation = false;
    simFinished = false;
    if (simulationInterval) {
        clearTimeout(simulationInterval);
        simulationInterval = null;
    }
    
    // Display analytical preview immediately before simulation runs
    updateAnalyticalPreview();
}

// Simulation Core Loop
function runSimulations() {
    if (simFinished || isSimulating) {
        stopSimulation = true;
        resetBoard();
    }
    
    currentSimulationId++;
    const simId = currentSimulationId;
    
    isSimulating = true;
    stopSimulation = false;
    simFinished = false;
    btnRun.textContent = "RECOMMENCER (RESTART)";
    
    const t1 = getTeamStats(selectTeam1.value);
    const t2 = getTeamStats(selectTeam2.value);
    
    if (!t1 || !t2) return;
    
    const modelName = selectModel.value;
    const stats_res = predictMatchStats(t1, t2, selectedVenue, modelName);
    const lambda_1 = stats_res.lambda_1;
    const lambda_2 = stats_res.lambda_2;
    const isDixonColes = modelName === 'dixon_coles_teams';
    const isMix = modelName === 'mix_ensemble';
    
    // Mix model uses halved Dixon Coles rho
    const rho = isDixonColes ? MODEL_PARAMETERS.dixon_coles_teams.rho : (isMix ? MODEL_PARAMETERS.dixon_coles_teams.rho * 0.5 : 0);
    const useDCRejection = isDixonColes || isMix;
    
    statLambda1.textContent = lambda_1.toFixed(2);
    statLambda2.textContent = lambda_2.toFixed(2);
    
    const numSims = parseInt(document.getElementById('select-sim-count').value);
    const animationSpeed = parseInt(document.getElementById('select-speed').value);
    
    let currentSim = 0;
    const counts = Array(6).fill(0).map(() => Array(6).fill(0));
    
    let wins1 = 0;
    let draws = 0;
    let wins2 = 0;
    let convergenceHistory = [];
    lastConvergenceHistory = convergenceHistory;
    lastNumSims = numSims;
    
    function step() {
        if (simId !== currentSimulationId) {
            return; // Outdated simulation step, ignore
        }
        if (stopSimulation) {
            isSimulating = false;
            return;
        }
        
        let g1, g2;
        if (useDCRejection) {
            const score = sampleDixonColes(lambda_1, lambda_2, rho);
            g1 = score[0];
            g2 = score[1];
        } else {
            g1 = samplePoisson(lambda_1);
            g2 = samplePoisson(lambda_2);
        }
        
        goalsT1.textContent = g1;
        goalsT2.textContent = g2;
        
        if (g1 > g2) wins1++;
        else if (g1 === g2) draws++;
        else wins2++;
        
        const r = Math.min(g1, 5);
        const c = Math.min(g2, 5);
        counts[r][c]++;
        
        currentSim++;
        
        const pct = currentSim / numSims;
        simCounter.textContent = `SIMULATION : ${currentSim} / ${numSims}`;
        simPercentage.textContent = `${Math.round(pct * 100)}%`;
        progressFill.style.width = `${pct * 100}%`;
        
        // Outcome probabilities
        const pWin1 = (wins1 / currentSim) * 100;
        const pDraw = (draws / currentSim) * 100;
        const pWin2 = (wins2 / currentSim) * 100;
        
        pctWin1.textContent = `${pWin1.toFixed(1)}%`;
        pctDraw.textContent = `${pDraw.toFixed(1)}%`;
        pctWin2.textContent = `${pWin2.toFixed(1)}%`;
        
        fillWin1.style.width = `${pWin1}%`;
        fillDraw.style.width = `${pDraw}%`;
        fillWin2.style.width = `${pWin2}%`;
        
        updateInsights(wins1, draws, wins2, currentSim);
        
        // Accumulate convergence history at regular intervals
        if (currentSim % Math.max(1, Math.floor(numSims / 100)) === 0 || currentSim === numSims) {
            convergenceHistory.push({
                simIndex: currentSim,
                pWin1: pWin1,
                pDraw: pDraw,
                pWin2: pWin2
            });
            drawConvergenceChart(convergenceHistory, numSims);
        }
        
        // Heatmap updates
        let maxPct = -1;
        let maxR = 0;
        let maxC = 0;
        const cellPercentages = Array(6).fill(0).map(() => Array(6).fill(0));
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                const cellPct = (counts[i][j] / currentSim) * 100;
                cellPercentages[i][j] = cellPct;
                if (cellPct > maxPct) {
                    maxPct = cellPct;
                    maxR = i;
                    maxC = j;
                }
            }
        }
        
        for (let i = 0; i < 6; i++) {
            for (let j = 0; j < 6; j++) {
                const cell = document.getElementById(`cell-${i}-${j}`);
                const cellPct = cellPercentages[i][j];
                const opacity = Math.min(cellPct / 20.0, 1.0);
                cell.style.backgroundColor = `rgba(255, 159, 10, ${opacity})`;
                if (opacity > 0.5) {
                    cell.style.color = '#000';
                    cell.querySelector('.score-lbl').style.color = '#000';
                } else {
                    cell.style.color = 'var(--text-secondary)';
                    cell.querySelector('.score-lbl').style.color = 'var(--text-muted)';
                }
                cell.querySelector('.score-pct').textContent = `${cellPct.toFixed(1)}%`;
                if (i === maxR && j === maxC && cellPct > 0) {
                    cell.classList.add('max');
                } else {
                    cell.classList.remove('max');
                }
            }
        }
        
        if (currentSim < numSims) {
            if (animationSpeed > 0) {
                simulationInterval = setTimeout(step, animationSpeed);
            } else {
                // Instant loop
                let sg1 = 0, sg2 = 0;
                while (currentSim < numSims) {
                    if (useDCRejection) {
                        const score = sampleDixonColes(lambda_1, lambda_2, rho);
                        sg1 = score[0];
                        sg2 = score[1];
                    } else {
                        sg1 = samplePoisson(lambda_1);
                        sg2 = samplePoisson(lambda_2);
                    }
                    if (sg1 > sg2) wins1++;
                    else if (sg1 === sg2) draws++;
                    else wins2++;
                    counts[Math.min(sg1, 5)][Math.min(sg2, 5)]++;
                    currentSim++;
                    
                    // Accumulate convergence history during fast loop
                    if (currentSim % Math.max(1, Math.floor(numSims / 100)) === 0 || currentSim === numSims) {
                        convergenceHistory.push({
                            simIndex: currentSim,
                            pWin1: (wins1 / currentSim) * 100,
                            pDraw: (draws / currentSim) * 100,
                            pWin2: (wins2 / currentSim) * 100
                        });
                    }
                }
                
                // Find most probable score (peak cell of heatmap counts)
                let finalMaxPct = -1;
                let finalMaxR = 0;
                let finalMaxC = 0;
                for (let x = 0; x < 6; x++) {
                    for (let y = 0; y < 6; y++) {
                        const cellPct = (counts[x][y] / numSims) * 100;
                        if (cellPct > finalMaxPct) {
                            finalMaxPct = cellPct;
                            finalMaxR = x;
                            finalMaxC = y;
                        }
                    }
                }
                
                // Show the most probable score on the scoreboard instead of the last iteration's score
                goalsT1.textContent = finalMaxR;
                goalsT2.textContent = finalMaxC;
                
                simCounter.textContent = `SIMULATION : ${numSims} / ${numSims}`;
                simPercentage.textContent = '100%';
                progressFill.style.width = '100%';
                
                const finalWin1 = (wins1 / numSims) * 100;
                const finalDraw = (draws / numSims) * 100;
                const finalWin2 = (wins2 / numSims) * 100;
                
                pctWin1.textContent = `${finalWin1.toFixed(1)}%`;
                pctDraw.textContent = `${finalDraw.toFixed(1)}%`;
                pctWin2.textContent = `${finalWin2.toFixed(1)}%`;
                fillWin1.style.width = `${finalWin1}%`;
                fillDraw.style.width = `${finalDraw}%`;
                fillWin2.style.width = `${finalWin2}%`;
                
                updateInsights(wins1, draws, wins2, currentSim);
                
                drawConvergenceChart(convergenceHistory, numSims);
                
                for (let x = 0; x < 6; x++) {
                    for (let y = 0; y < 6; y++) {
                        const cell = document.getElementById(`cell-${x}-${y}`);
                        const cellPct = (counts[x][y] / numSims) * 100;
                        const opacity = Math.min(cellPct / 20.0, 1.0);
                        cell.style.backgroundColor = `rgba(255, 159, 10, ${opacity})`;
                        if (opacity > 0.5) {
                            cell.style.color = '#000';
                            cell.querySelector('.score-lbl').style.color = '#000';
                        } else {
                            cell.style.color = 'var(--text-secondary)';
                            cell.querySelector('.score-lbl').style.color = 'var(--text-muted)';
                        }
                        cell.querySelector('.score-pct').textContent = `${cellPct.toFixed(1)}%`;
                        if (x === finalMaxR && y === finalMaxC) {
                            cell.classList.add('max');
                        } else {
                            cell.classList.remove('max');
                        }
                    }
                }
                isSimulating = false;
                simFinished = true;
                btnRun.textContent = "RECOMMENCER (RESTART)";
            }
        } else {
            isSimulating = false;
            simFinished = true;
            btnRun.textContent = "RECOMMENCER (RESTART)";
            
            updateInsights(wins1, draws, wins2, currentSim);
            
            // Set scoreboard to the most probable score (peak cell of heatmap counts) at the end of animation
            let finalMaxPct = -1;
            let finalMaxR = 0;
            let finalMaxC = 0;
            for (let x = 0; x < 6; x++) {
                for (let y = 0; y < 6; y++) {
                    const cellPct = (counts[x][y] / numSims) * 100;
                    if (cellPct > finalMaxPct) {
                        finalMaxPct = cellPct;
                        finalMaxR = x;
                        finalMaxC = y;
                    }
                }
            }
            goalsT1.textContent = finalMaxR;
            goalsT2.textContent = finalMaxC;
        }
    }
    step();
}

btnRun.addEventListener('click', runSimulations);
btnReset.addEventListener('click', resetBoard);

function updateClock() {
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    liveClock.textContent = `${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
}

async function init() {
    await loadModelParameters();
    initDropdowns();
    initMatrix();
    updateClock();
    setInterval(updateClock, 1000);
}
init();

// --- TABS SWITCHING ---
const tabSimulations = document.getElementById('tab-simulations');
const tabTournament = document.getElementById('tab-tournament');
const tabStats = document.getElementById('tab-stats');
const tabComparison = document.getElementById('tab-comparison');
const tabBetting = document.getElementById('tab-betting');
const tabCalendar = document.getElementById('tab-calendar');

const viewSimulations = document.getElementById('view-simulations');
const viewTournament = document.getElementById('view-tournament');
const viewStats = document.getElementById('view-stats');
const viewComparison = document.getElementById('view-comparison');
const viewBetting = document.getElementById('view-betting');
const viewCalendar = document.getElementById('view-calendar');

const allTabs = [tabSimulations, tabTournament, tabStats, tabComparison, tabBetting, tabCalendar];
const allViews = [viewSimulations, viewTournament, viewStats, viewComparison, viewBetting, viewCalendar];

function switchTab(activeTab, activeView) {
    allTabs.forEach(t => t.classList.remove('active'));
    allViews.forEach(v => v.classList.add('terminal-workspace-hidden'));
    
    activeTab.classList.add('active');
    activeView.classList.remove('terminal-workspace-hidden');
    
    // Stop comparison simulation running in the background if we switch tabs
    if (activeView !== viewComparison && typeof comparisonIntervalId !== 'undefined' && comparisonIntervalId) {
        clearInterval(comparisonIntervalId);
        comparisonIntervalId = null;
        const displayTitle = document.getElementById('comparison-display-title');
        if (displayTitle) {
            displayTitle.textContent = `> COMPARAISON CÔTE-À-CÔTE DES CHANCES DE TITRE`;
        }
    }
}

tabSimulations.addEventListener('click', () => {
    switchTab(tabSimulations, viewSimulations);
    if (lastConvergenceHistory && lastConvergenceHistory.length > 0) {
        drawConvergenceChart(lastConvergenceHistory, lastNumSims);
    }
});

tabTournament.addEventListener('click', () => {
    switchTab(tabTournament, viewTournament);
});

tabStats.addEventListener('click', () => {
    switchTab(tabStats, viewStats);
});

tabComparison.addEventListener('click', () => {
    switchTab(tabComparison, viewComparison);
});

tabBetting.addEventListener('click', () => {
    switchTab(tabBetting, viewBetting);
    updateBettingDashboard();
});

tabCalendar.addEventListener('click', () => {
    switchTab(tabCalendar, viewCalendar);
    renderCalendar();
});

// --- CONVERGENCE CHART ---
function clearConvergenceChart() {
    const canvas = document.getElementById('convergence-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function drawConvergenceChart(history, totalSims) {
    const canvas = document.getElementById('convergence-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Auto-resize canvas resolution to match physical display size (supports high-DPI screens)
    const rect = canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    
    // Guard against hidden layout container reporting 0 width/height
    const physicalWidth = rect.width > 0 ? rect.width * dpr : (canvas.width || 300);
    const physicalHeight = rect.height > 0 ? rect.height * dpr : (canvas.height || 90);
    
    if (canvas.width !== physicalWidth || canvas.height !== physicalHeight) {
        canvas.width = physicalWidth;
        canvas.height = physicalHeight;
        ctx.scale(dpr, dpr);
    }
    
    const logicalWidth = physicalWidth / dpr;
    const logicalHeight = physicalHeight / dpr;
    
    ctx.clearRect(0, 0, logicalWidth, logicalHeight);
    
    // Grid Lines (25%, 50%, 75%)
    ctx.strokeStyle = '#2b303b';
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    for (let pct of [25, 50, 75]) {
        const y = logicalHeight - (pct / 100) * logicalHeight;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(logicalWidth, y);
        ctx.stroke();
    }
    ctx.setLineDash([]);
    
    if (history.length < 2) return;
    
    // Plot Win 1 (Green), Draw (Amber), Win 2 (Red)
    const drawLine = (prop, color) => {
        ctx.strokeStyle = color;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        for (let i = 0; i < history.length; i++) {
            const x = (history[i].simIndex / totalSims) * logicalWidth;
            const y = logicalHeight - (history[i][prop] / 100) * logicalHeight;
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        ctx.stroke();
    };
    
    drawLine('pWin1', '#30d158'); // green
    drawLine('pDraw', '#ff9f0a'); // amber
    drawLine('pWin2', '#ff453a'); // red
}

// --- WORLD CUP TOURNAMENT SIMULATOR ---
const TOURNAMENT_GROUPS = {
    "A": ["Algeria", "Argentina", "Austria", "Jordan"],
    "B": ["Australia", "Paraguay", "Türkiye", "United States"],
    "C": ["Belgium", "Egypt", "IR Iran", "New Zealand"],
    "D": ["Bosnia-Herzegovina", "Canada", "Qatar", "Switzerland"],
    "E": ["Brazil", "Haiti", "Morocco", "Scotland"],
    "F": ["Cape Verde", "Saudi Arabia", "Spain", "Uruguay"],
    "G": ["Colombia", "Congo DR", "Portugal", "Uzbekistan"],
    "H": ["Croatia", "England", "Ghana", "Panama"],
    "I": ["Curaçao", "Côte d'Ivoire", "Ecuador", "Germany"],
    "J": ["Czechia", "Korea Republic", "Mexico", "South Africa"],
    "K": ["France", "Iraq", "Norway", "Senegal"],
    "L": ["Japan", "Netherlands", "Sweden", "Tunisia"]
};

function get2026WorldCupVenue(t1Name, t2Name) {
    if (t1Name === "United States") return 2; // T1 is USA host
    if (t2Name === "United States") return 3; // T2 is USA host
    if (t1Name === "Canada") return 2;
    if (t2Name === "Canada") return 3;
    if (t1Name === "Mexico") return 2;
    if (t2Name === "Mexico") return 3;
    return 1; // Neutral venue
}

function simulateMatch(t1Name, t2Name, modelName, runMonteCarlo = true) {
    const t1 = getTeamStats(t1Name) || { name: t1Name, rank: 100, points: 1000, code: t1Name.substring(0, 3).toUpperCase() };
    const t2 = getTeamStats(t2Name) || { name: t2Name, rank: 100, points: 1000, code: t2Name.substring(0, 3).toUpperCase() };
    
    const venue = get2026WorldCupVenue(t1Name, t2Name);
    const stats = predictMatchStats(t1, t2, venue, modelName);
    const lambda_1 = stats.lambda_1;
    const lambda_2 = stats.lambda_2;
    
    const isDixonColes = modelName === 'dixon_coles_teams';
    const isMix = modelName === 'mix_ensemble';
    const rho = isDixonColes ? MODEL_PARAMETERS.dixon_coles_teams.rho : (isMix ? MODEL_PARAMETERS.dixon_coles_teams.rho * 0.5 : 0);
    const useDCRejection = isDixonColes || isMix;
    
    if (!runMonteCarlo) {
        let g1, g2;
        if (useDCRejection) {
            const score = sampleDixonColes(lambda_1, lambda_2, rho);
            g1 = score[0];
            g2 = score[1];
        } else {
            g1 = samplePoisson(lambda_1);
            g2 = samplePoisson(lambda_2);
        }
        return { g1, g2, t1, t2, wins1: g1 > g2 ? 1 : 0, draws: g1 === g2 ? 1 : 0, wins2: g1 < g2 ? 1 : 0, totalSims: 1 };
    }
    
    // Run a mini Monte Carlo simulation of 200 matches to find the most probable score
    const counts = Array(6).fill(0).map(() => Array(6).fill(0));
    let wins1 = 0;
    let draws = 0;
    let wins2 = 0;
    const numSims = 200;
    
    for (let i = 0; i < numSims; i++) {
        let g1, g2;
        if (useDCRejection) {
            const score = sampleDixonColes(lambda_1, lambda_2, rho);
            g1 = score[0];
            g2 = score[1];
        } else {
            g1 = samplePoisson(lambda_1);
            g2 = samplePoisson(lambda_2);
        }
        if (g1 > g2) wins1++;
        else if (g1 === g2) draws++;
        else wins2++;
        counts[Math.min(g1, 5)][Math.min(g2, 5)]++;
    }
    
    // Find the most probable score (peak cell of heatmap counts)
    let maxPct = -1;
    let maxR = 1;
    let maxC = 1;
    for (let r = 0; r < 6; r++) {
        for (let c = 0; c < 6; c++) {
            if (counts[r][c] > maxPct) {
                maxPct = counts[r][c];
                maxR = r;
                maxC = c;
            }
        }
    }
    
    return { g1: maxR, g2: maxC, t1, t2, wins1, draws, wins2, totalSims: numSims };
}

function simulateKnockoutMatch(t1Name, t2Name, modelName, runMonteCarlo = true) {
    let match = simulateMatch(t1Name, t2Name, modelName, runMonteCarlo);
    let g1 = match.g1;
    let g2 = match.g2;
    let ot = false;
    let pen = false;
    let pen1 = 0, pen2 = 0;
    
    if (g1 === g2) {
        ot = true;
        // Extra Time: 25% of lambda
        const venue = get2026WorldCupVenue(match.t1.name, match.t2.name);
        const stats = predictMatchStats(match.t1, match.t2, venue, modelName);
        const ot_l1 = stats.lambda_1 * 0.25;
        const ot_l2 = stats.lambda_2 * 0.25;
        
        let ot_g1, ot_g2;
        const isDixonColes = modelName === 'dixon_coles_teams';
        const isMix = modelName === 'mix_ensemble';
        const rho = isDixonColes ? MODEL_PARAMETERS.dixon_coles_teams.rho : (isMix ? MODEL_PARAMETERS.dixon_coles_teams.rho * 0.5 : 0);
        
        if (isDixonColes || isMix) {
            const score = sampleDixonColes(ot_l1, ot_l2, rho);
            ot_g1 = score[0];
            ot_g2 = score[1];
        } else {
            ot_g1 = samplePoisson(ot_l1);
            ot_g2 = samplePoisson(ot_l2);
        }
        
        g1 += ot_g1;
        g2 += ot_g2;
        
        if (g1 === g2) {
            pen = true;
            // Penalty shootout based on ranking points
            const p1Ratio = match.t1.points / (match.t1.points + match.t2.points);
            let p1Score = 0, p2Score = 0;
            for (let i = 0; i < 5; i++) {
                if (Math.random() < p1Ratio) p1Score++;
                if (Math.random() < (1 - p1Ratio)) p2Score++;
            }
            while (p1Score === p2Score) {
                if (Math.random() < p1Ratio) p1Score++;
                if (Math.random() < (1 - p1Ratio)) p2Score++;
            }
            pen1 = p1Score;
            pen2 = p2Score;
        }
    }
    
    const winner = (g1 > g2 || (g1 === g2 && pen1 > pen2)) ? t1Name : t2Name;
    return {
        home: t1Name,
        away: t2Name,
        scoreHome: g1,
        scoreAway: g2,
        ot: ot,
        pen: pen,
        penHome: pen1,
        penAway: pen2,
        winner: winner
    };
}

function runTournamentSimulation(modelName, runMonteCarlo = true) {
    const qualified = [];
    const thirds = [];
    const groupDetails = {};
    
    for (const groupName in TOURNAMENT_GROUPS) {
        const teams = TOURNAMENT_GROUPS[groupName];
        const stats = {};
        teams.forEach(t => {
            stats[t] = { name: t, pts: 0, w: 0, d: 0, l: 0, gs: 0, gc: 0, gd: 0 };
        });
        
        const fixtures = [
            [teams[0], teams[1]],
            [teams[2], teams[3]],
            [teams[0], teams[2]],
            [teams[1], teams[3]],
            [teams[0], teams[3]],
            [teams[1], teams[2]]
        ];
        
        const matchesList = [];
        
        fixtures.forEach(match => {
            const res = simulateMatch(match[0], match[1], modelName, runMonteCarlo);
            const g1 = res.g1;
            const g2 = res.g2;
            
            stats[match[0]].gs += g1;
            stats[match[0]].gc += g2;
            stats[match[0]].gd += (g1 - g2);
            stats[match[1]].gs += g2;
            stats[match[1]].gc += g1;
            stats[match[1]].gd += (g2 - g1);
            
            if (g1 > g2) {
                stats[match[0]].pts += 3;
                stats[match[0]].w += 1;
                stats[match[1]].l += 1;
            } else if (g1 < g2) {
                stats[match[1]].pts += 3;
                stats[match[1]].w += 1;
                stats[match[0]].l += 1;
            } else {
                stats[match[0]].pts += 1;
                stats[match[0]].d += 1;
                stats[match[1]].pts += 1;
                stats[match[1]].d += 1;
            }
            
            matchesList.push({
                home: match[0],
                away: match[1],
                scoreHome: g1,
                scoreAway: g2
            });
        });
        
        const sorted = Object.values(stats).sort((a, b) => {
            if (b.pts !== a.pts) return b.pts - a.pts;
            if (b.gd !== a.gd) return b.gd - a.gd;
            if (b.gs !== a.gs) return b.gs - a.gs;
            return Math.random() - 0.5;
        });
        
        qualified.push(sorted[0].name);
        qualified.push(sorted[1].name);
        thirds.push(sorted[2]);
        
        groupDetails[groupName] = {
            standings: sorted,
            matches: matchesList
        };
    }
    
    const sortedThirds = thirds.sort((a, b) => {
        if (b.pts !== a.pts) return b.pts - a.pts;
        if (b.gd !== a.gd) return b.gd - a.gd;
        if (b.gs !== a.gs) return b.gs - a.gs;
        return Math.random() - 0.5;
    });
    
    const bestThirds = sortedThirds.slice(0, 8).map(t => t.name);
    const allQualified = [...qualified, ...bestThirds];
    
    const rankedQualified = allQualified.map(name => getTeamStats(name) || { name, points: 1000 })
                                        .sort((a, b) => b.points - a.points)
                                        .map(t => t.name);
                                        
    const r32Matches = [];
    for (let i = 0; i < 16; i++) {
        r32Matches.push([rankedQualified[i], rankedQualified[31 - i]]);
    }
    
    const r16Teams = [];
    const r32Results = [];
    r32Matches.forEach(m => {
        const res = simulateKnockoutMatch(m[0], m[1], modelName, runMonteCarlo);
        r32Results.push(res);
        r16Teams.push(res.winner);
    });
    
    const qfTeams = [];
    const r16Results = [];
    for (let i = 0; i < 8; i++) {
        const res = simulateKnockoutMatch(r16Teams[i*2], r16Teams[i*2 + 1], modelName, runMonteCarlo);
        r16Results.push(res);
        qfTeams.push(res.winner);
    }
    
    const sfTeams = [];
    const qfResults = [];
    for (let i = 0; i < 4; i++) {
        const res = simulateKnockoutMatch(qfTeams[i*2], qfTeams[i*2 + 1], modelName, runMonteCarlo);
        qfResults.push(res);
        sfTeams.push(res.winner);
    }
    
    const finalTeams = [];
    const sfResults = [];
    for (let i = 0; i < 2; i++) {
        const res = simulateKnockoutMatch(sfTeams[i*2], sfTeams[i*2 + 1], modelName, runMonteCarlo);
        sfResults.push(res);
        finalTeams.push(res.winner);
    }
    
    const finalRes = simulateKnockoutMatch(finalTeams[0], finalTeams[1], modelName, runMonteCarlo);
    const champion = finalRes.winner;
    
    return {
        champion: champion,
        runnerUp: champion === finalTeams[0] ? finalTeams[1] : finalTeams[0],
        sfExits: sfTeams.filter(t => t !== champion && t !== (champion === finalTeams[0] ? finalTeams[1] : finalTeams[0])),
        qfExits: qfTeams.filter(t => !sfTeams.includes(t)),
        r16Exits: r16Teams.filter(t => !qfTeams.includes(t)),
        r32Exits: rankedQualified.filter(t => !r16Teams.includes(t)),
        groupExits: Object.values(TOURNAMENT_GROUPS).flat().filter(t => !allQualified.includes(t)),
        
        r16Results: r16Results,
        qfResults: qfResults,
        sfResults: sfResults,
        finalResult: finalRes,
        
        groupDetails: groupDetails,
        bestThirds: bestThirds
    };
}

function runMultipleTournaments(modelName, count) {
    const stats = {};
    Object.values(TOURNAMENT_GROUPS).flat().forEach(t => {
        stats[t] = { name: t, winner: 0, final: 0, sf: 0, qf: 0, r16: 0, groupExit: 0 };
    });
    
    const runs = [];
    
    for (let i = 0; i < count; i++) {
        const res = runTournamentSimulation(modelName, false);
        runs.push(res);
        
        stats[res.champion].winner++;
        stats[res.champion].final++;
        stats[res.champion].sf++;
        stats[res.champion].qf++;
        stats[res.champion].r16++;
        
        stats[res.runnerUp].final++;
        stats[res.runnerUp].sf++;
        stats[res.runnerUp].qf++;
        stats[res.runnerUp].r16++;
        
        res.sfExits.forEach(t => {
            if (stats[t]) {
                stats[t].sf++;
                stats[t].qf++;
                stats[t].r16++;
            }
        });
        res.qfExits.forEach(t => {
            if (stats[t]) {
                stats[t].qf++;
                stats[t].r16++;
            }
        });
        res.r16Exits.forEach(t => {
            if (stats[t]) {
                stats[t].r16++;
            }
        });
        res.groupExits.forEach(t => {
            if (stats[t]) {
                stats[t].groupExit++;
            }
        });
    }
    
    return { stats, runs };
}

function renderVisualBracket(res, containerId = 'tournament-bracket-view') {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    const bracketContainer = document.createElement('div');
    bracketContainer.className = 'bracket-container';
    
    const formatScore = (m) => {
        let scoreStr = `${m.scoreHome} - ${m.scoreAway}`;
        if (m.pen) {
            scoreStr += ` (${m.penHome}-${m.penAway} tab)`;
        } else if (m.ot) {
            scoreStr += ' a.p.';
        }
        return scoreStr;
    };
    
    const renderRound = (title, matches) => {
        const roundDiv = document.createElement('div');
        roundDiv.className = 'bracket-round';
        
        const roundTitle = document.createElement('div');
        roundTitle.className = 'bracket-round-title';
        roundTitle.textContent = title;
        roundDiv.appendChild(roundTitle);
        
        const matchesDiv = document.createElement('div');
        matchesDiv.className = 'bracket-matches';
        
        matches.forEach(m => {
            const matchDiv = document.createElement('div');
            matchDiv.className = 'bracket-match';
            
            const t1Div = document.createElement('div');
            t1Div.className = 'bracket-match-team' + (m.winner === m.home ? ' winner' : ' loser');
            t1Div.innerHTML = `<span>${m.home}</span><span class="bracket-match-score">${m.scoreHome}</span>`;
            
            const t2Div = document.createElement('div');
            t2Div.className = 'bracket-match-team' + (m.winner === m.away ? ' winner' : ' loser');
            t2Div.innerHTML = `<span>${m.away}</span><span class="bracket-match-score">${m.scoreAway}</span>`;
            
            const scoreLabel = document.createElement('div');
            scoreLabel.className = 'bracket-match-score-lbl';
            scoreLabel.style.fontSize = '9px';
            scoreLabel.style.color = 'var(--text-muted)';
            scoreLabel.style.marginTop = '4px';
            scoreLabel.style.textAlign = 'center';
            scoreLabel.textContent = formatScore(m);
            
            matchDiv.appendChild(t1Div);
            matchDiv.appendChild(t2Div);
            matchDiv.appendChild(scoreLabel);
            
            if (m.pen) {
                const shootoutDiv = document.createElement('div');
                shootoutDiv.style.marginTop = '4px';
                shootoutDiv.style.display = 'flex';
                shootoutDiv.style.flexDirection = 'column';
                shootoutDiv.style.alignItems = 'center';
                shootoutDiv.style.gap = '2px';
                shootoutDiv.style.fontFamily = 'var(--font-mono)';
                shootoutDiv.style.fontSize = '8px';
                
                const { t1Kicks, t2Kicks } = generateShootoutSequence(m.penHome, m.penAway);
                const renderBalls = (kicks) => {
                    return kicks.map(goal => goal ? '<span style="color: #30d158; text-shadow: 0 0 3px #30d158;">●</span>' : '<span style="color: #ff3b30; text-shadow: 0 0 3px #ff3b30;">●</span>').join(' ');
                };
                
                shootoutDiv.innerHTML = `
                    <div style="display: flex; gap: 4px; align-items: center;">
                        <span>TAB:</span>
                        <span>${renderBalls(t1Kicks)}</span>
                        <span style="color: var(--text-secondary); margin: 0 2px;">vs</span>
                        <span>${renderBalls(t2Kicks)}</span>
                    </div>
                `;
                matchDiv.appendChild(shootoutDiv);
            }
            
            matchesDiv.appendChild(matchDiv);
        });
        
        roundDiv.appendChild(matchesDiv);
        bracketContainer.appendChild(roundDiv);
    };
    
    renderRound("Huitièmes de Finale (Round of 16)", res.r16Results);
    renderRound("Quarts de Finale (Quarterfinals)", res.qfResults);
    renderRound("Demi-Finales (Semifinals)", res.sfResults);
    
    const finalDiv = document.createElement('div');
    finalDiv.className = 'bracket-round';
    const finalTitle = document.createElement('div');
    finalTitle.className = 'bracket-round-title';
    finalTitle.textContent = "Finale & Champion";
    finalDiv.appendChild(finalTitle);
    
    const finalMatchesDiv = document.createElement('div');
    finalMatchesDiv.className = 'bracket-matches';
    
    const finalMatchDiv = document.createElement('div');
    finalMatchDiv.className = 'bracket-match';
    finalMatchDiv.style.border = '2px solid var(--bbg-amber)';
    
    const m = res.finalResult;
    const t1Div = document.createElement('div');
    t1Div.className = 'bracket-match-team' + (m.winner === m.home ? ' winner' : ' loser');
    t1Div.innerHTML = `<span>${m.home}</span><span class="bracket-match-score">${m.winner === m.home ? m.scoreHome : m.scoreAway}</span>`;
    
    const t2Div = document.createElement('div');
    t2Div.className = 'bracket-match-team' + (m.winner === m.away ? ' winner' : ' loser');
    t2Div.innerHTML = `<span>${m.away}</span><span class="bracket-match-score">${m.winner === m.away ? m.scoreHome : m.scoreAway}</span>`;
    
    const scoreLabel = document.createElement('div');
    scoreLabel.className = 'bracket-match-score-lbl';
    scoreLabel.style.fontSize = '9px';
    scoreLabel.style.color = 'var(--text-muted)';
    scoreLabel.style.marginTop = '4px';
    scoreLabel.style.textAlign = 'center';
    scoreLabel.textContent = formatScore(m);
    
    const champLabel = document.createElement('div');
    champLabel.style.fontSize = '12px';
    champLabel.style.color = 'var(--bbg-amber)';
    champLabel.style.fontWeight = 'bold';
    champLabel.style.textAlign = 'center';
    champLabel.style.marginTop = '8px';
    champLabel.style.borderTop = '1px solid var(--border-color)';
    champLabel.style.paddingTop = '6px';
    champLabel.textContent = `🏆 CHAMPION : ${m.winner.toUpperCase()}`;
    
    finalMatchDiv.appendChild(t1Div);
    finalMatchDiv.appendChild(t2Div);
    finalMatchDiv.appendChild(scoreLabel);
    
    if (m.pen) {
        const shootoutDiv = document.createElement('div');
        shootoutDiv.style.marginTop = '4px';
        shootoutDiv.style.display = 'flex';
        shootoutDiv.style.flexDirection = 'column';
        shootoutDiv.style.alignItems = 'center';
        shootoutDiv.style.gap = '2px';
        shootoutDiv.style.fontFamily = 'var(--font-mono)';
        shootoutDiv.style.fontSize = '8px';
        
        const { t1Kicks, t2Kicks } = generateShootoutSequence(m.penHome, m.penAway);
        const renderBalls = (kicks) => {
            return kicks.map(goal => goal ? '<span style="color: #30d158; text-shadow: 0 0 3px #30d158;">●</span>' : '<span style="color: #ff3b30; text-shadow: 0 0 3px #ff3b30;">●</span>').join(' ');
        };
        
        shootoutDiv.innerHTML = `
            <div style="display: flex; gap: 4px; align-items: center;">
                <span>TAB:</span>
                <span>${renderBalls(t1Kicks)}</span>
                <span style="color: var(--text-secondary); margin: 0 2px;">vs</span>
                <span>${renderBalls(t2Kicks)}</span>
            </div>
        `;
        finalMatchDiv.appendChild(shootoutDiv);
    }
    
    finalMatchDiv.appendChild(champLabel);
    finalMatchesDiv.appendChild(finalMatchDiv);
    finalDiv.appendChild(finalMatchesDiv);
    
    bracketContainer.appendChild(finalDiv);
    container.appendChild(bracketContainer);
}


function renderGroupStage(res, containerId = 'tournament-group-stage-view') {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    // Add section title
    const sectionTitle = document.createElement('h3');
    sectionTitle.style.fontFamily = 'var(--font-mono)';
    sectionTitle.style.fontSize = '12px';
    sectionTitle.style.color = 'var(--bbg-amber)';
    sectionTitle.style.borderBottom = '1px dashed var(--border-color)';
    sectionTitle.style.paddingBottom = '5px';
    sectionTitle.style.marginBottom = '20px';
    sectionTitle.style.marginTop = '10px';
    sectionTitle.textContent = '> PHASE DE GROUPES (SIMULATIONS DE MONTE-CARLO)';
    container.appendChild(sectionTitle);
    
    // Create the grid
    const grid = document.createElement('div');
    grid.className = 'groups-grid';
    
    for (const groupName in res.groupDetails) {
        const detail = res.groupDetails[groupName];
        const card = document.createElement('div');
        card.className = 'group-card';
        
        // Group title
        const title = document.createElement('h4');
        title.className = 'group-title';
        title.textContent = `GROUPE ${groupName}`;
        card.appendChild(title);
        
        // Standings table
        const table = document.createElement('table');
        table.className = 'group-table';
        table.innerHTML = `
            <thead>
                <tr>
                    <th style="width: 20px;">#</th>
                    <th>NATION</th>
                    <th style="text-align: right;">PTS</th>
                    <th style="text-align: right;">V-N-D</th>
                    <th style="text-align: right;">BP:BC</th>
                    <th style="text-align: right;">DIF</th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        `;
        
        const tbody = table.querySelector('tbody');
        detail.standings.forEach((team, index) => {
            const tr = document.createElement('tr');
            
            const isTop2 = index < 2;
            const isBestThird = index === 2 && res.bestThirds.includes(team.name);
            
            if (isTop2) {
                tr.className = 'qualified';
            } else if (isBestThird) {
                tr.className = 'third-place';
            } else {
                tr.className = 'eliminated';
            }
            
            tr.innerHTML = `
                <td>${index + 1}</td>
                <td><strong>${team.name}</strong></td>
                <td style="text-align: right; font-weight: bold;">${team.pts}</td>
                <td style="text-align: right;" class="mono">${team.w}-${team.d}-${team.l}</td>
                <td style="text-align: right;" class="mono">${team.gs}:${team.gc}</td>
                <td style="text-align: right; font-weight: bold;" class="mono">${team.gd > 0 ? '+' : ''}${team.gd}</td>
            `;
            tbody.appendChild(tr);
        });
        
        card.appendChild(table);
        
        // Group matches list
        const matchesList = document.createElement('div');
        matchesList.className = 'group-matches-list';
        
        detail.matches.forEach(m => {
            const item = document.createElement('div');
            item.className = 'group-match-item';
            
            item.innerHTML = `
                <span>${m.home} - ${m.away}</span>
                <span class="group-match-score">${m.scoreHome} - ${m.scoreAway}</span>
            `;
            matchesList.appendChild(item);
        });
        
        card.appendChild(matchesList);
        grid.appendChild(card);
    }
    
    container.appendChild(grid);
}

// --- TOURNAMENT UI HANDLERS (TAB 2: PHASES DU TOURNOI) ---
const btnRunTournament = document.getElementById('btn-run-tournament');
const btnResetTournament = document.getElementById('btn-reset-tournament');
const selectTournamentModel = document.getElementById('tournament-model');
const initialMsg = document.getElementById('tournament-initial-msg');
const groupStageView = document.getElementById('tournament-group-stage-view');
const bracketView = document.getElementById('tournament-bracket-view');

btnRunTournament.addEventListener('click', () => {
    const model = selectTournamentModel.value;
    
    initialMsg.style.display = 'none';
    groupStageView.style.display = 'block';
    bracketView.style.display = 'block';
    
    // Run single simulation (which uses Monte Carlo for each match)
    const res = runTournamentSimulation(model, true);
    renderGroupStage(res, 'tournament-group-stage-view');
    renderVisualBracket(res, 'tournament-bracket-view');
});

btnResetTournament.addEventListener('click', () => {
    initialMsg.style.display = 'block';
    groupStageView.style.display = 'none';
    bracketView.style.display = 'none';
});


// --- STATISTICS UI HANDLERS (TAB 3: CHERCHER STATISTIQUES) ---
const btnRunStats = document.getElementById('btn-run-stats');
const btnResetStats = document.getElementById('btn-reset-stats');
const selectStatsModel = document.getElementById('stats-model');
const selectStatsSimCount = document.getElementById('stats-sim-count');
const statsInitialMsg = document.getElementById('stats-initial-msg');
const statsMainContent = document.getElementById('stats-main-content');
const searchNationInput = document.getElementById('search-nation-input');
const statsTbody = document.getElementById('stats-tbody');
const selectStatsTourneyIndex = document.getElementById('select-stats-tourney-index');
const statsGroupStageView = document.getElementById('stats-group-stage-view');
const statsBracketView = document.getElementById('stats-bracket-view');
const statsExplorerControls = document.getElementById('stats-explorer-controls');

let statsSimulatedTournaments = [];

btnRunStats.addEventListener('click', () => {
    const model = selectStatsModel.value;
    const count = parseInt(selectStatsSimCount.value);
    
    statsInitialMsg.style.display = 'none';
    statsMainContent.style.display = 'block';
    statsExplorerControls.style.display = 'none';
    statsGroupStageView.style.display = 'none';
    statsBracketView.style.display = 'none';
    searchNationInput.value = '';
    
    statsTbody.innerHTML = '<tr><td colspan="7" class="terminal-msg">SIMULATIONS EN COURS... CARTE MÈRE CHAUFFE...</td></tr>';
    
    setTimeout(() => {
        const result = runMultipleTournaments(model, count);
        const stats = result.stats;
        statsSimulatedTournaments = result.runs;
        
        const sortedTeams = Object.values(stats).sort((a, b) => {
            if (b.winner !== a.winner) return b.winner - a.winner;
            if (b.final !== a.final) return b.final - a.final;
            if (b.sf !== a.sf) return b.sf - a.sf;
            return b.name.localeCompare(a.name);
        });
        
        statsTbody.innerHTML = '';
        sortedTeams.forEach(t => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${t.name}</strong></td>
                <td class="mono text-right" style="color: var(--bbg-amber);">${(t.winner / count * 100).toFixed(1)}%</td>
                <td class="mono text-right">${(t.final / count * 100).toFixed(1)}%</td>
                <td class="mono text-right">${(t.sf / count * 100).toFixed(1)}%</td>
                <td class="mono text-right">${(t.qf / count * 100).toFixed(1)}%</td>
                <td class="mono text-right">${(t.r16 / count * 100).toFixed(1)}%</td>
                <td class="mono text-right" style="color: var(--text-muted);">${(t.groupExit / count * 100).toFixed(1)}%</td>
            `;
            statsTbody.appendChild(tr);
        });
        
        // Populate Explorer dropdown
        selectStatsTourneyIndex.innerHTML = '';
        
        const optDefault = document.createElement('option');
        optDefault.value = "";
        optDefault.textContent = "-- CHOISIR UN TOURNOI À EXPLORER --";
        selectStatsTourneyIndex.appendChild(optDefault);
        
        statsSimulatedTournaments.forEach((run, i) => {
            const opt = document.createElement('option');
            opt.value = i;
            opt.textContent = `Tournoi #${i + 1} (Vainqueur : ${run.champion})`;
            selectStatsTourneyIndex.appendChild(opt);
        });
        
        statsExplorerControls.style.display = 'block';
    }, 50);
});

// Live Search Filtering
searchNationInput.addEventListener('input', () => {
    const query = searchNationInput.value.toLowerCase().trim();
    const rows = statsTbody.querySelectorAll('tr');
    
    rows.forEach(row => {
        const nationCell = row.querySelector('td');
        if (nationCell) {
            const nationName = nationCell.textContent.toLowerCase();
            if (nationName.includes(query)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        }
    });
});

selectStatsTourneyIndex.addEventListener('change', () => {
    const val = selectStatsTourneyIndex.value;
    if (val === "") {
        statsGroupStageView.style.display = 'none';
        statsBracketView.style.display = 'none';
    } else {
        const index = parseInt(val);
        const res = statsSimulatedTournaments[index];
        statsGroupStageView.style.display = 'block';
        statsBracketView.style.display = 'block';
        
        renderGroupStage(res, 'stats-group-stage-view');
        renderVisualBracket(res, 'stats-bracket-view');
        
        // Scroll to show explorer details
        statsGroupStageView.scrollIntoView({ behavior: 'smooth' });
    }
});

btnResetStats.addEventListener('click', () => {
    statsInitialMsg.style.display = 'block';
    statsMainContent.style.display = 'none';
    statsTbody.innerHTML = '';
    searchNationInput.value = '';
    statsSimulatedTournaments = [];
});


// --- MODEL COMPARISON UI HANDLERS (TAB 4: COMPARAISON DE MODÈLES) ---
const btnRunComparison = document.getElementById('btn-run-comparison');
const btnResetComparison = document.getElementById('btn-reset-comparison');
const selectComparisonSimCount = document.getElementById('comparison-sim-count');
const comparisonInitialMsg = document.getElementById('comparison-initial-msg');
const comparisonContent = document.getElementById('comparison-content');
const comparisonTbody = document.getElementById('comparison-tbody');

let comparisonIntervalId = null;

btnRunComparison.addEventListener('click', () => {
    if (comparisonIntervalId) {
        clearInterval(comparisonIntervalId);
    }
    
    const count = parseInt(selectComparisonSimCount.value);
    
    comparisonInitialMsg.style.display = 'none';
    comparisonContent.style.display = 'block';
    
    // Clear canvas before drawing new values
    const canvas = document.getElementById('comparison-chart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    const dcWins = {};
    const h2hWins = {};
    const mixWins = {};
    
    let currentSimCount = 0;
    const stepSize = Math.max(5, Math.round(count / 40)); // ~40 frames of animation
    
    comparisonTbody.innerHTML = '<tr><td colspan="5" class="terminal-msg">INITIALISATION DES SIMULATIONS EN DIRECT...</td></tr>';
    
    comparisonIntervalId = setInterval(() => {
        if (currentSimCount >= count) {
            clearInterval(comparisonIntervalId);
            comparisonIntervalId = null;
            const displayTitle = document.getElementById('comparison-display-title');
            if (displayTitle) {
                displayTitle.textContent = `> PRÉDICTION TERMINÉE : COMPARATIF DE MODÈLES (${count} SIMS)`;
            }
            return;
        }
        
        // Run a small batch of simulations
        const batchSize = Math.min(stepSize, count - currentSimCount);
        
        for (let s = 0; s < batchSize; s++) {
            // Run Dixon-Coles
            const resDC = runTournamentSimulation('dixon_coles_teams');
            if (resDC && resDC.champion) {
                dcWins[resDC.champion] = (dcWins[resDC.champion] || 0) + 1;
            }
            // Run H2H
            const resH2H = runTournamentSimulation('rolling_form');
            if (resH2H && resH2H.champion) {
                h2hWins[resH2H.champion] = (h2hWins[resH2H.champion] || 0) + 1;
            }
            // Run Hybrid Mix
            const resMix = runTournamentSimulation('mix_ensemble');
            if (resMix && resMix.champion) {
                mixWins[resMix.champion] = (mixWins[resMix.champion] || 0) + 1;
            }
        }
        
        currentSimCount += batchSize;
        
        // Update Title Progress
        const pct = Math.round((currentSimCount / count) * 100);
        const displayTitle = document.getElementById('comparison-display-title');
        if (displayTitle) {
            displayTitle.textContent = `> SIMULATION DE TOURNOIS : ${currentSimCount} / ${count} (${pct}%)`;
        }
        
        // Compile probabilities
        const nations = Object.keys(TOURNAMENT_GROUPS).flatMap(g => TOURNAMENT_GROUPS[g]);
        const comparisons = nations.map(name => {
            const dcRate = ((dcWins[name] || 0) / currentSimCount) * 100;
            const h2hRate = ((h2hWins[name] || 0) / currentSimCount) * 100;
            const mixRate = ((mixWins[name] || 0) / currentSimCount) * 100;
            
            const maxVal = Math.max(dcRate, h2hRate, mixRate);
            const minVal = Math.min(dcRate, h2hRate, mixRate);
            const delta = maxVal - minVal;
            const avg = (dcRate + h2hRate + mixRate) / 3;
            
            return { name, dcRate, h2hRate, mixRate, delta, avg };
        });
        
        // Take top 10 nations sorted by average probability
        const top10 = comparisons.sort((a, b) => b.avg - a.avg).slice(0, 10);
        
        comparisonTbody.innerHTML = '';
        top10.forEach(t => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td><strong>${t.name}</strong></td>
                <td class="mono text-right" style="color: var(--bbg-amber);">${t.dcRate.toFixed(1)}%</td>
                <td class="mono text-right" style="color: var(--bbg-amber);">${t.h2hRate.toFixed(1)}%</td>
                <td class="mono text-right" style="color: var(--bbg-amber);">${t.mixRate.toFixed(1)}%</td>
                <td class="mono text-right" style="font-weight: bold;">${t.delta > 0 ? '+' : ''}${t.delta.toFixed(1)}%</td>
            `;
            comparisonTbody.appendChild(tr);
        });
        
        // Draw horizontal canvas comparison chart for Top 5 favorite teams
        drawComparisonChart(top10.slice(0, 5));
    }, 45);
});

btnResetComparison.addEventListener('click', () => {
    if (comparisonIntervalId) {
        clearInterval(comparisonIntervalId);
        comparisonIntervalId = null;
    }
    
    comparisonInitialMsg.style.display = 'block';
    comparisonContent.style.display = 'none';
    comparisonTbody.innerHTML = '';
    const displayTitle = document.getElementById('comparison-display-title');
    if (displayTitle) {
        displayTitle.textContent = `> COMPARAISON CÔTE-À-CÔTE DES CHANCES DE TITRE`;
    }
    
    const canvas = document.getElementById('comparison-chart');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
});


// --- HELPER FUNCTIONS & ADDITIONAL FEATURES (FUSION 2, 3, 4) ---

// Option 4 Shootout Sequence Generator
function generateShootoutSequence(penHome, penAway) {
    const t1Kicks = [];
    const t2Kicks = [];
    let t1Score = 0;
    let t2Score = 0;
    const maxRounds = Math.max(5, penHome, penAway);
    
    for (let round = 1; round <= maxRounds; round++) {
        // Team 1
        if (t1Score < penHome && (round <= 5 || t1Score === t2Score || t1Score < t2Score + (maxRounds - round + 1))) {
            const remainingGoalsNeeded = penHome - t1Score;
            const remainingKicks = maxRounds - round + 1;
            const prob = remainingGoalsNeeded / remainingKicks;
            if (Math.random() < prob || remainingGoalsNeeded === remainingKicks) {
                t1Kicks.push(true);
                t1Score++;
            } else {
                t1Kicks.push(false);
            }
        } else {
            if (round <= 5 && t1Kicks.length < 5) t1Kicks.push(false);
        }
        
        // Team 2
        if (t2Score < penAway && (round <= 5 || t1Score === t2Score || t2Score < t1Score + (maxRounds - round + 1))) {
            const remainingGoalsNeeded = penAway - t2Score;
            const remainingKicks = maxRounds - round + 1;
            const prob = remainingGoalsNeeded / remainingKicks;
            if (Math.random() < prob || remainingGoalsNeeded === remainingKicks) {
                t2Kicks.push(true);
                t2Score++;
            } else {
                t2Kicks.push(false);
            }
        } else {
            if (round <= 5 && t2Kicks.length < 5) t2Kicks.push(false);
        }
        
        // Check if shootout has ended early in normal rounds
        if (round <= 5) {
            const t1RemainingKicks = 5 - round;
            const t2RemainingKicks = 5 - round;
            if (t1Score > t2Score + t2RemainingKicks || t2Score > t1Score + t1RemainingKicks) {
                break;
            }
        } else {
            if (t1Score !== t2Score) {
                break;
            }
        }
    }
    
    // Safety check to match counts exactly
    while (t1Score < penHome) {
        t1Kicks.push(true);
        t1Score++;
    }
    while (t2Score < penAway) {
        t2Kicks.push(true);
        t2Score++;
    }
    
    return { t1Kicks, t2Kicks };
}

// Option 3 canvas grouped horizontal bar chart
function drawComparisonChart(top5) {
    const canvas = document.getElementById('comparison-chart');
    if (!canvas) return;
    
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = 150 * dpr;
    
    const ctx = canvas.getContext('2d');
    ctx.scale(dpr, dpr);
    
    const width = rect.width;
    const height = 150;
    
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid lines
    ctx.strokeStyle = '#1a1a1a';
    ctx.lineWidth = 1;
    ctx.font = '9px "JetBrains Mono", monospace';
    ctx.fillStyle = '#666';
    
    const chartLeft = 100;
    const chartWidth = width - chartLeft - 20;
    
    let maxProb = 5;
    top5.forEach(t => {
        maxProb = Math.max(maxProb, t.dcRate, t.h2hRate, t.mixRate);
    });
    maxProb = Math.ceil(maxProb / 5) * 5;
    
    const numLines = 5;
    for (let i = 0; i <= numLines; i++) {
        const val = (maxProb / numLines) * i;
        const x = chartLeft + (val / maxProb) * chartWidth;
        ctx.beginPath();
        ctx.moveTo(x, 5);
        ctx.lineTo(x, height - 20);
        ctx.stroke();
        
        ctx.textAlign = 'center';
        ctx.fillText(val.toFixed(0) + '%', x, height - 8);
    }
    
    // Draw horizontal bars
    const numCountries = top5.length;
    const groupHeight = (height - 30) / numCountries;
    const barHeight = 5;
    const barSpacing = 2;
    
    top5.forEach((t, i) => {
        const groupY = 10 + i * groupHeight;
        
        ctx.fillStyle = '#fff';
        ctx.font = 'bold 9px "JetBrains Mono", monospace';
        ctx.textAlign = 'right';
        ctx.fillText(t.name.toUpperCase(), chartLeft - 10, groupY + groupHeight / 2 + 3);
        
        // Dixon Coles (Green)
        const dcW = (t.dcRate / maxProb) * chartWidth;
        ctx.fillStyle = '#30d158';
        ctx.fillRect(chartLeft, groupY + 1, Math.max(1, dcW), barHeight);
        
        // H2H (Blue)
        const h2hW = (t.h2hRate / maxProb) * chartWidth;
        ctx.fillStyle = '#0a84ff';
        ctx.fillRect(chartLeft, groupY + 1 + barHeight + barSpacing, Math.max(1, h2hW), barHeight);
        
        // Hybrid (Orange)
        const mixW = (t.mixRate / maxProb) * chartWidth;
        ctx.fillStyle = '#ff9f0a';
        ctx.fillRect(chartLeft, groupY + 1 + (barHeight + barSpacing) * 2, Math.max(1, mixW), barHeight);
    });
}

// Option 2 Head-to-Head History Loader
let h2hHistoryData = null;

async function updateH2HHistory() {
    const t1 = selectTeam1.value;
    const t2 = selectTeam2.value;
    if (!h2hHistoryTbody) return;
    
    if (!h2hHistoryData) {
        try {
            const resp = await fetch('data_copy/h2h_history.json');
            h2hHistoryData = await resp.json();
        } catch (e) {
            console.error("Error loading H2H history:", e);
            h2hHistoryTbody.innerHTML = '<tr><td colspan="4" class="terminal-msg" style="color: #ff3b30;">Erreur lors du chargement de l\'historique.</td></tr>';
            return;
        }
    }
    
    const key = [t1, t2].sort().join('_');
    const matches = h2hHistoryData[key] || [];
    
    if (matches.length === 0) {
        h2hHistoryTbody.innerHTML = '<tr><td colspan="4" class="terminal-msg">Aucune confrontation historique officielle enregistrée entre ces deux nations.</td></tr>';
        return;
    }
    
    h2hHistoryTbody.innerHTML = '';
    matches.forEach(m => {
        const tr = document.createElement('tr');
        
        let formattedMatch = "";
        let scoreStr = `${m.home_score} - ${m.away_score}`;
        
        if (m.home === t1) {
            formattedMatch = `<strong>${m.home}</strong> vs ${m.away}`;
        } else {
            formattedMatch = `${m.home} vs <strong>${m.away}</strong>`;
        }
        
        let scoreStyle = "";
        if (m.home_score === m.away_score) {
            scoreStyle = "color: var(--text-secondary);";
        } else {
            const homeWon = m.home_score > m.away_score;
            const t1IsHome = m.home === t1;
            const t1Won = (homeWon && t1IsHome) || (!homeWon && !t1IsHome);
            scoreStyle = t1Won ? "color: #30d158; font-weight: bold;" : "color: #ff3b30;";
        }
        
        tr.innerHTML = `
            <td class="mono">${m.date}</td>
            <td>${formattedMatch}</td>
            <td class="mono text-right" style="${scoreStyle}">${scoreStr}</td>
            <td style="color: var(--text-muted);">${m.tournament}</td>
        `;
        h2hHistoryTbody.appendChild(tr);
    });
}

// Collapsible header event listener for H2H
if (h2hHeader) {
    h2hHeader.addEventListener('click', () => {
        if (h2hContent.style.display === 'none') {
            h2hContent.style.display = 'block';
            h2hToggleIcon.textContent = '[ COLLAPSE ]';
            updateH2HHistory();
        } else {
            h2hContent.style.display = 'none';
            h2hToggleIcon.textContent = '[ EXPAND ]';
        }
    });
}

// --- VALUE BETTING ASSISTANT IMPLEMENTATION ---

const selectBettingT1 = document.getElementById('select-betting-t1');
const selectBettingT2 = document.getElementById('select-betting-t2');
const selectBettingModel = document.getElementById('select-betting-model');

const inputOdds1 = document.getElementById('input-odds-1');
const inputOddsN = document.getElementById('input-odds-N');
const inputOdds2 = document.getElementById('input-odds-2');

const valBook1 = document.getElementById('val-book-1');
const valBookN = document.getElementById('val-book-N');
const valBook2 = document.getElementById('val-book-2');

const valProb1 = document.getElementById('val-prob-1');
const valProbN = document.getElementById('val-prob-N');
const valProb2 = document.getElementById('val-prob-2');

const valFair1 = document.getElementById('val-fair-1');
const valFairN = document.getElementById('val-fair-N');
const valFair2 = document.getElementById('val-fair-2');

const valIdx1 = document.getElementById('val-idx-1');
const valIdxN = document.getElementById('val-idx-N');
const valIdx2 = document.getElementById('val-idx-2');

const bettingAlertContainer = document.getElementById('betting-alert-container');

function updateBettingDashboard() {
    if (!selectBettingT1 || !selectBettingT2) return;
    
    const t1Name = selectBettingT1.value;
    const t2Name = selectBettingT2.value;
    const modelName = selectBettingModel.value;
    
    // Prevent same team selections
    if (t1Name === t2Name) {
        if (bettingAlertContainer) {
            bettingAlertContainer.innerHTML = `
                <div class="terminal-msg" style="color: #ff3b30; border: 1px dashed #ff3b30; padding: 10px;">
                    ERREUR : VEUILLEZ SÉLECTIONNER DEUX ÉQUIPES DIFFÉRENTES.
                </div>
            `;
        }
        // Clear metrics
        const placeholders = [valProb1, valProbN, valProb2, valFair1, valFairN, valFair2, valIdx1, valIdxN, valIdx2];
        placeholders.forEach(el => { if (el) el.textContent = "-"; });
        return;
    }
    
    // Get probabilities from the selected model
    const probs = calculate1N2Probabilities(t1Name, t2Name, modelName);
    
    // Calculate fair odds
    const fair1 = probs.p1 > 0 ? (100 / probs.p1) : 999.0;
    const fairN = probs.pN > 0 ? (100 / probs.pN) : 999.0;
    const fair2 = probs.p2 > 0 ? (100 / probs.p2) : 999.0;
    
    // Update DOM probabilities and fair odds
    if (valProb1) valProb1.textContent = `${probs.p1.toFixed(1)}%`;
    if (valProbN) valProbN.textContent = `${probs.pN.toFixed(1)}%`;
    if (valProb2) valProb2.textContent = `${probs.p2.toFixed(1)}%`;
    
    if (valFair1) valFair1.textContent = fair1.toFixed(2);
    if (valFairN) valFairN.textContent = fairN.toFixed(2);
    if (valFair2) valFair2.textContent = fair2.toFixed(2);
    
    // Retrieve bookmaker odds
    const b1 = parseFloat(inputOdds1.value) || 0;
    const bN = parseFloat(inputOddsN.value) || 0;
    const b2 = parseFloat(inputOdds2.value) || 0;
    
    if (valBook1) valBook1.textContent = b1 > 0 ? b1.toFixed(2) : "-";
    if (valBookN) valBookN.textContent = bN > 0 ? bN.toFixed(2) : "-";
    if (valBook2) valBook2.textContent = b2 > 0 ? b2.toFixed(2) : "-";
    
    // Calculate values
    const val1 = b1 > 0 ? ((b1 / fair1) - 1.0) * 100.0 : -100.0;
    const valN = bN > 0 ? ((bN / fairN) - 1.0) * 100.0 : -100.0;
    const val2 = b2 > 0 ? ((b2 / fair2) - 1.0) * 100.0 : -100.0;
    
    // Display values
    displayValueIndicator(valIdx1, val1, b1);
    displayValueIndicator(valIdxN, valN, bN);
    displayValueIndicator(valIdx2, val2, b2);
    
    // Generate recommendation panel
    let bestValueOption = null;
    let bestValuePct = 0;
    
    if (b1 > 0 && val1 > 0 && val1 > bestValuePct) { bestValueOption = "1"; bestValuePct = val1; }
    if (bN > 0 && valN > 0 && valN > bestValuePct) { bestValueOption = "N"; bestValuePct = valN; }
    if (b2 > 0 && val2 > 0 && val2 > bestValuePct) { bestValueOption = "2"; bestValuePct = val2; }
    
    if (bettingAlertContainer) {
        if (bestValueOption) {
            const betLabel = bestValueOption === "1" ? `Victoire de ${t1Name} (1)` : (bestValueOption === "N" ? "Match Nul (N)" : `Victoire de ${t2Name} (2)`);
            const oddsVal = bestValueOption === "1" ? b1 : (bestValueOption === "N" ? bN : b2);
            const fairVal = bestValueOption === "1" ? fair1 : (bestValueOption === "N" ? fairN : fair2);
            
            bettingAlertContainer.innerHTML = `
                <div class="terminal-msg" style="color: #30d158; border: 1px dashed #30d158; padding: 15px; background: rgba(48, 209, 88, 0.05);">
                    <strong style="color: #30d158; text-shadow: 0 0 5px rgba(48,209,88,0.5);">> [ VALUE BET DÉTECTÉ ]</strong><br>
                    Option recommandée : <strong>${betLabel}</strong><br>
                    Cote Bookmaker : <strong>${oddsVal.toFixed(2)}</strong> (Cote Équitable : ${fairVal.toFixed(2)})<br>
                    Marge théorique (Value) : <strong style="color: #30d158;">+${bestValuePct.toFixed(1)}%</strong>
                </div>
            `;
        } else {
            bettingAlertContainer.innerHTML = `
                <div class="terminal-msg" style="color: var(--text-secondary); border: 1px dashed var(--border-color); padding: 15px;">
                    > AUCUNE OPPORTUNITÉ DE VALUE BET DÉTECTÉE ACTUELLEMENT.<br>
                    Saisissez les cotes de votre bookmaker à gauche pour analyser les opportunités.
                </div>
            `;
        }
    }
}

function displayValueIndicator(element, val, b) {
    if (!element) return;
    if (b <= 0) {
        element.textContent = "-";
        element.style.color = "var(--text-secondary)";
        return;
    }
    
    element.textContent = `${val > 0 ? '+' : ''}${val.toFixed(1)}%`;
    if (val > 0) {
        element.style.color = "#30d158"; // Green
    } else {
        element.style.color = "#ff3b30"; // Red
    }
}

function calculate1N2Probabilities(t1Name, t2Name, modelName) {
    const t1 = getTeamStats(t1Name);
    const t2 = getTeamStats(t2Name);
    if (!t1 || !t2) return { p1: 33.3, pN: 33.3, p2: 33.3 };
    
    const venue = get2026WorldCupVenue(t1Name, t2Name);
    const stats = predictMatchStats(t1, t2, venue, modelName);
    const lambda_1 = stats.lambda_1;
    const lambda_2 = stats.lambda_2;
    
    const isDixonColes = modelName === 'dixon_coles_teams';
    const isMix = modelName === 'mix_ensemble';
    const rho = isDixonColes ? MODEL_PARAMETERS.dixon_coles_teams.rho : (isMix ? MODEL_PARAMETERS.dixon_coles_teams.rho * 0.5 : 0);
    
    let w1 = 0, draw = 0, w2 = 0;
    const sims = 5000;
    for (let i = 0; i < sims; i++) {
        let g1, g2;
        if (isDixonColes || isMix) {
            const score = sampleDixonColes(lambda_1, lambda_2, rho);
            g1 = score[0];
            g2 = score[1];
        } else {
            g1 = samplePoisson(lambda_1);
            g2 = samplePoisson(lambda_2);
        }
        if (g1 > g2) w1++;
        else if (g1 === g2) draw++;
        else w2++;
    }
    
    return {
        p1: (w1 / sims) * 100,
        pN: (draw / sims) * 100,
        p2: (w2 / sims) * 100
    };
}

// Attach event listeners for inputs
[selectBettingT1, selectBettingT2, selectBettingModel].forEach(el => {
    if (el) el.addEventListener('change', updateBettingDashboard);
});

[inputOdds1, inputOddsN, inputOdds2].forEach(el => {
    if (el) el.addEventListener('input', updateBettingDashboard);
});

// --- WINAMAX ODDS SYNC LOGIC ---

const btnSyncWinamaxOdds = document.getElementById('btn-sync-winamax-odds');

if (btnSyncWinamaxOdds) {
    btnSyncWinamaxOdds.addEventListener('click', async () => {
        if (!selectBettingT1 || !selectBettingT2) return;
        
        const t1Name = selectBettingT1.value;
        const t2Name = selectBettingT2.value;
        
        btnSyncWinamaxOdds.textContent = "CHARGEMENT...";
        btnSyncWinamaxOdds.disabled = true;
        
        try {
            const response = await fetch('/data_copy/winamax_odds.json');
            if (!response.ok) throw new Error("Impossible de charger les cotes Winamax");
            
            const winamaxData = await response.json();
            const odds = matchWinamaxOdds(t1Name, t2Name, winamaxData);
            
            if (odds) {
                inputOdds1.value = odds[0].toFixed(2);
                inputOddsN.value = odds[1].toFixed(2);
                inputOdds2.value = odds[2].toFixed(2);
                
                updateBettingDashboard();
                
                // Show floating cyberpunk notification
                showBettingNotification(`COTES SYNC (Winamax) : ${odds[0].toFixed(2)} | ${odds[1].toFixed(2)} | ${odds[2].toFixed(2)}`, "#30d158");
            } else {
                // Reset inputs
                inputOdds1.value = "";
                inputOddsN.value = "";
                inputOdds2.value = "";
                updateBettingDashboard();
                showBettingNotification("Aucune cote Winamax en cours pour ce match.", "#ff3b30");
            }
        } catch (error) {
            console.error(error);
            showBettingNotification("Erreur lors de la synchronisation des cotes.", "#ff3b30");
        } finally {
            btnSyncWinamaxOdds.textContent = "SYNC COTES EN DIRECT (WINAMAX)";
            btnSyncWinamaxOdds.disabled = false;
        }
    });
}

const FRENCH_TO_ENGLISH_TEAMS = {
    "algerie": "Algeria",
    "argentine": "Argentina",
    "autriche": "Austria",
    "jordanie": "Jordan",
    "australie": "Australia",
    "paraguay": "Paraguay",
    "turquie": "Türkiye",
    "etats-unis": "United States",
    "belgique": "Belgium",
    "egypte": "Egypt",
    "iran": "IR Iran",
    "ir iran": "IR Iran",
    "nouvelle-zelande": "New Zealand",
    "nouvelle zelande": "New Zealand",
    "bosnie-herzegovine": "Bosnia-Herzegovina",
    "bosnie herzegovine": "Bosnia-Herzegovina",
    "canada": "Canada",
    "qatar": "Qatar",
    "suisse": "Switzerland",
    "bresil": "Brazil",
    "haiti": "Haiti",
    "maroc": "Morocco",
    "ecosse": "Scotland",
    "cap-vert": "Cape Verde",
    "cap vert": "Cape Verde",
    "arabie saoudite": "Saudi Arabia",
    "espagne": "Spain",
    "uruguay": "Uruguay",
    "colombie": "Colombia",
    "rd congo": "Congo DR",
    "congo rd": "Congo DR",
    "portugal": "Portugal",
    "ouzbekistan": "Uzbekistan",
    "croatie": "Croatia",
    "angleterre": "England",
    "ghana": "Ghana",
    "panama": "Panama",
    "curacao": "Curaçao",
    "cote d'ivoire": "Côte d'Ivoire",
    "cote d ivoire": "Côte d'Ivoire",
    "equateur": "Ecuador",
    "allemagne": "Germany",
    "republique tcheque": "Czechia",
    "coree du sud": "Korea Republic",
    "mexique": "Mexico",
    "afrique du sud": "South Africa",
    "france": "France",
    "irak": "Iraq",
    "norvege": "Norway",
    "senegal": "Senegal",
    "japon": "Japan",
    "pays-bas": "Netherlands",
    "pays bas": "Netherlands",
    "suede": "Sweden",
    "tunisie": "Tunisia"
};

function matchWinamaxOdds(t1, t2, winamaxData) {
    const clean = (s) => s.toLowerCase()
                          .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
                          .replace(/south korea/g, "coree du sud")
                          .replace(/korea republic/g, "coree du sud")
                          .replace(/brazil/g, "bresil")
                          .replace(/ir iran/g, "iran")
                          .replace(/united states/g, "etats-unis")
                          .replace(/saudi arabia/g, "arabie saoudite")
                          .replace(/cote d'ivoire/g, "cote d ivoire")
                          .trim();
                          
    const ct1 = clean(t1);
    const ct2 = clean(t2);
    
    const translateToDbName = (name) => {
        const cleaned = clean(name);
        return FRENCH_TO_ENGLISH_TEAMS[cleaned] || name;
    };
    
    const dbT1 = translateToDbName(t1);
    const dbT2 = translateToDbName(t2);
    
    for (const matchTitle in winamaxData) {
        const parts = matchTitle.split(" - ");
        if (parts.length === 2) {
            const w1Db = translateToDbName(parts[0]);
            const w2Db = translateToDbName(parts[1]);
            
            if (clean(w1Db) === clean(dbT1) && clean(w2Db) === clean(dbT2)) {
                return winamaxData[matchTitle];
            }
            if (clean(w1Db) === clean(dbT2) && clean(w2Db) === clean(dbT1)) {
                const odds = winamaxData[matchTitle];
                return [odds[2], odds[1], odds[0]]; // Swap odds
            }
        }
    }
    return null;
}

function showBettingNotification(text, color) {
    if (bettingAlertContainer) {
        bettingAlertContainer.innerHTML = `
            <div class="terminal-msg" style="color: ${color}; border: 1px dashed ${color}; padding: 10px; font-family: var(--font-mono); font-size: 11px;">
                > ${text.toUpperCase()}
            </div>
        `;
    }
}


// --- TOURNAMENT CALENDAR & LIVE ENGINE ---

const selectCalendarFilter = document.getElementById('select-calendar-filter');
const calendarGrid = document.getElementById('calendar-grid');

// Seeded pseudorandom functions
function seededRandom(seed) {
    let x = Math.sin(seed) * 10000;
    return x - Math.floor(x);
}

function getSeededScore(home, away, groupName, round) {
    let seed = 0;
    const hashStr = home + away + groupName + round;
    for (let i = 0; i < hashStr.length; i++) {
        seed += hashStr.charCodeAt(i) * (i + 1);
    }
    
    const t1 = getTeamStats(home);
    const t2 = getTeamStats(away);
    if (!t1 || !t2) return { g1: 0, g2: 0 };
    
    const venue = get2026WorldCupVenue(home, away);
    const stats = predictMatchStats(t1, t2, venue, "mix_ensemble");
    
    const samplePoissonSeeded = (lambda, sVal) => {
        let L = Math.exp(-lambda);
        let k = 0;
        let p = 1;
        let iter = 0;
        do {
            k++;
            sVal = seededRandom(sVal + k);
            p *= sVal;
            iter++;
        } while (p > L && iter < 100);
        return k - 1;
    };
    
    const g1 = samplePoissonSeeded(stats.lambda_1, seed);
    const g2 = samplePoissonSeeded(stats.lambda_2, seed + 999);
    return { g1, g2 };
}

// Live updating matches on June 21, 2026
const liveMatches = [
    { id: "B_5", home: "Australia", away: "United States", group: "B", date: "2026-06-21", status: "LIVE", minute: 48, g1: 0, g2: 1, l1: 1.1, l2: 1.6 },
    { id: "B_6", home: "Paraguay", away: "Türkiye", group: "B", date: "2026-06-21", status: "LIVE", minute: 71, g1: 1, g2: 2, l1: 0.9, l2: 1.8 }
];

// Live ticker thread
setInterval(() => {
    let updated = false;
    liveMatches.forEach(m => {
        if (m.status === "LIVE") {
            m.minute += 1;
            
            // Check for goal probability (Poisson rate per minute)
            // Average ~2.5 goals per match = ~0.027 goals per minute per team
            if (Math.random() < (m.l1 / 90)) {
                m.g1 += 1;
                updated = true;
                triggerLiveNotification(`BUT POUR ${m.home.toUpperCase()} (${m.g1}-${m.g2}, ${m.minute}') !`);
            }
            if (Math.random() < (m.l2 / 90)) {
                m.g2 += 1;
                updated = true;
                triggerLiveNotification(`BUT POUR ${m.away.toUpperCase()} (${m.g1}-${m.g2}, ${m.minute}') !`);
            }
            
            if (m.minute >= 90) {
                m.status = "TERMINÉ";
                triggerLiveNotification(`MATCH TERMINÉ : ${m.home.toUpperCase()} ${m.g1}-${m.g2} ${m.away.toUpperCase()} !`);
            }
            updated = true;
        }
    });
    
    // Re-render if looking at calendar
    if (updated && viewCalendar && !viewCalendar.classList.contains('terminal-workspace-hidden')) {
        renderCalendar();
    }
}, 3000); // Ticks every 3 seconds (~1 match minute)

function triggerLiveNotification(text) {
    const notifyBox = document.createElement('div');
    notifyBox.style.position = 'fixed';
    notifyBox.style.bottom = '40px';
    notifyBox.style.right = '20px';
    notifyBox.style.background = '#000';
    notifyBox.style.border = '1px solid #30d158';
    notifyBox.style.color = '#30d158';
    notifyBox.style.boxShadow = '0 0 10px rgba(48,209,88,0.4)';
    notifyBox.style.padding = '12px 20px';
    notifyBox.style.fontFamily = 'var(--font-mono)';
    notifyBox.style.fontSize = '11px';
    notifyBox.style.zIndex = '99999';
    notifyBox.innerHTML = `<strong>> LIVE TICKER :</strong> ${text.toUpperCase()}`;
    
    document.body.appendChild(notifyBox);
    setTimeout(() => {
        notifyBox.style.transition = 'opacity 0.8s';
        notifyBox.style.opacity = '0';
        setTimeout(() => notifyBox.remove(), 800);
    }, 4000);
}

function generateCalendarMatches() {
    const calendarMatches = [];
    
    for (const groupName in TOURNAMENT_GROUPS) {
        const teams = TOURNAMENT_GROUPS[groupName];
        
        // Journée 1
        calendarMatches.push({
            group: groupName,
            round: "J1",
            roundName: "Journée 1",
            home: teams[0],
            away: teams[1],
            date: getMatchDate(groupName, 1)
        });
        calendarMatches.push({
            group: groupName,
            round: "J1",
            roundName: "Journée 1",
            home: teams[2],
            away: teams[3],
            date: getMatchDate(groupName, 1)
        });
        
        // Journée 2
        calendarMatches.push({
            group: groupName,
            round: "J2",
            roundName: "Journée 2",
            home: teams[0],
            away: teams[2],
            date: getMatchDate(groupName, 2)
        });
        calendarMatches.push({
            group: groupName,
            round: "J2",
            roundName: "Journée 2",
            home: teams[1],
            away: teams[3],
            date: getMatchDate(groupName, 2)
        });
        
        // Journée 3
        calendarMatches.push({
            group: groupName,
            round: "J3",
            roundName: "Journée 3",
            home: teams[0],
            away: teams[3],
            date: getMatchDate(groupName, 3)
        });
        calendarMatches.push({
            group: groupName,
            round: "J3",
            roundName: "Journée 3",
            home: teams[1],
            away: teams[2],
            date: getMatchDate(groupName, 3)
        });
    }
    
    // Sort matches chronologically
    return calendarMatches.sort((a, b) => a.date.localeCompare(b.date));
}

function getMatchDate(groupName, roundNum) {
    if (roundNum === 1) {
        if (groupName === "A" || groupName === "B") return "2026-06-11";
        if (groupName === "C" || groupName === "D") return "2026-06-12";
        if (groupName === "E" || groupName === "F") return "2026-06-13";
        if (groupName === "G" || groupName === "H") return "2026-06-14";
        return "2026-06-15";
    }
    if (roundNum === 2) {
        if (groupName === "A" || groupName === "B") return "2026-06-16";
        if (groupName === "C" || groupName === "D") return "2026-06-17";
        if (groupName === "E" || groupName === "F") return "2026-06-18";
        if (groupName === "G" || groupName === "H") return "2026-06-19";
        return "2026-06-20";
    }
    if (roundNum === 3) {
        if (groupName === "A" || groupName === "B" || groupName === "C") return "2026-06-21";
        if (groupName === "D" || groupName === "E" || groupName === "F") return "2026-06-22";
        if (groupName === "G" || groupName === "H" || groupName === "I") return "2026-06-23";
        return "2026-06-24";
    }
    return "2026-06-21";
}

function renderCalendar() {
    if (!calendarGrid) return;
    calendarGrid.innerHTML = '';
    
    const filter = selectCalendarFilter.value;
    const allMatches = generateCalendarMatches();
    
    allMatches.forEach(m => {
        if (filter !== "all" && m.round !== filter) return;
        
        let statusText = "";
        let scoreText = "";
        let statusStyle = "";
        let borderStyle = "border: 1px solid var(--border-color);";
        
        let homeStyle = "color: #fff; padding: 2px 6px; border-radius: 2px;";
        let awayStyle = "color: #fff; padding: 2px 6px; border-radius: 2px;";
        
        const isLive = m.date === "2026-06-21" && (m.home === "Australia" || m.home === "Paraguay");
        
        if (isLive) {
            const liveInfo = liveMatches.find(lm => lm.home === m.home);
            if (liveInfo && liveInfo.status === "LIVE") {
                statusText = `● LIVE (${liveInfo.minute}')`;
                scoreText = `${liveInfo.g1} - ${liveInfo.g2}`;
                statusStyle = "color: #30d158; font-weight: bold; animation: pulse-neon 1.5s infinite;";
                borderStyle = "border: 1px solid #30d158; box-shadow: 0 0 5px rgba(48,209,88,0.15);";
            } else {
                const liveInfoClosed = liveMatches.find(lm => lm.home === m.home);
                statusText = "TERMINÉ";
                scoreText = `${liveInfoClosed.g1} - ${liveInfoClosed.g2}`;
                statusStyle = "color: var(--text-secondary);";
                
                if (liveInfoClosed.g1 > liveInfoClosed.g2) {
                    homeStyle += " background: rgba(48, 209, 88, 0.15); color: #30d158;";
                    awayStyle += " background: rgba(255, 69, 58, 0.15); color: #ff453a;";
                } else if (liveInfoClosed.g1 < liveInfoClosed.g2) {
                    homeStyle += " background: rgba(255, 69, 58, 0.15); color: #ff453a;";
                    awayStyle += " background: rgba(48, 209, 88, 0.15); color: #30d158;";
                }
            }
        } else if (m.date < "2026-06-21" || (m.date === "2026-06-21" && m.home !== "Australia" && m.home !== "Paraguay" && m.group !== "C")) {
            const score = getSeededScore(m.home, m.away, m.group, m.round);
            statusText = "TERMINÉ";
            scoreText = `${score.g1} - ${score.g2}`;
            statusStyle = "color: var(--text-secondary);";
            
            if (score.g1 > score.g2) {
                homeStyle += " background: rgba(48, 209, 88, 0.15); color: #30d158;";
                awayStyle += " background: rgba(255, 69, 58, 0.15); color: #ff453a;";
            } else if (score.g1 < score.g2) {
                homeStyle += " background: rgba(255, 69, 58, 0.15); color: #ff453a;";
                awayStyle += " background: rgba(48, 209, 88, 0.15); color: #30d158;";
            }
        } else {
            statusText = "À VENIR";
            scoreText = "-";
            statusStyle = "color: var(--bbg-amber);";
        }
        
        const card = document.createElement('div');
        card.className = "calendar-card";
        card.setAttribute("style", `${borderStyle} background: #0a0b0d; padding: 12px; display: flex; flex-direction: column; justify-content: space-between; height: 160px; box-sizing: border-box;`);
        card.innerHTML = `
            <div style="display: flex; justify-content: space-between; font-size: 9px; color: var(--text-muted); font-family: var(--font-mono);">
                <span>${m.date}</span>
                <span>GROUPE ${m.group}</span>
            </div>
            <div style="font-size: 11px; margin: 10px 0; text-align: center; font-family: var(--font-mono); display: flex; flex-direction: column; gap: 4px;">
                <div style="${homeStyle} text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${m.home}</div>
                <div style="font-size: 9px; color: var(--text-muted);">vs</div>
                <div style="${awayStyle} text-overflow: ellipsis; overflow: hidden; white-space: nowrap;">${m.away}</div>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px dashed var(--border-color); padding-top: 6px;">
                <span class="mono" style="${statusStyle}; font-size: 9px;">${statusText}</span>
                <span class="mono" style="font-weight: bold; font-size: 11px; color: var(--bbg-amber);">${scoreText}</span>
            </div>
            <div style="display: flex; gap: 6px; margin-top: 8px;">
                <button class="btn-calendar-action btn-pred" data-home="${m.home}" data-away="${m.away}" style="font-size: 9px; padding: 2px 4px; flex: 1; text-align: center; height: 20px; border: 1px solid var(--border-color); background: #000; color: var(--bbg-amber); font-family: var(--font-mono); cursor: pointer;">PRÉDIRE</button>
                <button class="btn-calendar-action btn-odds" data-home="${m.home}" data-away="${m.away}" style="font-size: 9px; padding: 2px 4px; flex: 1; text-align: center; height: 20px; border: 1px solid var(--border-color); background: #000; color: #30d158; font-family: var(--font-mono); cursor: pointer;">COTES</button>
            </div>
        `;
        calendarGrid.appendChild(card);
    });
    
    // Bind actions
    calendarGrid.querySelectorAll('.btn-pred').forEach(btn => {
        btn.addEventListener('click', () => {
            const home = btn.getAttribute('data-home');
            const away = btn.getAttribute('data-away');
            
            if (selectTeam1 && selectTeam2) {
                selectTeam1.value = home;
                selectTeam2.value = away;
                updateTeamDetails();
                switchTab(tabSimulations, viewSimulations);
                setTimeout(() => {
                    if (btnRun) btnRun.click();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                }, 100);
            }
        });
    });
    
    calendarGrid.querySelectorAll('.btn-odds').forEach(btn => {
        btn.addEventListener('click', () => {
            const home = btn.getAttribute('data-home');
            const away = btn.getAttribute('data-away');
            
            const selectBettingT1 = document.getElementById('select-betting-t1');
            const selectBettingT2 = document.getElementById('select-betting-t2');
            
            if (selectBettingT1 && selectBettingT2) {
                selectBettingT1.value = home;
                selectBettingT2.value = away;
                
                if (inputOdds1) inputOdds1.value = "";
                if (inputOddsN) inputOddsN.value = "";
                if (inputOdds2) inputOdds2.value = "";
                
                updateBettingDashboard();
                switchTab(tabBetting, viewBetting);
                
                if (btnSyncWinamaxOdds) {
                    btnSyncWinamaxOdds.click();
                }
                
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    });
}

if (selectCalendarFilter) {
    selectCalendarFilter.addEventListener('change', renderCalendar);
}

