import Phaser from 'phaser'

let Menu = new Phaser.Class({
    Extends: Phaser.GameObjects.Sprite,

    initialize:

    // ANCHOR variables
    function menu() {
        Phaser.Scene.call(this, 'Menu')

        //this.variables go here
    },

    // ANCHOR preload
    preload: function() {
        //preload assets here using this.load
    },

    // ANCHOR create
    create: function() {
        // the bulk of game code goes here
    },

    // ANCHOR Menu functions
})

export default Menu