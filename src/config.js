import Phaser from 'phaser';

import Menu from './scenes/menu';
import Game from './scenes/game'

const blockSize = 32; // px
const numBlocksX = 19; 
const numBlocksY = 19; // make a 19x19 grid

const gameWidth = numBlocksX * blockSize;
const menuWidth = 300;
const gameHeight = numBlocksY*blockSize+blockSize

let config = {
  type: Phaser.AUTO,
  width: gameWidth+menuWidth,
  height: gameHeight,
  parent: 'game',
  dom: {
      createContainer: true,
  },
  scene: [
      Menu,
      Game
  ]
};

export default config