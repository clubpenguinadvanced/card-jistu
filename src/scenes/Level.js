
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// ellipse
		const ellipse = this.add.ellipse(715, 434, 128, 128);
		ellipse.isFilled = true;

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		
		window.RufflePlayer = window.RufflePlayer || {};
		window.RufflePlayer.config = {
			"publicPath": "src/"
		}
		
		this.ruffle = window.RufflePlayer.newest();
            this.rufflePlayer = this.ruffle.createPlayer();
            this.rufflePlayer.style.position = 'absolute';
			this.rufflePlayer.style.top = '0px';
			this.rufflePlayer.style.left = '0px';
			this.rufflePlayer.style.width = '1520';
			this.rufflePlayer.style.height = '960';

            let container = document.getElementById("D_F_GameSection");
            container.appendChild(this.rufflePlayer);

            this.rufflePlayer.load("game.swf");
            this.ruffle = window.RufflePlayer;
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
