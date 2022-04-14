import Phaser from 'phaser'

import WebFontFile from '../scripts/fontLoader';

import { GAMEWIDTH, GAMEHEIGHT } from '/src/config.js'

export let DIFFICULTY;

const BUTTON_INDEX = 'buttons'

export let Menu = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    // ANCHOR variables
    function menu() {
        Phaser.Scene.call(this, 'Menu')

        //this.variables go here
        this.buttonX = GAMEWIDTH / 2
    },

    // ANCHOR preload
    preload: function() {
        //preload assets here using this.load
        this.load.spritesheet('buttons', 'assets/buttons/spritesheet_buttons.png', { frameWidth: 320, frameHeight: 90}); //oga

        this.load.image('background', 'assets/cityscape20000.png');//oga

        this.load.addFile(new WebFontFile(this.load, 'Permanent Marker'))
    },

    // ANCHOR create
    create: function() {
        // the bulk of game code goes here
        // Sets the background image and stretches to fit the screen
        this.background = this.add.image(0, 0, 'background').setOrigin(0)
        this.background.displayWidth = GAMEWIDTH;
        this.background.displayHeight = GAMEHEIGHT;

        // adds the difficulty buttons and makes them interactive
        let easy = this.add.image(this.buttonX, 200, BUTTON_INDEX, 0);
        easy.setInteractive()
        easy.on('pointerout', () => {
            easy = this.add.image(this.buttonX, 200, BUTTON_INDEX, 0)
        })
        easy.on('pointerover', () => {
            easy = this.add.image(this.buttonX, 200, BUTTON_INDEX, 1)
        })

        let normal = this.add.image(this.buttonX, 300, BUTTON_INDEX, 2);
        normal.setInteractive()
        normal.on('pointerout', () => {
            normal = this.add.image(this.buttonX, 300, BUTTON_INDEX, 2)
        })
        normal.on('pointerover', () => {
            normal = this.add.image(this.buttonX, 300, BUTTON_INDEX, 3)
        })

        let hard = this.add.image(this.buttonX, 400, BUTTON_INDEX, 4);
        hard.setInteractive()
        hard.on('pointerout', () => {
            hard = this.add.image(this.buttonX, 400, BUTTON_INDEX, 4)
        })
        hard.on('pointerover', () => {
            hard = this.add.image(this.buttonX, 400, BUTTON_INDEX, 5)
        })

        // creates the title
        const rage = this.add.text(20, 130, 'R\nA\nG\nE', {
            fontFamily: '"Permanent Marker"',
            fontSize: '92px'
        })
        rage.setOrigin(0)

        const against = this.add.text(GAMEWIDTH - 100, 50, 'A\nG\nA\nI\nN\nS\nT', {
            fontFamily: '"Permanent Marker"',
            fontSize: '64px'
        })

        const war = this.add.text(GAMEWIDTH / 2, GAMEHEIGHT - 80, 'WAR', {
            fontFamily: '"Permanent Marker"',
            fontSize: '92px'
        })
        war.setOrigin(0.5)
    },

    // ANCHOR Menu functions


    // ANCHOR update
    update: function() {
        
    }
})