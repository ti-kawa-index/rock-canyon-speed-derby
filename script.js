"use strict";

/*=======
   ROCK CANYON SPEED DERBY
   Vanilla JavaScript version
=======*/

/*
   Animal Data
*/

const ALL_ANIMALS = [
  {
    id: "cheetah",
    emoji: "🐆",
    name: "Cheetah",
    nameja: "チーター",
    baseSpeed: 110,
    terrainMultipliers: { land: 1.0, mountain: 0.55, sea: 0.05 },
    color: "#d99a42",
    description: "世界最速の陸上動物。短距離では圧倒的なスピードを発揮します。",
    funFact: "短時間なら時速100kmを超える速度で走ることができます。"
  },
  {
    id: "lion",
    emoji: "🦁",
    name: "Lion",
    nameja: "ライオン",
    baseSpeed: 80,
    terrainMultipliers: { land: 1.0, mountain: 0.7, sea: 0.05 },
    color: "#c98d31",
    description: "力強い体と瞬発力を持つ大型のネコ科動物です。",
    funFact: "オスのライオンには特徴的なたてがみがあります。"
  },
  {
    id: "deer",
    emoji: "🦌",
    name: "Deer",
    nameja: "シカ",
    baseSpeed: 70,
    terrainMultipliers: { land: 0.95, mountain: 1.0, sea: 0.05 },
    color: "#9b6737",
    description: "森林や山岳地帯を軽快に走ることができる動物です。",
    funFact: "多くのシカは非常に優れた跳躍能力を持っています。"
  },
  {
    id: "eagle",
    emoji: "🦅",
    name: "Eagle",
    nameja: "ワシ",
    baseSpeed: 65,
    terrainMultipliers: { land: 0.3, mountain: 1.1, sea: 1.0 },
    color: "#70513b",
    description: "空を自在に飛ぶ大型の猛禽類です。",
    funFact: "視力が非常に優れていることで知られています。"
  },
  {
    id: "horse",
    emoji: "🐎",
    name: "Horse",
    nameja: "ウマ",
    baseSpeed: 88,
    terrainMultipliers: { land: 1.0, mountain: 0.65, sea: 0.08 },
    color: "#7c4d2c",
    description: "長い脚を活かした高速走行を得意とします。",
    funFact: "馬は立ったまま眠ることができます。"
  },
  {
    id: "kangaroo",
    emoji: "🦘",
    name: "Kangaroo",
    nameja: "カンガルー",
    baseSpeed: 70,
    terrainMultipliers: { land: 1.05, mountain: 0.75, sea: 0.04 },
    color: "#a66b45",
    description: "強力な後ろ脚によるジャンプで高速移動します。",
    funFact: "尻尾はバランスを取るためにも使われます。"
  },
  {
    id: "wolf",
    emoji: "🐺",
    name: "Wolf",
    nameja: "オオカミ",
    baseSpeed: 60,
    terrainMultipliers: { land: 0.95, mountain: 1.0, sea: 0.06 },
    color: "#767676",
    description: "持久力に優れ、さまざまな地形を移動できます。",
    funFact: "群れで協力して行動することで知られています。"
  },
  {
    id: "tiger",
    emoji: "🐅",
    name: "Tiger",
    nameja: "トラ",
    baseSpeed: 75,
    terrainMultipliers: { land: 1.0, mountain: 0.8, sea: 0.45 },
    color: "#d97925",
    description: "力と瞬発力に優れた大型ネコ科動物です。",
    funFact: "トラは泳ぎが得意なネコ科動物です。"
  },
  {
    id: "zebra",
    emoji: "🦓",
    name: "Zebra",
    nameja: "シマウマ",
    baseSpeed: 65,
    terrainMultipliers: { land: 1.0, mountain: 0.65, sea: 0.04 },
    color: "#c8c8c8",
    description: "草原を高速で走ることができるウマ科動物です。",
    funFact: "縞模様は個体ごとに異なります。"
  },
  {
    id: "giraffe",
    emoji: "🦒",
    name: "Giraffe",
    nameja: "キリン",
    baseSpeed: 60,
    terrainMultipliers: { land: 0.9, mountain: 0.55, sea: 0.02 },
    color: "#d9a03d",
    description: "長い脚と首を持つ世界で最も背の高い動物です。",
    funFact: "キリンの首の骨の数は人間と同じ7個です。"
  },
  {
    id: "dolphin",
    emoji: "🐬",
    name: "Dolphin",
    nameja: "イルカ",
    baseSpeed: 55,
    terrainMultipliers: { land: 0.03, mountain: 0.05, sea: 1.1 },
    color: "#5599bb",
    description: "海中を高速で泳ぐ知能の高い海洋哺乳類です。",
    funFact: "イルカはエコーロケーションを使って周囲を把握します。"
  },
  {
    id: "fox",
    emoji: "🦊",
    name: "Fox",
    nameja: "キツネ",
    baseSpeed: 55,
    terrainMultipliers: { land: 1.0, mountain: 0.95, sea: 0.05 },
    color: "#d8752d",
    description: "俊敏で、さまざまな環境に適応できる動物です。",
    funFact: "キツネは非常に優れた聴覚を持っています。"
  },
  {
    id: "rhino",
    emoji: "🦏",
    name: "Rhino",
    nameja: "サイ",
    baseSpeed: 50,
    terrainMultipliers: { land: 0.95, mountain: 0.55, sea: 0.03 },
    color: "#77716b",
    description: "巨大な体を持ちながら短距離ではかなりの速度で走ります。",
    funFact: "サイは見た目に反してかなり速く走ることができます。"
  },
  {
    id: "flamingo",
    emoji: "🦩",
    name: "Flamingo",
    nameja: "フラミンゴ",
    baseSpeed: 40,
    terrainMultipliers: { land: 0.8, mountain: 0.25, sea: 0.9 },
    color: "#e68ca2",
    description: "長い脚と首を持つ特徴的な水辺の鳥です。",
    funFact: "片脚で立って休む姿が有名です。"
  },
  {
    id: "shark",
    emoji: "🦈",
    name: "Shark",
    nameja: "サメ",
    baseSpeed: 50,
    terrainMultipliers: { land: 0.01, mountain: 0.02, sea: 1.15 },
    color: "#6c8ca3",
    description: "海中を力強く泳ぐ捕食者です。",
    funFact: "サメは種類によって泳ぐ速度が大きく異なります。"
  },
  {
    id: "boar",
    emoji: "🐗",
    name: "Boar",
    nameja: "イノシシ",
    baseSpeed: 40,
    terrainMultipliers: { land: 0.9, mountain: 1.0, sea: 0.03 },
    color: "#6e4939",
    description: "険しい地形でも力強く進むことができます。",
    funFact: "嗅覚が非常に発達しています。"
  },
  {
    id: "buffalo",
    emoji: "🐃",
    name: "Buffalo",
    nameja: "バッファロー",
    baseSpeed: 48,
    terrainMultipliers: { land: 0.9, mountain: 0.55, sea: 0.03 },
    color: "#574439",
    description: "大型で力強い草食動物です。",
    funFact: "大型の群れを作って生活する種類があります。"
  },
  {
    id: "llama",
    emoji: "🦙",
    name: "Llama",
    nameja: "リャマ",
    baseSpeed: 35,
    terrainMultipliers: { land: 0.65, mountain: 1.05, sea: 0.02 },
    color: "#c9b08c",
    description: "高地の険しい環境に適応した動物です。",
    funFact: "アンデス地方で家畜として長く利用されてきました。"
  },
  {
    id: "monkey",
    emoji: "🐒",
    name: "Monkey",
    nameja: "サル",
    baseSpeed: 38,
    terrainMultipliers: { land: 0.8, mountain: 1.0, sea: 0.08 },
    color: "#8b5b38",
    description: "木登りやジャンプが得意な非常に身軽な動物です。",
    funFact: "種類によって生活する環境や体格は大きく異なります。"
  },
  {
    id: "gorilla",
    emoji: "🦍",
    name: "Gorilla",
    nameja: "ゴリラ",
    baseSpeed: 40,
    terrainMultipliers: { land: 0.75, mountain: 0.9, sea: 0.04 },
    color: "#514942",
    description: "力強い体を持つ大型類人猿です。",
    funFact: "主に植物を食べて生活します。"
  },
  {
    id: "elephant",
    emoji: "🐘",
    name: "Elephant",
    nameja: "ゾウ",
    baseSpeed: 40,
    terrainMultipliers: { land: 0.8, mountain: 0.35, sea: 0.15 },
    color: "#77736d",
    description: "巨大な体を持つ陸上最大級の動物です。",
    funFact: "鼻は呼吸だけでなく物をつかむことにも使います。"
  },
  {
    id: "hippo",
    emoji: "🦛",
    name: "Hippo",
    nameja: "カバ",
    baseSpeed: 30,
    terrainMultipliers: { land: 0.7, mountain: 0.2, sea: 0.7 },
    color: "#777080",
    description: "陸上でも水中でも活動する大型哺乳類です。",
    funFact: "水中で生活する時間が長い動物です。"
  },
  {
    id: "rabbit",
    emoji: "🐇",
    name: "Rabbit",
    nameja: "ウサギ",
    baseSpeed: 45,
    terrainMultipliers: { land: 1.0, mountain: 0.75, sea: 0.03 },
    color: "#d9d1c8",
    description: "小型ながら非常に素早く動くことができます。",
    funFact: "後ろ脚の力を利用して大きくジャンプします。"
  },
  {
    id: "seal",
    emoji: "🦭",
    name: "Seal",
    nameja: "アザラシ",
    baseSpeed: 25,
    terrainMultipliers: { land: 0.15, mountain: 0.1, sea: 1.0 },
    color: "#8795a1",
    description: "水中で優れた運動能力を発揮する海洋哺乳類です。",
    funFact: "水中では陸上よりもはるかに自由に動けます。"
  },
  {
    id: "goat",
    emoji: "🐐",
    name: "Goat",
    nameja: "ヤギ",
    baseSpeed: 35,
    terrainMultipliers: { land: 0.7, mountain: 1.1, sea: 0.02 },
    color: "#d2c5b2",
    description: "険しい山道を移動することが得意です。",
    funFact: "非常にバランス感覚に優れています。"
  },
  {
    id: "sheep",
    emoji: "🐑",
    name: "Sheep",
    nameja: "ヒツジ",
    baseSpeed: 25,
    terrainMultipliers: { land: 0.8, mountain: 0.65, sea: 0.02 },
    color: "#e3dfd5",
    description: "群れで生活する代表的な家畜です。",
    funFact: "毛は衣類などの原料として利用されます。"
  },
  {
    id: "otter",
    emoji: "🦦",
    name: "Otter",
    nameja: "カワウソ",
    baseSpeed: 28,
    terrainMultipliers: { land: 0.35, mountain: 0.3, sea: 1.0 },
    color: "#8d6247",
    description: "水中で非常に器用に泳ぐことができます。",
    funFact: "種類によっては石を道具として使うことがあります。"
  },
  {
    id: "badger",
    emoji: "🦡",
    name: "Badger",
    nameja: "アナグマ",
    baseSpeed: 28,
    terrainMultipliers: { land: 0.85, mountain: 0.9, sea: 0.03 },
    color: "#71665d",
    description: "地面を掘ることが得意な小型哺乳類です。",
    funFact: "鋭い爪を使って地中に巣穴を作ります。"
  },
  {
    id: "chipmunk",
    emoji: "🐿️",
    name: "Chipmunk",
    nameja: "シマリス",
    baseSpeed: 30,
    terrainMultipliers: { land: 0.9, mountain: 0.95, sea: 0.03 },
    color: "#a46f45",
    description: "小さな体で素早く走り回るリスの仲間です。",
    funFact: "頬袋に食べ物をためて運ぶことができます。"
  },
  {
    id: "lizard",
    emoji: "🦎",
    name: "Lizard",
    nameja: "トカゲ",
    baseSpeed: 25,
    terrainMultipliers: { land: 0.85, mountain: 0.8, sea: 0.02 },
    color: "#63884d",
    description: "小回りの利く体を持つ爬虫類です。",
    funFact: "種類によっては尾を自切することがあります。"
  },
  {
    id: "raccoon",
    emoji: "🦝",
    name: "Raccoon",
    nameja: "アライグマ",
    baseSpeed: 25,
    terrainMultipliers: { land: 0.9, mountain: 0.85, sea: 0.08 },
    color: "#77716a",
    description: "器用な前足を持つ雑食性の哺乳類です。",
    funFact: "非常に器用な前足を使って物を扱います。"
  },
  {
    id: "pig",
    emoji: "🐖",
    name: "Pig",
    nameja: "ブタ",
    baseSpeed: 25,
    terrainMultipliers: { land: 0.8, mountain: 0.45, sea: 0.03 },
    color: "#d99b99",
    description: "嗅覚が非常に優れた哺乳類です。",
    funFact: "ブタは学習能力が高い動物としても知られています。"
  },
  {
    id: "turkey",
    emoji: "🦃",
    name: "Turkey",
    nameja: "七面鳥",
    baseSpeed: 25,
    terrainMultipliers: { land: 0.8, mountain: 0.45, sea: 0.02 },
    color: "#80614b",
    description: "大型の鳥類で、陸上を走ることもできます。",
    funFact: "オスは求愛時に尾羽を広げます。"
  },
  {
    id: "rooster",
    emoji: "🐓",
    name: "Rooster",
    nameja: "ニワトリ",
    baseSpeed: 18,
    terrainMultipliers: { land: 0.8, mountain: 0.4, sea: 0.02 },
    color: "#b34c31",
    description: "身近な家禽で、短距離を素早く移動します。",
    funFact: "ニワトリのオスは朝以外にも鳴きます。"
  },
  {
    id: "peacock",
    emoji: "🦚",
    name: "Peacock",
    nameja: "クジャク",
    baseSpeed: 20,
    terrainMultipliers: { land: 0.75, mountain: 0.4, sea: 0.02 },
    color: "#3e8c8a",
    description: "美しい尾羽で知られる大型の鳥です。",
    funFact: "大きく広げる尾羽は主にオスが持つ特徴です。"
  },
  {
    id: "snake",
    emoji: "🐍",
    name: "Snake",
    nameja: "ヘビ",
    baseSpeed: 18,
    terrainMultipliers: { land: 0.85, mountain: 0.8, sea: 0.35 },
    color: "#678147",
    description: "脚を持たず、体をくねらせて移動します。",
    funFact: "種類によっては泳ぎも非常に得意です。"
  },
  {
    id: "frog",
    emoji: "🐸",
    name: "Frog",
    nameja: "カエル",
    baseSpeed: 15,
    terrainMultipliers: { land: 0.55, mountain: 0.4, sea: 0.85 },
    color: "#609c53",
    description: "ジャンプと水中移動を得意とする両生類です。",
    funFact: "皮膚からも水分を取り込むことができます。"
  },
  {
    id: "mouse",
    emoji: "🐁",
    name: "Mouse",
    nameja: "ネズミ",
    baseSpeed: 18,
    terrainMultipliers: { land: 0.9, mountain: 0.7, sea: 0.02 },
    color: "#a5a09c",
    description: "小さな体を活かして素早く動き回ります。",
    funFact: "優れた嗅覚と聴覚を持っています。"
  },
  {
    id: "hedgehog",
    emoji: "🦔",
    name: "Hedgehog",
    nameja: "ハリネズミ",
    baseSpeed: 12,
    terrainMultipliers: { land: 0.75, mountain: 0.65, sea: 0.01 },
    color: "#a17a58",
    description: "背中に鋭い針を持つ小型哺乳類です。",
    funFact: "危険を感じると体を丸めます。"
  },
  {
    id: "sloth",
    emoji: "🦥",
    name: "Sloth",
    nameja: "ナマケモノ",
    baseSpeed: 5,
    terrainMultipliers: { land: 0.25, mountain: 0.7, sea: 0.03 },
    color: "#78805b",
    description: "非常にゆっくりとした動きで知られています。",
    funFact: "木の上で多くの時間を過ごします。"
  },
  {
    id: "crocodile",
    emoji: "🐊",
    name: "Crocodile",
    nameja: "ワニ",
    baseSpeed: 15,
    terrainMultipliers: { land: 0.55, mountain: 0.1, sea: 0.9 },
    color: "#526842",
    description: "水中と陸上の両方で生活する大型爬虫類です。",
    funFact: "水中では尾を使って力強く進みます。"
  },
  {
    id: "turtle",
    emoji: "🐢",
    name: "Turtle",
    nameja: "カメ",
    baseSpeed: 8,
    terrainMultipliers: { land: 0.35, mountain: 0.2, sea: 1.0 },
    color: "#63805a",
    description: "硬い甲羅を持つ爬虫類です。",
    funFact: "海ガメは長距離を泳いで移動します。"
  },
  {
    id: "whale",
    emoji: "🐋",
    name: "Whale",
    nameja: "クジラ",
    baseSpeed: 35,
    terrainMultipliers: { land: 0.01, mountain: 0.01, sea: 1.1 },
    color: "#526f85",
    description: "海に生息する非常に大型の哺乳類です。",
    funFact: "種類によっては非常に長距離を回遊します。"
  },
  {
    id: "octopus",
    emoji: "🐙",
    name: "Octopus",
    nameja: "タコ",
    baseSpeed: 12,
    terrainMultipliers: { land: 0.04, mountain: 0.03, sea: 0.9 },
    color: "#b76668",
    description: "8本の腕を持つ非常に器用な海洋生物です。",
    funFact: "状況に応じて体色や模様を変える種類があります。"
  },
  {
    id: "squid",
    emoji: "🦑",
    name: "Squid",
    nameja: "イカ",
    baseSpeed: 20,
    terrainMultipliers: { land: 0.01, mountain: 0.02, sea: 1.0 },
    color: "#a95d6a",
    description: "ジェット推進のような動きで水中を移動します。",
    funFact: "水を勢いよく吐き出して移動できます。"
  },
  {
    id: "fish",
    emoji: "🐟",
    name: "Fish",
    nameja: "魚",
    baseSpeed: 18,
    terrainMultipliers: { land: 0.01, mountain: 0.02, sea: 1.0 },
    color: "#5896ad",
    description: "水中で生活する魚類の代表です。",
    funFact: "魚類には非常に多くの種類が存在します。"
  },
  {
    id: "tropicfish",
    emoji: "🐠",
    name: "Tropical Fish",
    nameja: "熱帯魚",
    baseSpeed: 16,
    terrainMultipliers: { land: 0.01, mountain: 0.02, sea: 1.05 },
    color: "#e28d46",
    description: "暖かい海に生息する色鮮やかな魚です。",
    funFact: "サンゴ礁には非常に多様な魚が暮らしています。"
  },
  {
    id: "blowfish",
    emoji: "🐡",
    name: "Blowfish",
    nameja: "フグ",
    baseSpeed: 13,
    terrainMultipliers: { land: 0.01, mountain: 0.02, sea: 0.95 },
    color: "#d2bb55",
    description: "危険を感じると体を膨らませることで知られています。",
    funFact: "種類によっては強い毒を持っています。"
  },
  {
    id: "crab",
    emoji: "🦀",
    name: "Crab",
    nameja: "カニ",
    baseSpeed: 10,
    terrainMultipliers: { land: 0.4, mountain: 0.15, sea: 0.85 },
    color: "#c65942",
    description: "横方向への移動が得意な甲殻類です。",
    funFact: "多くのカニは左右に歩くことができます。"
  },
  {
    id: "shrimp",
    emoji: "🦐",
    name: "Shrimp",
    nameja: "エビ",
    baseSpeed: 9,
    terrainMultipliers: { land: 0.01, mountain: 0.01, sea: 0.9 },
    color: "#df886f",
    description: "水中を素早く移動する小型の甲殻類です。",
    funFact: "危険を感じると尾を使って後ろ向きに跳ねます。"
  },
  {
    id: "lobster",
    emoji: "🦞",
    name: "Lobster",
    nameja: "ロブスター",
    baseSpeed: 8,
    terrainMultipliers: { land: 0.2, mountain: 0.03, sea: 0.85 },
    color: "#c64d38",
    description: "大きなハサミを持つ海洋性の甲殻類です。",
    funFact: "硬い外骨格によって体を守っています。"
  }
];

