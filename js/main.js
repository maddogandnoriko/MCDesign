//check out maps for matrix and materials 
// ditch material dataset?
const MCD = {
  // material, matRotation, ??flip??, overlay, overlayrotation
  matrixTwo: [
  [14,0,0,0,0],[2,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[14,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [114,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[114,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[2,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[14,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],
  [14,0,0,0,0]],
  materialsList: {
    0:{id:0,name:"Blank",group:0,overlay:false},
    1:{id:1,name:"Oak Log",group:1,overlay:false},
    2:{id:2,name:"Birch Log",group:1,overlay:false},
    3:{id:3,name:"Jungle Log",group:1,overlay:false},
    4:{id:4,name:"Spruce Log",group:1,overlay:false},
    5:{id:5,name:"Acacia Log",group:1,overlay:false},
    6:{id:6,name:"Dark Oak Log",group:1,overlay:false},
    7:{id:7,name:"Mangrove Log",group:1,overlay:false},
    8:{id:8,name:"Oak Log",group:2,overlay:false},
    9:{id:9,name:"Birch Log",group:2,overlay:false},
    10:{id:10,name:"Jungle Log",group:2,overlay:false},
    11:{id:11,name:"Spruce Log",group:2,overlay:false},
    12:{id:12,name:"Acacia Log",group:2,overlay:false},
    13:{id:13,name:"Dark Oak Log",group:2,overlay:false},
    14:{id:14,name:"Mangrove Log",group:2,overlay:false},
    15:{id:15,name:"Stripped Oak Log",group:3,overlay:false},
    16:{id:16,name:"Stripped Birch Log",group:3,overlay:false},
    17:{id:17,name:"Stripped Jungle Log",group:3,overlay:false},
    18:{id:18,name:"Stripped Spruce Log",group:3,overlay:false},
    19:{id:19,name:"Stripped Acacia Log",group:3,overlay:false},
    20:{id:20,name:"Stripped Dark Oak Log",group:3,overlay:false},
    21:{id:21,name:"Stripped Mangrove Log",group:3,overlay:false},
    22:{id:22,name:"Oak Planks",group:4,overlay:false},
    23:{id:23,name:"Birch Planks",group:4,overlay:false},
    24:{id:24,name:"Jungle Planks",group:4,overlay:false},
    25:{id:25,name:"Spruce Planks",group:4,overlay:false},
    26:{id:26,name:"Acacia Planks",group:4,overlay:false},
    27:{id:27,name:"Dark Oak Planks",group:4,overlay:false},
    28:{id:28,name:"Mangrove Planks",group:4,overlay:false},
    29:{id:29,name:"Oak Steps",group:5,overlay:false},
    30:{id:30,name:"Birch Steps",group:5,overlay:false},
    31:{id:31,name:"Jungle Steps",group:5,overlay:false},
    32:{id:32,name:"Spruce Steps",group:5,overlay:false},
    33:{id:33,name:"Acacia Steps",group:5,overlay:false},
    34:{id:34,name:"Dark Oak Steps",group:5,overlay:false},
    35:{id:35,name:"Mangrove Stairs",group:5,overlay:false},
    36:{id:36,name:"Oak Steps",group:6,overlay:false},
    37:{id:37,name:"Birch Steps",group:6,overlay:false},
    38:{id:38,name:"Jungle Steps",group:6,overlay:false},
    39:{id:39,name:"Spruce Steps",group:6,overlay:false},
    40:{id:40,name:"Acacia Steps",group:6,overlay:false},
    41:{id:41,name:"Dark Oak Steps",group:6,overlay:false},
    42:{id:42,name:"Oak Steps(upside down)",group:7,overlay:false},
    43:{id:43,name:"Birch Steps(upside down)",group:7,overlay:false},
    44:{id:44,name:"Jungle Steps(upside down)",group:7,overlay:false},
    45:{id:45,name:"Spruce Steps(upside down)",group:7,overlay:false},
    46:{id:46,name:"Acacia Steps(upside down)",group:7,overlay:false},
    47:{id:47,name:"Dark Oak Steps(upside down)",group:7,overlay:false},
    48:{id:48,name:"Oak Steps",group:8,overlay:false},
    49:{id:49,name:"Birch Steps",group:8,overlay:false},
    50:{id:50,name:"Jungle Steps",group:8,overlay:false},
    51:{id:51,name:"Spruce Steps",group:8,overlay:false},
    52:{id:52,name:"Acacia Steps",group:8,overlay:false},
    53:{id:53,name:"Dark Oak Steps",group:8,overlay:false},
    54:{id:54,name:"Oak Steps",group:9,overlay:false},
    55:{id:55,name:"Birch Steps",group:9,overlay:false},
    56:{id:56,name:"Jungle Steps",group:9,overlay:false},
    57:{id:57,name:"Spruce Steps",group:9,overlay:false},
    58:{id:58,name:"Acacia Steps",group:9,overlay:false},
    59:{id:59,name:"Dark Oak Steps",group:9,overlay:false},
    60:{id:60,name:"Oak Slab",group:10,overlay:false},
    61:{id:61,name:"Birch Slab",group:10,overlay:false},
    62:{id:62,name:"Jungle Slab",group:10,overlay:false},
    63:{id:63,name:"Spruce Slab",group:10,overlay:false},
    64:{id:64,name:"Acacia Slab",group:10,overlay:false},
    65:{id:65,name:"Dark Oak Slab",group:10,overlay:false},
    66:{id:66,name:"Oak Slab",group:11,overlay:false},
    67:{id:67,name:"Birch Slab",group:11,overlay:false},
    68:{id:68,name:"Jungle Slab",group:11,overlay:false},
    69:{id:69,name:"Spruce Slab",group:11,overlay:false},
    70:{id:70,name:"Acacia Slab",group:11,overlay:false},
    71:{id:71,name:"Dark Oak Slab",group:11,overlay:false},
    72:{id:72,name:"Mangrove Slab",group:11,overlay:false},
    73:{id:73,name:"Oak Trapdoor",group:12,overlay:false},
    74:{id:74,name:"Birch Trapdoor",group:12,overlay:false},
    75:{id:75,name:"Jungle Trapdoor",group:12,overlay:false},
    76:{id:76,name:"Spruce Trapdoor",group:12,overlay:false},
    77:{id:77,name:"Acacia Trapdoor",group:12,overlay:false},
    78:{id:78,name:"Dark Oak Trapdoor",group:12,overlay:false},
    79:{id:79,name:"Mangrove Trapdoor",group:12,overlay:false},
    80:{id:80,name:"Crystal Trapdoor",group:12,overlay:false},
    81:{id:81,name:"Nether Trapdoor",group:12,overlay:false},
    82:{id:82,name:"Emerald Trapdoor",group:12,overlay:false},
    83:{id:83,name:"Oak Pressure Plate",group:13,overlay:false},
    84:{id:84,name:"Oak Door(top)",group:14,overlay:false},
    85:{id:85,name:"Oak Door(bottom)",group:14,overlay:false},
    86:{id:86,name:"Birch Door(top)",group:14,overlay:false},
    87:{id:87,name:"Birch Door(bottom)",group:14,overlay:false},
    88:{id:88,name:"Jungle Door(top)",group:14,overlay:false},
    89:{id:89,name:"Jungle Door(bottom)",group:14,overlay:false},
    90:{id:90,name:"Spruce Door(top)",group:14,overlay:false},
    91:{id:91,name:"Spruce Door(bottom)",group:14,overlay:false},
    92:{id:92,name:"Acacia Door(top)",group:14,overlay:false},
    93:{id:93,name:"Acacia Door(bottom)",group:14,overlay:false},
    94:{id:94,name:"Dark Oak Door(top)",group:14,overlay:false},
    95:{id:95,name:"Dark Oak Door(bottom)",group:14,overlay:false},
    96:{id:96,name:"Mangrove Door(top)",group:14,overlay:false},
    97:{id:97,name:"Mangrove Door(bottom)",group:14,overlay:false},
    98:{id:98,name:"Oak Door",group:15,overlay:false},
    99:{id:99,name:"Birch Door",group:15,overlay:false},
    100:{id:100,name:"Jungle Door",group:15,overlay:false},
    101:{id:101,name:"Spruce Door",group:15,overlay:false},
    102:{id:102,name:"Acacia Door",group:15,overlay:false},
    103:{id:103,name:"Dark Oak Door",group:15,overlay:false},
    104:{id:104,name:"Mangrove Door",group:15,overlay:false},
    105:{id:105,name:"Ore",group:17,overlay:false},
    106:{id:106,name:"Ore",group:17,overlay:false},
    107:{id:107,name:"Ore",group:17,overlay:false},
    108:{id:108,name:"Ore",group:17,overlay:false},
    109:{id:109,name:"Ore",group:17,overlay:false},
    110:{id:110,name:"Ore",group:17,overlay:false},
    111:{id:111,name:"Ore",group:17,overlay:false},
    112:{id:112,name:"Ore",group:17,overlay:false},
    113:{id:113,name:"Ore",group:17,overlay:false},
    114:{id:114,name:"Cobblestone",group:18,overlay:false},
    115:{id:115,name:"Mossy Cobblestone",group:18,overlay:false},
    116:{id:116,name:"",group:18,overlay:false},
    117:{id:117,name:"",group:18,overlay:false},
    118:{id:118,name:"",group:18,overlay:false},
    119:{id:119,name:"",group:18,overlay:false},
    120:{id:120,name:"",group:18,overlay:false},
    121:{id:121,name:"",group:18,overlay:false},
    122:{id:122,name:"",group:18,overlay:false},
    123:{id:123,name:"",group:18,overlay:false},
    124:{id:124,name:"",group:18,overlay:false},
    125:{id:125,name:"",group:18,overlay:false},
    126:{id:126,name:"Brick",group:18,overlay:false},
    127:{id:127,name:"Sandstone",group:18,overlay:false},
    128:{id:128,name:"",group:18,overlay:false},
    129:{id:129,name:"",group:18,overlay:false},
    130:{id:130,name:"Dirt",group:19,overlay:false},
    131:{id:131,name:"Sand",group:19,overlay:false},
    132:{id:132,name:"Mud",group:19,overlay:false},
    133:{id:133,name:"Cobblestone Stairs",group:21,overlay:false},
    134:{id:134,name:"Sandstone Stairs",group:21,overlay:false},
    135:{id:135,name:"Stone Stairs",group:21,overlay:false},
    136:{id:136,name:"Brick Stairs",group:21,overlay:false},
    137:{id:137,name:"Stairs",group:21,overlay:false},
    138:{id:138,name:"Stairs",group:21,overlay:false},
    139:{id:139,name:"Cobblestone Stairs",group:22,overlay:false},
    140:{id:140,name:"Sandstone Stairs",group:22,overlay:false},
    141:{id:141,name:"Stone Stairs",group:22,overlay:false},
    142:{id:142,name:"Brick Stairs",group:22,overlay:false},
    143:{id:143,name:"Stairs",group:22,overlay:false},
    144:{id:144,name:"Stairs",group:22,overlay:false},
    145:{id:145,name:"Cobblestone Stairs(upside down)",group:23,overlay:false},
    146:{id:146,name:"Sandstone Stairs(upside down)",group:23,overlay:false},
    147:{id:147,name:"Stone Stairs(upside down)",group:23,overlay:false},
    148:{id:148,name:"Brick Stairs(upside down)",group:23,overlay:false},
    149:{id:149,name:"Crystal Stairs(upside down)",group:23,overlay:false},
    150:{id:150,name:"Stairs(upside down)",group:23,overlay:false},
    151:{id:151,name:"Oak Fence",group:27,overlay:false},
    152:{id:152,name:"Oak Fence",group:27,overlay:false},
    153:{id:153,name:"Oak Fence",group:27,overlay:false},
    154:{id:154,name:"Oak Fence",group:27,overlay:false},
    155:{id:155,name:"Oak Fence",group:27,overlay:false},
    156:{id:156,name:"Oak Fence",group:27,overlay:false},
    157:{id:157,name:"Oak Fence",group:27,overlay:false},
    158:{id:158,name:"Oak Fence",group:27,overlay:false},
    159:{id:159,name:"Oak Gate",group:27,overlay:true},
    160:{id:160,name:"Oak Gate",group:27,overlay:false},
    161:{id:161,name:"Oak Gate",group:27,overlay:false},
    162:{id:162,name:"Wood Fence",group:27,overlay:false},
    163:{id:163,name:"Wood Fence",group:27,overlay:false},
    164:{id:164,name:"Wood Fence",group:27,overlay:true},
    165:{id:165,name:"Wood Fence",group:27,overlay:false},
    166:{id:166,name:"Wood Fence",group:27,overlay:false},
    167:{id:167,name:"Wood Fence",group:27,overlay:false},
    168:{id:168,name:"Wood Fence",group:27,overlay:true},
    169:{id:169,name:"Wood Fence",group:27,overlay:true},
    170:{id:170,name:"Wood Fence",group:27,overlay:false},
    171:{id:171,name:"Wood Gate",group:27,overlay:false},
    172:{id:172,name:"Wood Gate",group:27,overlay:false},
    173:{id:173,name:"Mangrove Gate",group:27,overlay:false},
    174:{id:174,name:"Stone Wall",group:28,overlay:false},
    175:{id:175,name:"Stone Wall",group:28,overlay:false},
    176:{id:176,name:"Stone Wall",group:28,overlay:false},
    177:{id:177,name:"Stone Wall",group:28,overlay:false},
    178:{id:178,name:"Stone Wall",group:28,overlay:true},
    179:{id:179,name:"Stone Wall",group:28,overlay:false},
    180:{id:180,name:"Stone Wall",group:28,overlay:false},
    181:{id:181,name:"Stone Wall",group:28,overlay:false},
    182:{id:182,name:"Stone Wall",group:28,overlay:false},
    183:{id:183,name:"Stone Wall",group:28,overlay:false},
    184:{id:184,name:"Glass Pane",group:29,overlay:false},
    185:{id:185,name:"Glass Pane",group:29,overlay:false},
    186:{id:186,name:"Glass Pane",group:29,overlay:false},
    187:{id:187,name:"Glass Pane",group:29,overlay:false},
    188:{id:188,name:"Glass Pane",group:29,overlay:false},
    189:{id:189,name:"Glass Pane",group:29,overlay:false},
    190:{id:190,name:"Glass Pane",group:29,overlay:false},
    191:{id:191,name:"Glass Pane",group:29,overlay:false},
    192:{id:192,name:"Glass Pane",group:29,overlay:false},
    193:{id:193,name:"Glass Pane",group:29,overlay:false},
    194:{id:194,name:"Glass Pane",group:29,overlay:false},
    195:{id:195,name:"Glass Pane",group:29,overlay:false},
    196:{id:196,name:"Glass Pane",group:29,overlay:false},
    197:{id:197,name:"Glass Pane",group:29,overlay:false},
    198:{id:198,name:"Glass Pane",group:29,overlay:false},
    199:{id:199,name:"Glass Pane",group:29,overlay:false},
    200:{id:200,name:"Glass Pane",group:30,overlay:false},
    201:{id:201,name:"Glass Pane",group:30,overlay:false},
    202:{id:202,name:"Glass Pane",group:30,overlay:false},
    203:{id:203,name:"Glass Pane",group:30,overlay:false},
    204:{id:204,name:"Glass Pane",group:30,overlay:false},
    205:{id:205,name:"Glass Pane",group:30,overlay:false},
    206:{id:206,name:"Glass Pane",group:30,overlay:false},
    207:{id:207,name:"Glass Pane",group:30,overlay:false},
    208:{id:208,name:"Glass Pane",group:30,overlay:false},
    209:{id:209,name:"Glass Pane",group:30,overlay:false},
    210:{id:210,name:"Glass Pane",group:30,overlay:false},
    211:{id:211,name:"Glass Pane",group:30,overlay:false},
    212:{id:212,name:"Glass Pane",group:30,overlay:false},
    213:{id:213,name:"Glass Pane",group:30,overlay:false},
    214:{id:214,name:"Glass Pane",group:30,overlay:false},
    215:{id:215,name:"Glass Pane",group:30,overlay:false},
    216:{id:216,name:"Mine Rail",group:31,overlay:false},
    217:{id:217,name:"Mine Rail",group:31,overlay:false},
    218:{id:218,name:"Grass",group:33,overlay:false},
    219:{id:219,name:"Grass",group:33,overlay:false},
    220:{id:220,name:"Sapling",group:33,overlay:false},
    221:{id:221,name:"",group:33,overlay:false},
    222:{id:222,name:"",group:33,overlay:false},
    223:{id:223,name:"",group:33,overlay:false},
    224:{id:224,name:"",group:33,overlay:false},
    225:{id:225,name:"",group:33,overlay:false},
    226:{id:226,name:"",group:33,overlay:false},
    227:{id:227,name:"",group:33,overlay:false},
    228:{id:228,name:"",group:33,overlay:false},
    229:{id:229,name:"",group:33,overlay:false},
    230:{id:230,name:"",group:33,overlay:false},
    231:{id:231,name:"",group:33,overlay:false},
    232:{id:232,name:"",group:33,overlay:false},
    233:{id:233,name:"",group:33,overlay:false},
    234:{id:234,name:"",group:33,overlay:false},
    235:{id:235,name:"",group:33,overlay:false},
    236:{id:236,name:"",group:33,overlay:false},
    237:{id:237,name:"",group:33,overlay:false},
    238:{id:238,name:"",group:33,overlay:false},
    239:{id:239,name:"",group:33,overlay:false},
    240:{id:240,name:"Leaves",group:34,overlay:false},
    241:{id:241,name:"Oak Leaves",group:34,overlay:false},
    242:{id:242,name:"Pumpkin",group:35,overlay:false},
    243:{id:243,name:"Pumpkin",group:35,overlay:false},
    244:{id:244,name:"Jack-o-Lantern",group:35,overlay:false},
    245:{id:245,name:"Jack-o-Lantern",group:35,overlay:false},
    246:{id:246,name:"",group:37,overlay:false},
    247:{id:247,name:"",group:37,overlay:false},
    248:{id:248,name:"",group:37,overlay:false},
    249:{id:249,name:"",group:37,overlay:false},
    250:{id:250,name:"",group:37,overlay:false},
    251:{id:251,name:"",group:37,overlay:false},
    252:{id:252,name:"",group:37,overlay:false},
    253:{id:253,name:"",group:37,overlay:false},
    254:{id:254,name:"",group:37,overlay:false},
    255:{id:255,name:"",group:37,overlay:false},
    256:{id:256,name:"",group:37,overlay:false},
    257:{id:257,name:"",group:37,overlay:false},
    258:{id:258,name:"",group:37,overlay:false},
    259:{id:259,name:"",group:37,overlay:false},
    260:{id:260,name:"",group:37,overlay:false},
    261:{id:261,name:"",group:37,overlay:false},
    262:{id:262,name:"Sign",group:38,overlay:false},
    263:{id:263,name:"Ladder",group:38,overlay:false},
    264:{id:264,name:"Torch",group:38,overlay:true},
    265:{id:265,name:"Torch",group:38,overlay:false},
    266:{id:266,name:"T-n-T",group:38,overlay:false},
    267:{id:267,name:"Wool",group:39,overlay:false},
    268:{id:268,name:"Wool",group:39,overlay:false},
    269:{id:269,name:"Wool",group:39,overlay:false},
    270:{id:270,name:"Wool",group:39,overlay:false},
    271:{id:271,name:"Wool",group:39,overlay:false},
    272:{id:272,name:"Wool",group:39,overlay:false},
    273:{id:273,name:"Wool",group:39,overlay:false},
    274:{id:274,name:"Wool",group:39,overlay:false},
    275:{id:275,name:"Wool",group:39,overlay:false},
    276:{id:276,name:"Wool",group:39,overlay:false},
    277:{id:277,name:"Wool",group:39,overlay:false},
    278:{id:278,name:"Wool",group:39,overlay:false},
    279:{id:279,name:"Wool",group:39,overlay:false},
    280:{id:280,name:"Wool",group:39,overlay:false},
    281:{id:281,name:"Wool",group:39,overlay:false},
    282:{id:282,name:"Wool",group:39,overlay:false},
    283:{id:283,name:"Wool",group:39,overlay:false},
    284:{id:284,name:"Iron Door",group:40,overlay:false},
    285:{id:285,name:"Iron Door(top)",group:40,overlay:false},
    286:{id:286,name:"Iron Door(bottom)",group:40,overlay:false},
    287:{id:287,name:"Lever",group:40,overlay:false},
    288:{id:288,name:"Lever",group:40,overlay:false},
    289:{id:289,name:"Cobblestone Button",group:40,overlay:false},
    290:{id:290,name:"Mangrove Button",group:40,overlay:false},
    291:{id:291,name:"Border",group:40,overlay:true},
    292:{id:292,name:"Corner Border",group:40,overlay:true},
    293:{id:293,name:"0",group:41,overlay:true},
    294:{id:294,name:"1",group:41,overlay:true},
    295:{id:295,name:"2",group:41,overlay:true},
    296:{id:296,name:"3",group:41,overlay:true},
    297:{id:297,name:"4",group:41,overlay:true},
    298:{id:298,name:"5",group:41,overlay:true},
    299:{id:299,name:"6",group:41,overlay:true},
    300:{id:300,name:"7",group:41,overlay:true},
    301:{id:301,name:"8",group:41,overlay:true},
    302:{id:302,name:"9",group:41,overlay:true},
    303:{id:303,name:"Stone Brick",group:18,overlay:false},
    304:{id:304,name:"Stone Brick Stairs(side)",group:21,overlay:false},
    305:{id:305,name:"Stone Brick Stairs(top)",group:22,overlay:false},
    306:{id:306,name:"Stone Brick Slab",group:42,overlay:false},
    307:{id:307,name:"Stone Brick",group:18,overlay:false},
    308:{id:308,name:"Stone Brick Stairs(side)",group:21,overlay:false},
    309:{id:309,name:"Stone Brick Stairs(top)",group:22,overlay:false},
    310:{id:310,name:"Stone Brick Slab",group:42,overlay:false},
  },
  settings: {
    fieldWidth: 20,
    fieldHeight: 20,
    spriteWidth: 16,
    spriteHeight: 16,
    picturePadding: 0, // not used now
    backgroundMaterial: 0, // not used now
    designTitle: "My Design",
    designAuthor: "Author",
    version: 0.2,
    
    setSize2: function () {
      const new_width = parseInt(document.querySelector("#setsize_width").value);
      const new_height = parseInt(document.querySelector("#setsize_height").value);
      const new_cellCount = new_width * new_height;
      
      let isConfirmed = true;
      if (
        new_width < MCD.settings.fieldWidth ||
        new_height < MCD.settings.fieldHeight
      ) {
        isConfirmed = confirm(
          "The dimensions you entered are smaller than the current ones (" +
          MCD.settings.fieldWidth +
          "x" +
          MCD.settings.fieldHeight +
          ").\n" +
          "This may cause you to lose part of your design. Are you sure you want to continue?"
        );
      }
      
      if (isConfirmed) {
        let designCopy = [];
      
        // determine extra columns
        let extraCols = 0;
        if(MCD.settings.fieldWidth < new_width){
          extraCols = new_width - MCD.settings.fieldWidth;
        }
        // determine extra rows
        let extraRows = 0;
        if(MCD.settings.fieldHeight < new_height){
          extraRows = new_height - MCD.settings.fieldHeight;
        }
      
        //copy the parts we need
        for(let m = 0; m < MCD.matrixTwo.length; m++){
          const cellData = getGridCell("cell_"+m, MCD.settings.fieldWidth);
         
         if(cellData.X < new_width){
            designCopy.push(MCD.matrixTwo[m]);
            if(
              cellData.X == MCD.settings.fieldWidth-1 &&
              cellData.X < new_width
            ){
              console.log("Adding " + extraCols + " blank cells");
              for(let i = 0; i < extraCols; i++){
                // add a blank cell to matrix
                designCopy.push([0,0,0,0,0]);
              }
            }
          }
        }//end for each
        // add extra blank rows to matrix
        if(extraRows > 0){
          console.log("Adding " + extraRows + "blank rows");
          for(let j = 0; j < extraRows; j++){
            for(let k = 0; k < new_width; k++){
              designCopy.push(0,0,0,0,0);
            }
          }
        }
        //regenerate the matrix
        MCD.matrixTwo =[];
        MCD.matrixTwo.push(...designCopy);
        MCD.settings.fieldWidth = new_width;
        MCD.settings.fieldHeight = new_height;
        reDraw();
        MCD.save();
      }
    },
    setTitle: function(title) {
      MCD.settings.designTitle = title;
      MCD.save();
    },
    setAuthor: function(author) {
      MCD.settings.designAuthor = author;
      MCD.save();
    },
    clearAll2: function() {
      if (confirm("Are you sure you want to erase your whole design?")) {
        MCD.matrixTwo = [];
        for (let y = 0; y < MCD.matrixTwo.length; y++) {
          MCD.matrixTwo[y] = [MCD.env.selectedMaterial, 0, 0, 0, 0];
        }
        reDraw();
        MCD.save();
      }
    },
  },
  env: {
    selectedMaterial: 0,
    selectedTool: "edit",
    selectedOverlay: 0,
    
    setMaterial: function (newMaterialID) {
      MCD.env.selectedMaterial = newMaterialID;
      const cur_material = document.querySelector("#cur_material");
      cur_material.className = "";
      cur_material.classList.add("material_" + newMaterialID);
      let materialName;
      try{
        materialName = MCD.materialsList[newMaterialID].name;
      }catch(e){
        materialName = "unknown";
      }
      let cur_material_name = document.querySelector("#cur_material_name");
      cur_material_name.innerHTML = materialName;
    },
    setTool: function (newTool) {
      console.log("Setting new tool: " + newTool);
      MCD.env.selectedTool = newTool;
      let cur_tool = document.querySelector("#cur_tool");
      cur_tool.className = "";
      cur_tool.classList.add("tool_" + newTool);
      let cur_tool_code = document.querySelector("#cur_tool_code");
      cur_tool_code.innerHTML = newTool;
      setCurToolBorder(newTool);
    },
    showCoords: function (cellData) {
      const coords_container = document.querySelector("#coords_container");
      coords_container.innerHTML = (cellData.X + ", " + cellData.Y);
      document.querySelectorAll(".grid-item")
      .forEach(
        cell => {
          cell.classList.remove("mark_left","mark_top","mark_right","mark_bottom");
        }
      );
  
      //add markers cells
      const lm = cellData.cellNum - cellData.X;
      document.querySelector("#cell_" + lm).classList.add("mark_left");
    
      const tm = cellData.X;
      document.querySelector("#cell_" + tm).classList.add("mark_top");
      
      const rm = cellData.cellNum + (MCD.settings.fieldWidth-1) - cellData.X;
      document.querySelector("#cell_" + rm).classList.add("mark_right");
      
      const bm = cellData.cellNum + ((MCD.settings.fieldHeight-1)-cellData.Y)*MCD.settings.fieldWidth;
      document.querySelector("#cell_" + bm).classList.add("mark_bottom");
    },
  },
  
  load: function() {
    if(localStorage.DesignData) {
      let data = localStorage.getItem("DesignData");
      const port_field = document.querySelector("#port_field");
      port_field.value = data;
      MCD.importFromForm();
    }else{
      alert("Error: No data in localstorage!");
    }
  },
  importFromForm: function() {
    try {
      const port_field = document.querySelector("#port_field");
      const imported = JSON.parse(port_field.value.trim());
      if (typeof imported === "object") {
        if (
          typeof imported.t === "string" &&
          typeof imported.a === "string" &&
          typeof imported.v === "number" &&
          typeof imported.w === "number" &&
          typeof imported.h === "number" &&
          typeof imported.m === "object"
        ) {
          // valid import data
          MCD.settings.designTitle = imported.t;
          MCD.settings.designAuthor = imported.a;
          MCD.settings.version = imported.v;
          MCD.settings.fieldWidth = imported.w;
          MCD.settings.fieldHeight = imported.h;
          MCD.matrixTwo = imported.m;
          reDraw(imported.w, imported.h);
          port_field.value = "";
          const designTitle = document.querySelector("#design_title");
          const designAuthor = document.querySelector("#design_author");
          //const version = document.querySelector("#version");
          const widthfield = document.querySelector("#setsize_width");
          const heightfield = document.querySelector("#setsize_height");
          designTitle.value =imported.t;
          designAuthor.value =imported.a;
          //version.value =imported.v;
          widthfield.value = imported.w;
          heightfield.value = imported.h;
          MCD.save();
        } else {
          alert("The design you pasted was invalid. Please make sure you have copied all of it.");
        }
      } else {
        alert("Failed to import this design. Please make sure you copied all of it.");
      }
    } catch (e) {
      alert("Something went quite wrong while trying to parse the design you pasted. Please make sure you copied all of it.");
    }
  },
  importFromFile: function (event) {
    const fr = new FileReader();
    fr.onload = function() {
      let port_field = document.querySelector("#port_field");
      port_field.value = fr.result;
      MCD.importFromForm(true);
    };
    fr.readAsText(event.target.files[0]);
  },
  save: function () {
    console.log("Saving to LocalStorage");
    const data = MCD.export();
    localStorage.setItem("DesignData", data);
    console.log("Saved data to LS");
  },
  export: function () {
    console.log("Exporting");
    let output = {
      t: MCD.settings.designTitle,
      a: MCD.settings.designAuthor,
      v: MCD.settings.version,
      w: MCD.settings.fieldWidth,
      h: MCD.settings.fieldHeight,
      m: MCD.matrixTwo
    }
    return JSON.stringify(output);
  },
  exportToForm: function () {
    const port_field = document.querySelector("#port_field");
    port_field.value = MCD.export();
  },
  
  // returns object with spritesheet coords ID,X,Y
  getMaterialXY: function (materialID){
    const materialXY = {
      id: materialID,
      X: materialID * MCD.settings.spriteWidth,
      Y: 0,
    };
    return materialXY;
  },
  delete: function(){
    if(confirm("This will delete your saved design. Are you sure?")){
      localStorage.clear();
      document.location.reload();
    }
  },
}

document.addEventListener("DOMContentLoaded", function(){
  initializePage();
  
  document.querySelector("#design_title")
  .addEventListener("change", function (evt) {
    MCD.settings.setTitle(evt.target.value);
  });
  
  document.querySelector("#design_author")
  .addEventListener("change", function (evt) {
    MCD.settings.setAuthor(evt.target.value);
  });

  // material selected
  document.querySelector("#materialsContainer")
  .addEventListener("click", function (evt) {
    if (evt.target.classList.contains("materialPicker")) {
      let materialID = evt.target.dataset.materialid;
      console.log("Material selected: " + evt.target.dataset.materialid);
      MCD.env.setMaterial(materialID);
      MCD.env.setTool("edit");
      if(evt.target.classList.contains("overlayPicker")){
        MCD.env.selectedOverlay = evt.target.dataset.materialid;
        console.log("Overlay Selected: " + evt.target.dataset.materialid);
      }else{
        MCD.env.selectedOverlay = 0;
      }
    }
  });

  // tool selected
  document.querySelectorAll(".toolBtn")
  .forEach(
    div => div.addEventListener("click", function(evt) {
      console.log("Chose a tool: " + evt.target.id);
      MCD.env.setTool(evt.target.id);
    })
  );
  
  // grid cell clicked
  document.querySelector("#newGrid")
  .addEventListener("click", function (evt) {
    console.log("Grid cell clicked");
    if (evt.target.classList.contains("grid-item") || evt.target.nodeName == "IMG") {
      let cellData = getGridCell(evt.target.id);
      console.log("cellData:");
      console.log(cellData);
      MCD.env.showCoords(cellData);
      switch(MCD.env.selectedTool) {
        case "edit":
          editTool(cellData);
          break;
        case "rotate":
          rotateTool(cellData);
          break;
        case "pointer":
          pointerTool(cellData);
          break;
        case "erase":
          eraseTool(cellData);
          break;
        case "move":
          moveTool(cellData);
          break;
        //flip tools
        /*
          if (MCD.env.selectedTool == 3) {
            console.log("Clicked grid square with horizontal flip tool.");
            // set the flip in grid
            if (classes.contains("flip_h")) {
              classes.remove("flip_h");
            } else {
              classes.add("flip_h");
            }
          }
         if (MCD.env.selectedTool == 2) {
          console.log("Clicked grid square with vertical flip tool.");
          // set the material in matrix
          if (classes.contains("flip_v")) {
            classes.remove("flip_v");
          } else {
            classes.add("flip_v");
          }
        } */
        //border tools
        /*
        if (
          MCD.env.selectedTool == "left_border" ||
          MCD.env.selectedTool == "right_border" ||
          MCD.env.selectedTool == "top_border" ||
          MCD.env.selectedTool == "bottom_border" 
        ){
          console.log("Clicked grid square with " + MCD.env.selectedTool +" tool.");
          console.log(cell.classList);
          //if(cell.classList.contains(MCD.env.selectedTool)){
            //cell.classList.remove(MCD.env.selectedTool);
          //}else{
            cell.classList.add(MCD.env.selectedTool);
          //}
        }
        
        MCD.save();
      });
  
      new_row.append(new_cell);
    }*/
        default:
          break;
      }
      MCD.save();
    }
  });

  document.querySelector("#clearform")
  .addEventListener("click", function (evt) {
    MCD.env.clearAll2();
  });
  
  document.querySelector("#deleteLS")
  .addEventListener("click", function (evt) {
    MCD.delete();
  });
  
  document.querySelector("#updGridSize")
  .addEventListener("click", function (evt) {
    MCD.settings.setSize2();
  });
  
  document.querySelector("#expToForm")
  .addEventListener("click", function (evt) {
    MCD.exportToForm();
  });
  
  document.querySelector("#impFromForm")
  .addEventListener("click", function (evt) {
    if (confirm("Importing a design will erase your current design. If you want to keep your work, export your design first and save it somewhere.\nDo you still want to import this design now?")) {
      MCD.importFromForm();
    }
  });
  
  document.querySelector("#importFileLabel")
  .addEventListener("click", function (evt) {
    console.log("Clicked Import File button");
    document.querySelector("#importFile").click(); 
  });
  
  document.querySelector("#importFile")
  .addEventListener("change", function (evt) {
     console.log("Importing File");
     MCD.importFromFile(evt);
  });
  
  document.querySelector("#downDesign")
  .addEventListener("click", function (evt) {
    downloadMatrix();
  });
  
  document.querySelector("#save_png")
  .addEventListener("click", function (evt) {
    drawPicture();
  });
  
  document.querySelector("#makeMatList")
  .addEventListener("click", function (evt) {
    let list = generateMaterialList();
    let listField = document.querySelector("#matList");
    
    for (const [key, value] of Object.entries(list)) {
      console.log(`${key}: ${value}`+"<br>");
      listField.insertAdjacentText('beforeend', `${key}: ${value}`);
      var linebreak = document.createElement('br');
      listField.appendChild(linebreak);
    }
    listField.classList.remove("remove");
  });
});


function initializePage(){
  if (localStorage.DesignData) {
    MCD.load();
  } else {
    reDraw();
  }
  loadMaterials();
  setCurToolBorder("edit");
}

function reDraw(cols, rows) {
  if(!rows) rows = MCD.settings.fieldHeight;
  if(!cols) cols = MCD.settings.fieldWidth;
  console.log("Drawing grid:" + rows+"x"+cols);
  
  const container = document.querySelector("#newGrid");
  container.innerHTML = "";
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    //cell.innerText = (c + 1);
    cell.id = "cell_" + (c);
    cell.classList.add("material_" + MCD.matrixTwo[c][0]);
    cell.classList.add("rotate_" + MCD.matrixTwo[c][1]);
    cell.dataset.materialid = MCD.matrixTwo[c][0];
    cell.classList.add("grid-item");
    
    // if there's an overlay
    if(MCD.matrixTwo[c][3] > 0){
      const newOverlay = createOverlay(MCD.matrixTwo[c][3], MCD.matrixTwo[c][4]);
      newOverlay
        .then(overlay => {
          overlay.id = "overlay_"+cell.id.substr(5)
          cell.appendChild(overlay);
        })
        .catch(err => { console.log("fail:" + err) });
    }

 
 
 
    
    
    
    
    container.appendChild(cell);
  }
}

function loadMaterials(){
  console.log("Loading Material Sprites");
  const spriteWidth = MCD.settings.spriteWidth;
  const spriteHeight = MCD.settings.spriteHeight;
  
  const spriteSheet = new Image();
  spriteSheet.src = "./img/material_sprite.png";
  spriteSheet.onload = function() {
    const spritesPerRow = spriteSheet.width/spriteWidth;
    const spritesPerColumn = spriteSheet.height/spriteHeight;
    const numOfsprites = spritesPerRow * spritesPerColumn;

    /* add material boxes to html */
    for (let spriteID = 0; spriteID < numOfsprites; spriteID++) {
      materialGroup = MCD.materialsList[spriteID].group;
      if(materialGroup === "xxx"){
        continue; //don't show xxx's
      }

      // create SPRITE Box(es)
      let newMaterialWrap = document.createElement("div");
      newMaterialWrap.classList.add("material_wrap");
      let newMaterial = document.createElement("div");
      newMaterial.classList.add("material_" + spriteID);
      newMaterial.classList.add("materialPicker");
      newMaterial.dataset.materialid = spriteID;
      newMaterialWrap.appendChild(newMaterial);
      // add it to the page
      let newMaterialContainer = document.querySelector("#materialGroup_" + materialGroup);
      newMaterialContainer.appendChild(newMaterialWrap);
      
      // create OVERLAY Box(es)
      if(MCD.materialsList[spriteID].overlay == true){
        let overlayWrap = document.createElement("div");
        overlayWrap.classList.add("material_wrap");
        let newOverlay = document.createElement("div");
        
        newOverlay.classList.add("material_" + spriteID);
        newOverlay.classList.add("materialPicker");
        newOverlay.classList.add("overlayPicker");
        newOverlay.dataset.materialid = spriteID;
        overlayWrap.appendChild(newOverlay);
        
        // add it to the page
        let overlayContainer = document.querySelector("#materialGroup_2000");
        overlayContainer.appendChild(overlayWrap);
      }
      
      // make a material_# class - zero based
      let row = Math.floor(spriteID/spritesPerRow);
      let col = (spriteID%spritesPerRow);
      let sourceX = col*spriteWidth; 
      let sourceY = row*spriteHeight;

      let style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = ".material_" + spriteID + " { background-position: -" + sourceX + "px -" + sourceY + "px; }";
      document.getElementsByTagName("head")[0].appendChild(style);
    }
  };//end imageonload
}

function setCurToolBorder(toolID) {
  console.log("Setting Border for tool:"+toolID);
  const tools = document.querySelectorAll(".toolBtn");
  tools.forEach(div => {
    if(div.id === toolID) {
      div.classList.add("current_tool");
    }else{
      div.classList.remove("current_tool");
    }
  });
}

function checkElForImage(elID){
  let el = document.querySelector("#"+elID);
  if(el.getElementsByTagName('img').length > 0) {
    return true;
  } else {
    return false;
  }
}

function getGridCell(cellID, gridWidth){
  console.log("GGC:Getting cell info: cellID "+cellID);
  let clicked = document.querySelector("#"+cellID);
  if(gridWidth === undefined){
    gridWidth = MCD.settings.fieldWidth;
  }
  
  let cellOverlayID;
  if(clicked.nodeName == "IMG"){
    console.log("Clicked an overlay img");
    cellOverlayID = cellID;
    cellID = clicked.parentElement.id;
  }else if(checkElForImage(cellID)){
    cellOverlayID = document.querySelector("#"+cellID).getElementsByTagName('img')[0].id;
  }

  const cellXY = {
    id: cellID,
    cellNum: parseInt(cellID.substr(5)),
  }
  cellXY.X = cellXY.cellNum % gridWidth
  cellXY.Y = Math.floor(cellXY.cellNum / gridWidth);
  cellXY.hasOvr = checkElForImage(cellID); 
  cellXY.materialID = MCD.matrixTwo[cellXY.cellNum][0];
  cellXY.materialRotate = MCD.matrixTwo[cellXY.cellNum][1];
  cellXY.overlayMatID = MCD.matrixTwo[cellXY.cellNum][3];
  cellXY.overlayElID = cellOverlayID;
  cellXY.overlayRotate = MCD.matrixTwo[cellXY.cellNum][4];
  // is last column?
  //if (cellXY.X==(gridWidth-1)) {
    //cellXY.lastcolumn = true;
  //} else {
    //cellXY.lastcolumn = false;
  //}
  console.log("!!!!!!!!!!!!!!!");
  return cellXY;
}

function createOverlay(overlayID,rotation) {
  return new Promise((resolve, reject) => {
    let overlay = document.createElement("img");
    if(rotation == undefined) rotation = 0;
    let tmp_canvas = document.getElementById("buffer_canvas");
    tmp_canvas.width = MCD.settings.spriteWidth;
    tmp_canvas.height = MCD.settings.spriteHeight;
    let ctx = tmp_canvas.getContext("2d");
    ctx.clearRect(0,0,canvas.width,canvas.height);
  
    const spriteSheet = new Image();
    spriteSheet.src = "./img/material_sprite.png";
   
    spriteSheet.onload = function() {
      let overlayXY = MCD.getMaterialXY(overlayID);
      ctx.drawImage(spriteSheet, overlayXY.X, overlayXY.Y, MCD.settings.spriteWidth, MCD.settings.spriteHeight, 0, 0, MCD.settings.spriteWidth, MCD.settings.spriteHeight);
      overlay.src = tmp_canvas.toDataURL();
      overlay.classList.add("overlay", "rotate_" + rotation);
      overlay.dataset.overlayid = overlayID;
      ctx.clearRect(0,0,canvas.width,canvas.height);
     //if (???) {
      resolve(overlay);
      //} else {
        //reject("FAILURE");
      //}
    };//end imageonload
  });
}

function resetCellBg(cellData){
  console.log("Resetting Cell Background");
  MCD.matrixTwo[cellData.cellNum][0] = 0;
  MCD.matrixTwo[cellData.cellNum][1] = 0;
  let cell = document.querySelector("#"+cellData.id);
  cell.className = "";
  cell.classList.add("material_0", "rotate_0", "grid-item");
  //cell.dataset.materialid = 0;
}

function resetCellOverlay(cellData){
  console.log("Resetting Cell Overlay");
  if(cellData.hasOvr){
    let overlay = document.querySelector("#"+cellData.overlayElID);
    console.log("overlay3:"+overlay);
    console.log(cellData);
    overlay.remove();
    MCD.matrixTwo[cellData.cellNum][3] = 0;
    MCD.matrixTwo[cellData.cellNum][4] = 0;
  }
}

function editTool(cellData){
  let cell = document.querySelector("#"+cellData.id);
  if(MCD.env.selectedOverlay == 0) {
    console.log("Grid cell cicked with edit tool.");
    // set material in matrix
    MCD.matrixTwo[cellData.cellNum][0] = MCD.env.selectedMaterial;
    cell.className = "";
    // show material on grid
    cell.classList.add("material_" + MCD.env.selectedMaterial);
    cell.classList.add("rotate_0");
    cell.classList.add("grid-item");
    cell.dataset.materialid = MCD.env.selectedMaterial;
  } else {
    console.log("Clicked grid square with overlay material.");
    MCD.matrixTwo[cellData.cellNum][3] = MCD.env.selectedOverlay;
    const new_overlay = createOverlay(MCD.env.selectedOverlay); 
    new_overlay
      .then(overlay => {
        overlay.id = "overlay_"+cellData.id.substr(5);
        cell.appendChild(overlay);
      })
      .catch(err => { console.log("fail") });
  }
}

function rotateTool(cellData){
  console.log("Clicked grid square with rotate tool.");
  if(cellData.materialID == 0 && cellData.hasOvr == false) return;
  
  let cell = document.querySelector("#"+cellData.id);
  // rotate image or cell?
  let rotateOverlay = false;
  if(cellData.hasOvr && confirm("Rotate overlay?")){
    rotateOverlay = true;
    console.log("Rotating Overlay");
  }else{
    console.log("Rotating Cell");
  }
  
  let currentCellRotation = MCD.matrixTwo[cellData.cellNum][1];
  let currentOverlayRotation = MCD.matrixTwo[cellData.cellNum][4];
  let newCellRotation, newOverlayRotation;

  // ROTATE CELL
  if (rotateOverlay == false) {
    newCellRotation = currentCellRotation + 90;
    if(newCellRotation > 270) newCellRotation = 0;
    // calculate unrotate the overlay 90° currentOverlayRotation -90
    newOverlayRotation = currentOverlayRotation - 90;
    if(newOverlayRotation < 0) newOverlayRotation = 270;
    //remove current rotations from cell
    cell.classList.remove("rotate_0", "rotate_90", "rotate_180", "rotate_270");
    cell.classList.add("rotate_" + newCellRotation);
    // set cell rotation in matrix
    MCD.matrixTwo[cellData.cellNum][1] = newCellRotation;
  // ROTATE OVERLAY
  }else{
    newOverlayRotation = currentOverlayRotation + 90;
    if(newOverlayRotation > 270) newOverlayRotation = 0;
  }

  // either way, overlay gets rotated, or unrotated
  if(cellData.hasOvr == true) {
    let overlay = document.querySelector("#"+cellData.overlayElID);
    overlay.classList.remove("rotate_0", "rotate_90", "rotate_180", "rotate_270");
    overlay.classList.add("rotate_" + newOverlayRotation);
    MCD.matrixTwo[cellData.cellNum][4] = newOverlayRotation;
  }
/*
// fix cell borders
if(!rotateOverlay) {
  if (newCellRotation == 0) {
    cell.style.borderWidth = "0 1px 1px 0";
  } else if (newCellRotation == 270) {
    cell.style.borderWidth = "0 1px 1px 0";
  } else if (newCellRotation == 180) {
    cell.style.borderWidth = "0 1px 1px 0";
  } else {
    cell.style.borderWidth = "0px 1px 1px 0";
  }
      */
}

function pointerTool(cellData){
  console.log("Clicked grid cell with pointer tool.");
  MCD.env.setMaterial(cellData.materialID);
  MCD.env.selectedOverlay = 0;
  console.log(cellData);
}

function eraseTool(cellData){
  console.log("Grid cell clicked with erase tool.");
  resetCellBg(cellData);
  resetCellOverlay(cellData);
}

function moveTool(cellData){
  console.log("Grid cell clicked with move tool.");
  
  let cell = document.querySelector("#"+cellData.id);
  let hilitedCell = document.querySelector(".selectCell");
  if(hilitedCell === null) {
    // select a cell
    console.log("No cell selected, selecting");
    if(MCD.matrixTwo[cellData.cellNum][0] > 0 || MCD.matrixTwo[cellData.cellNum][3] > 0){
      cell.classList.add("selectCell");
    }
  }else{
    // theres a cell selected, move to here
    let originCell = getGridCell(hilitedCell.id);
    
    // make sure not same cells
    if(cell.id == hilitedCell.id){
      console.log("Clicked same cell, didn't move cell.");
    }else{
      /* **** Move cell to new location **** */
      MCD.matrixTwo[cellData.cellNum][0] = MCD.matrixTwo[originCell.cellNum][0];
      MCD.matrixTwo[cellData.cellNum][1] = MCD.matrixTwo[originCell.cellNum][1];
      MCD.matrixTwo[cellData.cellNum][2] = MCD.matrixTwo[originCell.cellNum][2];
      MCD.matrixTwo[cellData.cellNum][3] = MCD.matrixTwo[originCell.cellNum][3];
      MCD.matrixTwo[cellData.cellNum][4] = MCD.matrixTwo[originCell.cellNum][4];
      
      // show cell bg on grid
      cell.className = "";
      cell.classList.add("material_" + originCell.materialID);
      cell.classList.add("rotate_" + originCell.materialRotate);
      cell.classList.add("grid-item");
      cell.dataset.materialid = originCell.materialID;
      // if there's an overlay
      if(originCell.hasOvr){
        // show overlay info in grid
        const new_overlay = createOverlay(originCell.overlayMatID, originCell.overlayRotate); 
        new_overlay
          .then(overlay => {
            overlay.id = "overlay_"+cell.id.substr(5);
            cell.appendChild(overlay);
          })
          .catch(err => { console.log("fail") });
      }
      resetCellBg(originCell);
      resetCellOverlay(originCell);
    }
  }
}

function drawPicture() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const SPRITE_WIDTH = MCD.settings.spriteWidth;
  const SPRITE_HEIGHT = MCD.settings.spriteHeight;
  const title_font_size = 26;
  const author_font_size = 12;
  const materialTitle_font_size = 10;
  const materialList_font_size = 8;
  const titleTopPadding = 5;
  const authorTopPadding = 4;
  
  
  
  
  
  const matList = generateMaterialList();
  let materialList_length = (materialTitle_font_size) + ((materialList_font_size+2) * (Object.keys(matList).length));
  console.log("material list length: "+Object.keys(matList).length);


  // set CANVAS+GRID to correct size
  canvas.width = 
    /*sprites*/(SPRITE_WIDTH*MCD.settings.fieldWidth) + 
    /*borders*/(MCD.settings.fieldWidth+1) + 
    /*padding*/(MCD.settings.picturePadding*2)
  ; 
    
  canvas.height = 
    (SPRITE_HEIGHT*MCD.settings.fieldHeight) + 
    (MCD.settings.fieldHeight+1) + 
    (MCD.settings.picturePadding*2) +
    title_font_size + 
    author_font_size + 
    titleTopPadding + 
    authorTopPadding +
    materialList_length
  ; 
  
  grid_width = 
    /*sprites*/(SPRITE_WIDTH*MCD.settings.fieldWidth) + 
    /*borders*/(MCD.settings.fieldWidth+1)
  ; 
  grid_height = 
    /*sprites*/(SPRITE_HEIGHT*MCD.settings.fieldHeight) +
    /*borders*/(MCD.settings.fieldHeight+1)
  ; 
    
  ctx.clearRect(0,0,canvas.width,canvas.height)
  
  // background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  //draw grid
  drawGrid(grid_width, grid_height);
  // draw sprites
  drawSprites();
  
  // draw Title
  ctx.font = title_font_size+"px Arial";
  ctx.textAlign = "right";
  ctx.textBaseline = "top"
  ctx.fillStyle = "black";
  const titleMetrics = ctx.measureText(MCD.settings.designTitle); 
  const twidth = titleMetrics.width;
  ctx.fillText(MCD.settings.designTitle, canvas.width-(MCD.settings.picturePadding)-10, grid_height + titleTopPadding);
  
  // draw Author
  let auth_top = grid_height + titleTopPadding + title_font_size + authorTopPadding -1; //-1 is to show descenders comoletely, like g
  const authorMetrics = ctx.measureText(MCD.settings.designTitle); 
  const awidth = authorMetrics.width;
  ctx.font = author_font_size+"px Arial";
  ctx.fillText(MCD.settings.designAuthor, canvas.width-(MCD.settings.picturePadding)-10, auth_top);
  
  // draw materials list
  let mat_top = auth_top + author_font_size + 10;
  
  ctx.font = materialList_font_size+"px Arial";
  ctx.textAlign = "left";

  for (const [material, quantity] of Object.entries(matList)) {
    const mtext = material + ": " + quantity
    //const matListMetrics = ctx.measureText(mtext); 
    //const matwidth = matListMetrics.width;
    ctx.fillText(mtext, 1, mat_top);
    mat_top += materialList_font_size +2;
    
    
    //console.log(`${key}: ${value}`+"<br>");
    //listField.insertAdjacentText('beforeend', `${key}: ${value}`);
    //let linebreak = document.createElement('br');
    //listField.appendChild(linebreak);
  
  //const matList = generateMaterialList();
  //materialTitle_font_size = 10
  //materialList_font_size
  //let materialList_length = materialTitle_font_size + (materialList_font_size * Object.keys(materialList).length);
  }
  
  
  
  
  
  
  // show canvas
  canvas.classList.remove("remove");
}

function drawGrid(gridWidth, gridHeight){
  const canvas = document.querySelector("#canvas");
  const context = canvas.getContext("2d");
  const SPRITE_WIDTH = MCD.settings.spriteWidth;
  const SPRITE_HEIGHT = MCD.settings.spriteHeight;
  
  // Padding 
  const p = MCD.settings.picturePadding; 
  //const p = 0; 
  // cell size +1 for border
  const cs = SPRITE_HEIGHT + 1;
  
  // draw vertical lines
  for (let x = 0; x <= grid_width; x += cs) { 
    context.moveTo(0.5 + x + p, p); 
    context.lineTo(0.5 + x + p, grid_height + p); 
  }
  
  // draw horizontal lines
  for (let y = 0; y <= grid_height; y += cs) {
    context.moveTo(p, 0.5 + y + p);
    context.lineTo(grid_width + p, 0.5 + y + p);
  }
  
  context.strokeStyle = "#333";
  context.lineWidth = 1;
  context.stroke();
  //context.restore();
}

function drawSprites() {
  const canvas = document.querySelector("#canvas");
  const ctx = canvas.getContext("2d");
  const newImage = new Image();
  const SPRITE_WIDTH = MCD.settings.spriteWidth;
  const SPRITE_HEIGHT = MCD.settings.spriteHeight;
  let spriteSheetStartX = 0;
  let spriteSheetStartY = 0;
  let newImageStartX = 0;
  let newImageStartY = 0;
  newImage.src = "./img/material_sprite.png";
  
  //draw images
  const p = 0; //padding
  newImage.onload = function() {
    for (let yCell = 0; yCell < MCD.settings.fieldHeight; yCell++) { // each row
      for (let xCell = 0; xCell < MCD.settings.fieldWidth; xCell++) { //each cell in row
        let cell = xCell + (yCell * MCD.settings.fieldWidth);
        // get new draw coordinates
        const x = (xCell * (SPRITE_WIDTH+1))+1;
        const y = (yCell * (SPRITE_HEIGHT+1))+1;
        
        const material = MCD.matrixTwo[cell][0];
        let spriteSheetXY = MCD.getMaterialXY(material);
        let rotation = MCD.matrixTwo[cell][1];
        
        // SPRITES
        if(rotation > 0) {
          ctx.save();
          ctx.translate(x + (SPRITE_WIDTH/2), y + (SPRITE_HEIGHT/2));
          ctx.rotate(rotation * Math.PI / 180);
          ctx.drawImage(newImage, spriteSheetXY.X, spriteSheetXY.Y, SPRITE_WIDTH, SPRITE_HEIGHT, -SPRITE_WIDTH/2, -SPRITE_HEIGHT/2, SPRITE_WIDTH, SPRITE_HEIGHT); 
          ctx.restore();
        } else { // draw unrotated sprite
          //ctx.drawImage(spritesheetImage,selectx,selecty,selectWidth,selectHeight,drawx,drawy,drawWidth,drawHeight);
          ctx.drawImage(newImage, spriteSheetXY.X, spriteSheetXY.Y, SPRITE_WIDTH, SPRITE_HEIGHT, x, y, SPRITE_WIDTH, SPRITE_HEIGHT);
        }

        // OVERLAYS
        const overlayID = MCD.matrixTwo[cell][3];
        if(overlayID > 0){ 
          let overlayRotation = MCD.matrixTwo[cell][4];
          // unfix rotation
          overlayRotation = Math.abs(overlayRotation - rotation);
          let ospriteSheetXY = MCD.getMaterialXY(overlayID);
    
          if(overlayRotation > 0) {
            ctx.save();
            ctx.translate(x + (SPRITE_WIDTH/2), y + (SPRITE_HEIGHT/2));
            ctx.rotate(overlayRotation * Math.PI / 180);
            ctx.drawImage(newImage, ospriteSheetXY.X, ospriteSheetXY.Y, SPRITE_WIDTH, SPRITE_HEIGHT, -SPRITE_WIDTH/2, -SPRITE_HEIGHT/2, SPRITE_WIDTH, SPRITE_HEIGHT); 
            ctx.restore();
          } else { 
            // draw unrotated sprite
            ctx.drawImage(newImage, ospriteSheetXY.X, ospriteSheetXY.Y, SPRITE_WIDTH, SPRITE_HEIGHT, x, y, SPRITE_WIDTH, SPRITE_HEIGHT);
          }
        }
      }
    }
    downloadCanvas();
  };//end onload
}

function downloadMatrix(/*data, filename, type*/) {
  let filename = "My Plans Data";
  const data = MCD.export();
  let type = "text/plain";
  var file = new Blob([data], {type: type});
  if (window.navigator.msSaveOrOpenBlob) {
    // IE10+
    window.navigator.msSaveOrOpenBlob(file, filename);
  } else {
    // Others
    var a = document.createElement("a"), url = URL.createObjectURL(file);
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(function() {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 0);
  }
}

function downloadCanvas() {
  link = document.createElement("a");
  link.download = "My Blueprints.png";
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
}

function generateMaterialList() {
  let materialList = {};
  MCD.matrixTwo.forEach(function(cell){
    const cellMaterialID = cell[0];
    const overlayMaterialID = cell[3];
    const cellMaterial = MCD.materialsList[cellMaterialID].name;
    const overlayMaterial = MCD.materialsList[overlayMaterialID].name;
    //console.log("Cell Material Id:"+cellMaterialID +"  Cell Material:"+cellMaterial);
    if(cellMaterial in materialList) {
      materialList[cellMaterial] += 1;
    } else if(cellMaterialID !== 0){
      materialList[cellMaterial] = 1;
    }
    if(overlayMaterial in materialList) {
      materialList[overlayMaterial] += 1;
    } else if(overlayMaterialID !== 0){
      materialList[overlayMaterial] = 1;
    }
  });
  //console.log(Object.keys(materialList).length);
  return materialList;
}