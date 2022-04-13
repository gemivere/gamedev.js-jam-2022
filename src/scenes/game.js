import Phaser from 'phaser'

let Game = new Phaser.Class({
    Extends: Phaser.Scene,

    initialize:

    // ANCHOR variables
    function menu() {
        Phaser.Scene.call(this, 'Game')

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

    // ANCHOR Game functions


    // ANCHOR update
    update: function() {
        
    }
})

export default Game