/*
   Constants
*/

const TERRAIN_COLORS = {
  land: {
    bg: "#7A4A1E",
    stripe: "#9B6030",
    label: "平地",
    emoji: "🏜️"
  },
  mountain: {
    bg: "#5A5050",
    stripe: "#705858",
    label: "山岳",
    emoji: "⛰️"
  },
  sea: {
    bg: "#1A5A8E",
    stripe: "#2070A8",
    label: "海",
    emoji: "🌊"
  }
};

const TRACK_LENGTH_KM = 0.5;
const TICK_MS = 50;

/*
   Application State
*/

const state = {
  page: "race",

  terrain: [],
  racers: [],
  odds: [],
  speedMultiplier: 1,
  running: false,
  stopped: false,

  positions: {},
  elapsedMs: 0,

  bet: {
    amount: 10,
    racerId: null
  },

  coins: 1000,

  lastResult: null,

  intervalId: null
};

/*
   Utility
*/

function shuffle(array) {
  const result = [...array];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

function clamp(value, min, max) {
  return Math.max(min, Math.min(max, value));
}

function formatTime(ms) {
  return (ms / 1000).toFixed(2) + "s";
}

function formatCoins(value) {
  return Math.floor(value).toLocaleString("ja-JP");
}

/*
   Terrain
*/

function generateTerrain() {
  const count = 4 + Math.floor(Math.random() * 3);

  const raw = [];

  for (let i = 0; i < count; i++) {
    raw.push(0.7 + Math.random() * 1.3);
  }

  const total = raw.reduce((sum, value) => sum + value, 0);

  const segments = raw.map((value, index) => ({
    type: ["land", "mountain", "sea"][
      Math.floor(Math.random() * 3)
    ],
    width: value / total
  }));

  return segments;
}

function getTerrainAt(terrain, position) {
  let accumulated = 0;

  for (const segment of terrain) {
    accumulated += segment.width;

    if (position <= accumulated) {
      return segment.type;
    }
  }

  return terrain[terrain.length - 1].type;
}

/*
   Race Calculation
*/

function effectiveSpeed(animal, terrainType) {
  return animal.baseSpeed *
    animal.terrainMultipliers[terrainType];
}

function computeFinishTime(animal, terrain) {
  let distance = 0;
  let timeHours = 0;

  for (const segment of terrain) {
    const segmentDistance = TRACK_LENGTH_KM * segment.width;

    const speed = effectiveSpeed(animal, segment.type);

    if (speed <= 0) {
      return Infinity;
    }

    timeHours += segmentDistance / speed;
    distance += segmentDistance;
  }

  return timeHours * 3600;
}

function positionAtTime(animal, terrain, timeSeconds) {
  let remainingTimeHours = timeSeconds / 3600;
  let position = 0;

  for (const segment of terrain) {
    const speed = effectiveSpeed(animal, segment.type);

    if (speed <= 0) {
      return position;
    }

    const segmentDistance = TRACK_LENGTH_KM * segment.width;
    const segmentTimeHours = segmentDistance / speed;

    if (remainingTimeHours >= segmentTimeHours) {
      position += segment.width;
      remainingTimeHours -= segmentTimeHours;
    } else {
      const travelledDistance =
        speed * remainingTimeHours;

      position += travelledDistance / TRACK_LENGTH_KM;

      break;
    }
  }

  return clamp(position, 0, 1);
}

function computeOdds(racers, terrain) {
  return racers.map(() => {
    const odds =
      1.2 + Math.random() * (99 - 1.2);

    return Number(odds.toFixed(2));
  });
}

/*
   Racers
*/

function selectRacers() {
  return shuffle(ALL_ANIMALS).slice(0, 8);
}

function initializeRace() {
  state.racers = selectRacers();
  state.terrain = generateTerrain();
  state.odds = computeOdds(
    state.racers,
    state.terrain
  );

  state.positions = {};

  state.racers.forEach((animal) => {
    state.positions[animal.id] = 0;
  });

  state.elapsedMs = 0;
  state.speedMultiplier = 1;
  state.running = false;
  state.stopped = false;
  state.lastResult = null;

  state.bet.racerId = null;
}

/*
   DOM
*/

const root = document.getElementById("root");

function render() {
  root.innerHTML = `
    <div class="app">

      <header class="site-header">
        <div class="container header-inner">

          <div class="logo">
            ROCK CANYON
            <span>SPEED DERBY</span>
          </div>

          <nav class="main-nav">
            <button
              class="nav-button ${state.page === "race" ? "active" : ""}"
              data-page="race"
            >
              🏁 RACE
            </button>

            <button
              class="nav-button ${state.page === "encyclopedia" ? "active" : ""}"
              data-page="encyclopedia"
            >
              📖 ENCYCLOPEDIA
            </button>
          </nav>

        </div>
      </header>

      <main>
        <div class="container">
          ${
            state.page === "race"
              ? renderRacePage()
              : renderEncyclopediaPage()
          }
        </div>
      </main>

    </div>
  `;

  bindGlobalEvents();
}

/*
   Race Page
*/

function renderRacePage() {
  return `
    <h1 class="page-title">
      ROCK CANYON SPEED DERBY
    </h1>

    <p class="page-subtitle">
      8 ANIMALS. 500 METERS. ONE CHAMPION.
    </p>

    <div class="race-layout">

      <section class="race-main">

        ${renderTerrainPanel()}

        ${renderRaceTrack()}

        ${renderRaceControls()}

        ${
          state.lastResult
            ? renderResult()
            : ""
        }

      </section>

      ${renderBetPanel()}

    </div>
  `;
}

function renderTerrainPanel() {
  return `
    <div class="panel terrain-panel">

      <div class="panel-heading">
        <h2>🏜️ TERRAIN MAP</h2>

        <span>
          500 M
        </span>
      </div>

      <div class="terrain-bar">

        ${state.terrain
          .map((segment) => {
            const info =
              TERRAIN_COLORS[segment.type];

            return `
              <div
                class="terrain-segment"
                style="
                  width:${segment.width * 100}%;
                  background:${info.bg};
                "
              >
                <span class="terrain-label">
                  ${info.emoji}
                  ${info.label}
                </span>
              </div>
            `;
          })
          .join("")}

      </div>

    </div>
  `;
}

function renderRaceTrack() {
  return `
    <div class="race-track">

      <div class="track-terrain">

        ${state.terrain
          .map((segment) => {
            const info =
              TERRAIN_COLORS[segment.type];

            return `
              <div
                class="track-terrain-segment"
                style="
                  width:${segment.width * 100}%;
                  background:${info.bg};
                "
              ></div>
            `;
          })
          .join("")}

      </div>

      <div class="start-line">
        <span class="line-label">START</span>
      </div>

      <div class="finish-line">
        <span class="line-label">FINISH</span>
      </div>

      <div class="race-info">
        <div class="info-chip">
          <span class="timer">
            ${formatTime(state.elapsedMs)}
          </span>
        </div>

        <div class="info-chip">
          500M
        </div>
      </div>

      ${state.racers
        .map((animal, index) => {
          const position =
            state.positions[animal.id] || 0;

          const effective =
            effectiveSpeed(
              animal,
              getTerrainAt(
                state.terrain,
                position
              )
            );

          return `
            <div class="lane">

              <span class="lane-number">
                ${index + 1}
              </span>

              <div
                class="animal-runner ${
                  position >= 1
                    ? "finished"
                    : ""
                }"
                style="
                  left:${5 + position * 90}%;
                  top:50%;
                "
              >

                ${animal.emoji}

                <span class="animal-name">
                  ${animal.nameja}
                </span>

                <span class="speed-tag">
                  ${effective.toFixed(0)} km/h
                </span>

              </div>

            </div>
          `;
        })
        .join("")}

    </div>
  `;
}

