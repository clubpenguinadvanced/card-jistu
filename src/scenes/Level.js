
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

		// background_png
		const background_png = this.add.image(0, 0, "loading", "background.png");
		background_png.setOrigin(0, 0);

		// loading1
		const loading1 = this.add.sprite(760, 480, "loading", "loading1-a.png");

		this.loading1 = loading1;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.GameObjects.Sprite} */
	loading1;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();
		this.loading1.play("loading")

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
