// One hand-picked palette for the whole game: a summer salt marsh in low sun.
import * as THREE from 'three';

const c = (hex) => new THREE.Color(hex);

export const P = {
  mudDeep: c('#4f4a3f'),
  mud: c('#857760'),
  mudWet: c('#4a4234'),
  sand: c('#c4ad84'),
  sandWet: c('#7d6c52'),
  marshLow: c('#6f7a43'),
  marshHigh: c('#8f9150'),
  marshGold: c('#a99a58'),
  lavender: c('#8a7a96'),
  hill: c('#9c9762'),
  gorse: c('#56603a'),
  village: c('#9a8c6a'),
  clay: c('#a48764'),
  clayWet: c('#6b5641'),
  panFloor: c('#a29682'),
  salt: c('#f5f1e8'),
  bankDug: c('#6f5f48'),

  waterShallow: c('#8fa59a'),
  waterDeep: c('#2f4b52'),
  foam: c('#f1ede2'),
  brine: c('#bda899'),

  timber: c('#4a3b2c'),
  timberLight: c('#7d6449'),
  tar: c('#2c2925'),
  limewash: c('#e6dcc6'),
  ochre: c('#a5583a'),
  thatch: c('#b0975f'),
  sail: c('#d9c7a2'),
  sailOchre: c('#b8693f'),
  iron: c('#3a3b3a'),
};

// Sky keyframes by sun elevation: [elev, zenith, horizon, sunColor, sunIntensity, ambient]
export const SKY = [
  [-0.35, '#18223a', '#34405e', '#9fb4e0', 0.0, 0.66],
  [-0.08, '#283554', '#6f6482', '#c08a7a', 0.15, 0.6],
  [0.03, '#4a5a80', '#e0a070', '#ffd0ab', 0.9, 0.62],
  [0.18, '#6688ae', '#f2c48e', '#ffdab0', 2.0, 0.78],
  [0.40, '#7298bf', '#efd6b0', '#ffe2b8', 2.8, 0.9],
  [0.95, '#7aa0c6', '#e8dcc4', '#fff0dc', 3.0, 0.95],
];