function renderRaceControls() {
  let buttons = "";
    const speedControls = `
    <div class="speed-controls">
      <span class="speed-label">SPEED</span>

      ${[1, 2, 3, 10]
        .map(
          (speed) => `
            <button
              class="speed-button ${
                state.speedMultiplier === speed
                  ? "active"
                  : ""
              }"
              data-speed="${speed}"
            >
              ${speed}×
            </button>
          `
        )
        .join("")}
    </div>
  `;
  if (!state.running && !state.stopped) {
    buttons = `
      <button
        class="action-button"
        id="reroll-button"
      >
        🗺️ REROLL MAP
      </button>

      <button
        class="action-button primary large"
        id="start-button"
      >
        🏁 START RACE
      </button>
    `;
  }

  if (state.running) {
    buttons = `
      <button
        class="action-button"
        id="skip-button"
      >
        ⏩ SKIP
      </button>

      <button
        class="action-button danger large"
        id="stop-button"
      >
        ■ STOP
      </button>
    `;
  }

  if (state.stopped) {
    buttons = `
      <button
        class="action-button"
        id="reroll-button"
      >
        🗺️ NEW MAP
      </button>

      <button
        class="action-button primary large"
        id="reset-button"
      >
        ↻ RESET RACE
      </button>
    `;
  }

  return `
    <div class="controls">
    ${speedControls}
    ${buttons}
    </div>
  `;
}

