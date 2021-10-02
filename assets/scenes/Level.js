
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

		// sprite_71_png
		this.add.image(755, 504, "stage", "Sprite 71.png");

		// playerTwo
		const playerTwo = new ambient(this, 1196, 636);
		this.add.existing(playerTwo);

		// playerOne
		const playerOne = new ambient(this, 339, 636);
		this.add.existing(playerOne);
		playerOne.scaleX = -1;

		// sprite_73_png
		this.add.image(760, 871, "stage", "Sprite 73.png");

		// symbol_1_png
		this.add.image(757, 481, "stage", "Symbol 1.png");

		// text
		const text = this.add.text(96, 748, "", {});
		text.text = "Floogal\n";
		text.setStyle({"color":"#000000ff","fontFamily":"Burbank Small","fontSize":"40px","fontStyle":"bold"});

		// text_1
		const text_1 = this.add.text(1290, 747, "", {});
		text_1.text = "Floogal\n";
		text_1.setStyle({"align":"right","color":"#000000ff","fontFamily":"Burbank Small","fontSize":"40px","fontStyle":"bold"});

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */


	create() {

		this.editorCreate();

		// on start round	
		var timer = this.add.sprite(760, 729, "stage", "Sprite 1010001.png");
		timer.play("clock")
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
