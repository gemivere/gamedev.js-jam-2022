import Phaser from 'phaser';

import { Menu } from './scenes/menu';
import { Game } from './scenes/game';

export let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: 'game',
  dom: {
      createContainer: true,
  },
  scene: [
      Menu,
      Game
  ]
};

export const GAMEWIDTH = config['width']
export const GAMEHEIGHT = config['height']