/*
   Betting
*/

function renderBetPanel() {
  const selected =
    state.racers.find(
      (animal) =>
        animal.id === state.bet.racerId
    );

  const selectedIndex =
    state.racers.findIndex(
      (animal) =>
        animal.id === state.bet.racerId
    );

  const odds =
    selectedIndex >= 0
      ? state.odds[selectedIndex]
      : 0;

  const potential =
    selected
      ? Math.floor(
          state.bet.amount * odds
        )
      : 0;

  return `
    <aside class="panel bet-panel">

      <div class="panel-heading">
        <h2>💰 BET</h2>
      </div>

      <div class="coin-display">
        <span class="coin-label">
          YOUR COINS
        </span>

        <span class="coin-value">
          🪙 ${formatCoins(state.coins)}
        </span>
      </div>

      <div class="panel-heading">
        <h3>BET AMOUNT</h3>
      </div>

      <div class="bet-amounts">

        ${[10, 50, 100, 500]
          .map(
            (amount) => `
              <button
                class="amount-button ${
                  state.bet.amount === amount
                    ? "active"
                    : ""
                }"
                data-bet-amount="${amount}"
                ${
                  state.running || state.stopped
                    ? "disabled"
                    : ""
                }
              >
                ${amount}
              </button>
            `
          )
          .join("")}

        <button
          class="amount-button ${
            state.bet.amount === state.coins
              ? "active"
              : ""
          }"
          data-bet-amount="all"
          ${
            state.running || state.stopped
              ? "disabled"
              : ""
          }
        >
          ALL
        </button>

      </div>

      <div class="panel-heading">
        <h3>CHOOSE RACER</h3>
      </div>

      <div class="racer-bets">

        ${state.racers
          .map((animal, index) => {
            const isSelected =
              state.bet.racerId === animal.id;

            return `
              <button
                class="racer-bet ${
                  isSelected
                    ? "selected"
                    : ""
                }"
                data-racer-id="${animal.id}"
                ${
                  state.running || state.stopped
                    ? "disabled"
                    : ""
                }
              >

                <span class="racer-bet-emoji">
                  ${animal.emoji}
                </span>

                <span class="racer-bet-name">
                  ${animal.nameja}
                </span>

                <span class="racer-bet-odds">
                  ${state.odds[index]}x
                </span>

              </button>
            `;
          })
          .join("")}

      </div>

      <div class="bet-summary">

        <div class="bet-summary-row">
          <span>BET</span>
          <strong>
            🪙 ${formatCoins(state.bet.amount)}
          </strong>
        </div>

        <div class="bet-summary-row">
          <span>ODDS</span>
          <strong>
            ${odds ? odds + "x" : "-"}
          </strong>
        </div>

        <div class="potential">
          WIN:
          ${selected ? "🪙 " + formatCoins(potential) : "-"}
        </div>

        ${
          state.bet.amount > state.coins
            ? `
              <div class="bet-error">
                コインが足りません。
              </div>
            `
            : ""
        }

      </div>

    </aside>
  `;
}

