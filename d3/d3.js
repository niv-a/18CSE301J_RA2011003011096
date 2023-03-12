chord = d3
  .chord()
  .padAngle(5 / innerRadius)
  .sortSubgroups(d3.descending);

arc = d3.arc().innerRadius(innerRadius).outerRadius(outerRadius);

ribbon = d3
  .ribbon()
  .radius(innerRadius - 1)
  .padAngle(1 / innerRadius);

chords = chord(shapedData);

shapedData = Object.assign(
  data.map((r) => Object.entries(r).map((v) => +v[1])),
  {
    names: regions,
    colors: colorScale.domain(),
  }
);

handleArcOver = (d, i) => {
  alert(d);
};

data = [
  [
    5330243, 1134523, 702058, 67715, 17432, 0, 7906, 1156, 53438, 7479, 349,
    426, 18579, 5851, 110917, 59, 0, 0, 3906, 0, 0, 0,
  ],
  [
    440310, 1536816, 384488, 7400, 506196, 0, 1674, 0, 0, 3740, 11, 2806, 284,
    9538, 49956, 552, 0, 0, 2831, 0, 0, 0,
  ],
  [
    1217906, 122952, 351474, 1171, 42092, 4476, 8772, 41019, 14513, 887923,
    1350, 20947, 16844, 26888, 83537, 29, 1033, 774, 23764, 0, 0, 0,
  ],
  [
    1537903, 209843, 17351, 714816, 53919, 59, 58420, 10610, 76243, 23082,
    19159, 45243, 167459, 119513, 187368, 4413, 935, 13754, 30584, 175, 73, 32,
  ],
  [
    6524, 119295, 60096, 2057, 6625183, 2069, 9692, 1528, 3465, 13580, 47, 1496,
    2580, 8181, 25645, 9505, 407, 6155, 5602, 28, 34, 1784,
  ],
  [
    22, 0, 128, 0, 21, 482760, 102415, 126, 16363, 166412, 108, 4395501, 11502,
    0, 11699, 21, 0, 0, 320, 0, 0, 0,
  ],
  [
    0, 0, 1977, 1958, 6694, 28041, 5201972, 1430434, 210013, 235, 42267, 21390,
    60989, 11013, 35205, 0, 2416, 338951, 228143, 0, 0, 0,
  ],
  [
    1775, 672, 3703, 838, 387, 0, 830016, 6855917, 1666384, 22802, 41413, 500,
    58524, 4946, 21402, 144, 224, 1358, 86110, 61, 1074, 0,
  ],
  [
    4019, 0, 210, 263, 634, 11811, 312886, 1554981, 11176671, 161692, 1392,
    1473, 54939, 5670, 5030, 37, 0, 15115, 52093, 168, 0, 0,
  ],
  [
    629533, 8537, 3878463, 17163, 28598, 95089, 32939, 4186333, 18402429,
    13808956, 11090, 1326935, 179540, 330699, 596121, 308, 2911, 63460, 147615,
    2, 0, 0,
  ],
  [
    183667, 8588, 78326, 257822, 30740, 5298, 1070557, 1146711, 1152208, 353044,
    667382, 186374, 1690726, 612152, 330596, 6494, 21664, 167953, 206109,
    143076, 3338, 155612,
  ],
  [
    56535, 3408, 20424, 2173, 7977, 5603254, 148357, 92092, 45995, 2097067,
    4833, 10461770, 489026, 267628, 426441, 4743, 2751, 9412, 57416, 43, 58,
    639,
  ],
  [
    1079176, 79409, 215160, 261919, 482609, 41672, 580099, 670724, 2550790,
    1135485, 257917, 2538246, 2050704, 894023, 957178, 311158, 34724, 294082,
    469547, 9528, 284, 894,
  ],
  [
    174606, 245685, 1567424, 28498, 606042, 50007, 439295, 247444, 693595,
    332769, 62930, 3246366, 582720, 3127177, 1593817, 400265, 196761, 2593480,
    200014, 246, 317, 573,
  ],
  [
    566243, 518996, 3840948, 56551, 770086, 1107365, 542957, 880342, 1103989,
    3840848, 57748, 6069456, 741588, 5443260, 2974052, 286014, 76826, 767077,
    370700, 1744, 16, 185,
  ],
  [
    1047, 194, 381, 237, 1136, 10, 10715, 5518, 6816, 2465, 512, 2037, 21554,
    21804, 136340, 863937, 14585, 103440, 242204, 0, 0, 19,
  ],
  [
    225, 259, 962, 316, 525, 6, 48709, 3595, 8549, 7167, 1116, 8327, 10353,
    45401, 32853, 42696, 641408, 196279, 835517, 1, 5, 0,
  ],
  [
    3628, 10274, 9105, 3809, 8394, 215, 216252, 7323, 9542, 82349, 8114, 55010,
    45626, 844423, 193511, 154152, 66337, 6160034, 164799, 304, 229, 1153,
  ],
  [
    1302473, 152831, 723227, 131679, 914965, 166738, 5566198, 4673435, 4988503,
    2062655, 155889, 1953500, 1229757, 2311408, 1398083, 7080566, 15402802,
    4096176, 1374847, 291854, 16469, 52848,
  ],
  [
    28, 0, 1852, 0, 0, 0, 1697, 18339, 4810, 0, 15289, 26, 2167, 388, 46789, 0,
    0, 0, 1002, 6529, 1050, 14499,
  ],
  [
    0, 0, 0, 0, 0, 0, 13257, 45973, 968, 0, 184, 0, 8, 0, 0, 5063, 0, 0, 22662,
    804, 21394, 400,
  ],
  [
    7, 0, 706, 0, 0, 0, 1822, 1344, 217, 0, 5458, 0, 187, 236, 23071, 0, 0, 0,
    3463, 3874, 85, 19416,
  ],
];

regions =
  `Africa - Eastern	Africa - Middle	Africa - Northern	Africa - Southern	Africa - Western	Asia - Central	Asia - Eastern	Asia - South-Eastern	Asia - Southern	Asia - Western	Australia / New Zealand	Europe - Eastern	Europe - Northern	Europe - Southern	Europe - Western	LATAM - Caribbean	LATAM - Central America	LATAM - South America	North America	Oceania - Melanesia	Oceania - Micronesia	Oceania - Polynesia`.split(
    "\t"
  );

colorScale = d3
  .scaleOrdinal()
  .domain(regions)
  .range(
    d3
      .range(regions.length)
      .map((n) => d3.interpolateRainbow(n / regions.length))
  );

formatValue = d3.format(".1~%");

innerRadius = outerRadius - 10;

outerRadius = dimensions.height * 0.5 - 60;

dimensions = Object({ height: 600, width: 600 });