/*
   Result
*/

function renderResult() {
  if (!state.lastResult) {
    return "";
  }

  const ranking =
    state.lastResult.ranking;

  return `
    <section class="result-panel">

      <h2 class="result-title">
        🏆 RACE RESULT
      </h2>

      <div class="result-ranking">

        ${ranking
          .map((item, index) => {
            return `
              <div class="result-row">

                <span class="result-position">
                  ${index + 1}
                </span>

                <span class="result-animal">
                  ${item.animal.emoji}
                </span>

                <span class="result-name">
                  ${item.animal.nameja}
                </span>

                <span class="result-time">
                  ${formatTime(
                    item.time * 1000
                  )}
                </span>

              </div>
            `;
          })
          .join("")}

      </div>

      ${
        state.lastResult.betResult
          ? `
            <div class="result-panel">

              <h3 class="result-title">
                ${
                  state.lastResult.betResult.win
                    ? "🎉 YOU WIN!"
                    : "💀 YOU LOSE"
                }
              </h3>

              <p style="text-align:center">
                ${
                  state.lastResult.betResult.message
                }
              </p>

            </div>
          `
          : ""
      }

    </section>
  `;
}

/*Encyclopedia*/

function renderEncyclopediaPage() {
  if (state.selectedAnimal) {
    return renderAnimalDetail(
      state.selectedAnimal
    );
  }

  const filter =
    state.filter || "all";

  const filtered =
    ALL_ANIMALS.filter((animal) => {
      if (filter === "all") {
        return true;
      }

      return animal.terrainMultipliers[
        filter
      ] >= 0.8;
    });

  return `
    <h1 class="page-title">
      ANIMAL ENCYCLOPEDIA
    </h1>

    <p class="page-subtitle">
      DISCOVER THE RACERS OF ROCK CANYON
    </p>

    <div class="filter-bar">

      ${[
        ["all", "🌎 ALL"],
        ["land", "🏜️ LAND"],
        ["mountain", "⛰️ MOUNTAIN"],
        ["sea", "🌊 SEA"]
      ]
        .map(
          ([value, label]) => `
            <button
              class="filter-button ${
                filter === value
                  ? "active"
                  : ""
              }"
              data-filter="${value}"
            >
              ${label}
            </button>
          `
        )
        .join("")}

    </div>

    <div class="animal-grid">

      ${filtered
        .map(
          (animal) =>
            renderAnimalCard(animal)
        )
        .join("")}

    </div>
  `;
}

function renderAnimalCard(animal) {
  const terrainTypes = [
    ["land", "🏜️"],
    ["mountain", "⛰️"],
    ["sea", "🌊"]
  ];

  return `
    <article
      class="animal-card"
      data-animal-id="${animal.id}"
      style="--animal-color:${animal.color}"
    >

      <div class="animal-emoji">
        ${animal.emoji}
      </div>

      <div class="animal-ja">
        ${animal.nameja}
      </div>

      <div class="animal-en">
        ${animal.name}
      </div>

      <div class="animal-speed">
        MAX ${animal.baseSpeed} km/h
      </div>

      <div class="terrain-icons">

        ${terrainTypes
          .map(
            ([type, emoji]) => `
              <span
                class="terrain-icon ${
                  animal.terrainMultipliers[type] >= 0.8
                    ? "good"
                    : ""
                }"
              >
                ${emoji}
                ${Math.round(
                  animal.terrainMultipliers[type] * 100
                )}%
              </span>
            `
          )
          .join("")}

      </div>

    </article>
  `;
}

/*
   Detail
*/

function renderAnimalDetail(animal) {
  const terrainTypes = [
    ["land", "🏜️ 平地"],
    ["mountain", "⛰️ 山岳"],
    ["sea", "🌊 海"]
  ];

  const maxMultiplier =
    Math.max(
      ...Object.values(
        animal.terrainMultipliers
      )
    );

  const maxSpeed =
    animal.baseSpeed * maxMultiplier;

  const fiveSecondDistance =
    maxSpeed * 5 / 3600;

  return `
    <div class="detail-panel">

      <button
        class="back-button"
        id="detail-back"
      >
        ← BACK TO ENCYCLOPEDIA
      </button>

      <section class="panel detail-hero">

        <div class="detail-emoji">
          ${animal.emoji}
        </div>

        <div>

          <h1 class="detail-name">
            ${animal.nameja}
          </h1>

          <div class="detail-en">
            ${animal.name}
          </div>

          <p class="detail-description">
            ${animal.description}
          </p>

          <div class="stat-boxes">

            <div class="stat-box">
              <span class="stat-label">
                BASE SPEED
              </span>

              <span class="stat-value">
                ${animal.baseSpeed} km/h
              </span>
            </div>

            <div class="stat-box">
              <span class="stat-label">
                MAX SPEED
              </span>

              <span class="stat-value">
                ${maxSpeed.toFixed(1)} km/h
              </span>
            </div>

            <div class="stat-box">
              <span class="stat-label">
                DISTANCE / 5 SEC
              </span>

              <span class="stat-value">
                ${(fiveSecondDistance * 1000).toFixed(1)} m
              </span>
            </div>

          </div>

        </div>

      </section>

      <section class="panel detail-section">

        <h3>
          TERRAIN PERFORMANCE
        </h3>

        ${terrainTypes
          .map(([type, label]) => {
            const multiplier =
              animal.terrainMultipliers[type];

            const speed =
              animal.baseSpeed *
              multiplier;

            const width =
              clamp(
                multiplier * 80,
                2,
                100
              );

            return `
              <div class="terrain-stat">

                <div class="terrain-stat-header">

                  <span class="terrain-stat-name">
                    ${label}
                  </span>

                  <span class="terrain-stat-speed">
                    ${speed.toFixed(1)} km/h
                  </span>

                </div>

                <div class="terrain-meter">
                  <div
                    class="terrain-meter-fill"
                    style="width:${width}%"
                  ></div>
                </div>

              </div>
            `;
          })
          .join("")}

      </section>

      <section class="panel detail-section">

        <h3>
          💡 FUN FACT
        </h3>

        <p class="fun-fact">
          ${animal.funFact}
        </p>

      </section>

    </div>
  `;
}

/*
   Global Events
*/

function bindGlobalEvents() {
  document
    .querySelectorAll("[data-page]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.page =
          button.dataset.page;

        state.selectedAnimal = null;

        render();
      });
    });

  if (state.page === "race") {
    bindRaceEvents();
  } else {
    bindEncyclopediaEvents();
  }
}

/*
   Race Events
*/

function bindRaceEvents() {
      document
    .querySelectorAll("[data-speed]")
    .forEach((button) => {
      button.addEventListener("click", () => {
        state.speedMultiplier =
          Number(button.dataset.speed);

        render();
      });
    });
  document
    .querySelectorAll("[data-bet-amount]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          const value =
            button.dataset.betAmount;

          state.bet.amount =
            value === "all"
              ? state.coins
              : Number(value);

          render();
        }
      );
    });

  document
    .querySelectorAll("[data-racer-id]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          state.bet.racerId =
            button.dataset.racerId;

          render();
        }
      );
    });

  const startButton =
    document.getElementById(
      "start-button"
    );

  if (startButton) {
    startButton.addEventListener(
      "click",
      handleStart
    );
  }

  const stopButton =
    document.getElementById(
      "stop-button"
    );

  if (stopButton) {
    stopButton.addEventListener(
      "click",
      handleStop
    );
  }

  const skipButton =
    document.getElementById(
      "skip-button"
    );

  if (skipButton) {
    skipButton.addEventListener(
      "click",
      handleSkip
    );
  }

  const resetButton =
    document.getElementById(
      "reset-button"
    );

  if (resetButton) {
    resetButton.addEventListener(
      "click",
      handleReset
    );
  }

  const rerollButton =
    document.getElementById(
      "reroll-button"
    );

  if (rerollButton) {
    rerollButton.addEventListener(
      "click",
      handleReroll
    );
  }
}

/*
   Race Actions
*/

function handleStart() {
  if (state.running) {
    return;
  }

  if (
    state.bet.racerId &&
    state.bet.amount > state.coins
  ) {
    alert("コインが足りません。");
    return;
  }

  /*
    BETがある場合は開始時にコインを引く。
 */
  if (
    state.bet.racerId &&
    state.bet.amount > 0
  ) {
    state.coins -= state.bet.amount;
  }

  state.lastResult = null;
  state.running = true;
  state.stopped = false;
  state.elapsedMs = 0;

  startRaceLoop();

  render();
}

function handleStop() {
  if (!state.running) {
    return;
  }

  state.running = false;
  state.stopped = true;

  stopRaceLoop();

  resolveResult();

  render();
}

function handleSkip() {
  if (!state.running) {
    return;
  }

  const finishTimes =
    state.racers.map((animal) =>
      computeFinishTime(
        animal,
        state.terrain
      )
    );

  const maxTime =
    Math.max(
      ...finishTimes.filter(
        Number.isFinite
      )
    );

  state.elapsedMs =
    maxTime * 1000;

  state.racers.forEach(
    (animal) => {
      state.positions[animal.id] = 1;
    }
  );

  state.running = false;
  state.stopped = true;

  stopRaceLoop();

  resolveResult();

  render();
}

function handleReset() {
  stopRaceLoop();

  initializeRace();

  render();
}

function handleReroll() {
  if (state.running) {
    return;
  }

  state.terrain =
    generateTerrain();

  state.racers =
    selectRacers();

  state.odds =
    computeOdds(
      state.racers,
      state.terrain
    );

  state.positions = {};

  state.racers.forEach(
    (animal) => {
      state.positions[
        animal.id
      ] = 0;
    }
  );

  state.elapsedMs = 0;
  state.speedMultiplier = 1;
  state.stopped = false;
  state.lastResult = null;
  state.bet.racerId = null;

  render();
}

/*
   Race Loop
*/

function startRaceLoop() {
  stopRaceLoop();

  state.intervalId =
    setInterval(
      () => {
        state.elapsedMs +=
  TICK_MS * state.speedMultiplier;

        const elapsedSeconds =
          state.elapsedMs / 1000;

        let finished = true;

        state.racers.forEach(
          (animal) => {
            const position =
              positionAtTime(
                animal,
                state.terrain,
                elapsedSeconds
              );

            state.positions[
              animal.id
            ] = position;

            if (position < 1) {
              finished = false;
            }
          }
        );

        updateRaceVisuals();

        if (finished) {
          state.running = false;
          state.stopped = true;

          stopRaceLoop();

          resolveResult();

          render();
        }
      },
      TICK_MS
    );
}

function stopRaceLoop() {
  if (state.intervalId) {
    clearInterval(
      state.intervalId
    );

    state.intervalId = null;
  }
}

/*
   Live Race Rendering
*/

function updateRaceVisuals() {
  const track =
    document.querySelector(
      ".race-track"
    );

  if (!track) {
    return;
  }

  const runners =
    track.querySelectorAll(
      ".animal-runner"
    );

  state.racers.forEach(
    (animal, index) => {
      const runner =
        runners[index];

      if (!runner) {
        return;
      }

      const position =
        state.positions[
          animal.id
        ] || 0;

      runner.style.left =
        `${5 + position * 90}%`;

      if (position >= 1) {
        runner.classList.add(
          "finished"
        );
      }
    }
  );

  const timer =
    document.querySelector(
      ".timer"
    );

  if (timer) {
    timer.textContent =
      formatTime(
        state.elapsedMs
      );
  }
}

/*
   Resolve Result
*/

function resolveResult() {
  const ranking =
    state.racers
      .map((animal) => ({
        animal,
        time: computeFinishTime(
          animal,
          state.terrain
        )
      }))
      .sort(
        (a, b) =>
          a.time - b.time
      );

  let betResult = null;

  if (state.bet.racerId) {
    const selected =
      ranking.findIndex(
        (item) =>
          item.animal.id ===
          state.bet.racerId
      );

    const selectedAnimal =
      ALL_ANIMALS.find(
        (animal) =>
          animal.id ===
          state.bet.racerId
      );

    const oddsIndex =
      state.racers.findIndex(
        (animal) =>
          animal.id ===
          state.bet.racerId
      );

    const odds =
      state.odds[oddsIndex] || 0;

    if (selected === 0) {
      const winnings =
        Math.floor(
          state.bet.amount * odds
        );

      state.coins += winnings;

      betResult = {
        win: true,
        message:
          `${selectedAnimal.nameja} の勝利！ ${formatCoins(winnings)}コイン獲得！`
      };
    } else {
      betResult = {
        win: false,
        message:
          `${selectedAnimal.nameja} は ${selected + 1}位でした。`
      };
    }
  }

  state.lastResult = {
    ranking,
    betResult
  };
}

/*
   Encyclopedia Events
*/

function bindEncyclopediaEvents() {
  document
    .querySelectorAll("[data-filter]")
    .forEach((button) => {
      button.addEventListener(
        "click",
        () => {
          state.filter =
            button.dataset.filter;

          render();
        }
      );
    });

  document
    .querySelectorAll("[data-animal-id]")
    .forEach((card) => {
      card.addEventListener(
        "click",
        () => {
          const animal =
            ALL_ANIMALS.find(
              (item) =>
                item.id ===
                card.dataset.animalId
            );

          if (!animal) {
            return;
          }

          state.selectedAnimal =
            animal;

          render();
        }
      );
    });

  const backButton =
    document.getElementById(
      "detail-back"
    );

  if (backButton) {
    backButton.addEventListener(
      "click",
      () => {
        state.selectedAnimal =
          null;

        render();
      }
    );
  }
}

/*
   Initial State
*/

state.filter = "all";
state.selectedAnimal = null;

initializeRace();
render();