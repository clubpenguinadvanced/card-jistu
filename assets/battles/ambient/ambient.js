class ambient extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 336, y ?? 430);
		
		const isSensei = 0
		const hasBelt = 0
		
		const spritetint = Math.random() * 0xffffff

		const layerone = scene.add.sprite(0, 0, "ambient", "layerone0001.png");
		this.add(layerone);

		const layertwo = scene.add.sprite(56, 39, "ambient", "layertwo0001.png");
		this.add(layertwo);

		const layerthree = scene.add.sprite(16, -124, "ambient", "layerthree0001.png");
		this.add(layerthree);

		const layerfour = scene.add.sprite(17, -124, "ambient", "layerfour0001.png");
		this.add(layerfour);
		layerfour.tint = spritetint

		const layerfive = scene.add.sprite(92, -121, "ambient", "layerfive0001.png");
		this.add(layerfive);

		const layersix = scene.add.sprite(104, -121, "ambient", "layersix0001.png");
		this.add(layersix);
		layersix.tint = spritetint

		const layerseven = scene.add.sprite(104, -82, "ambient", "layerseven0001.png");
		this.add(layerseven);

		const layereight = scene.add.sprite(57, -211, "ambient", "layereight0001.png");
		this.add(layereight);

		const layernine = scene.add.sprite(44, -215, "ambient", "layernine0001.png");
		this.add(layernine);

		const layerten = scene.add.sprite(77, -162, "ambient", "layerten0001.png");
		if(isSensei){
			this.add(layerten);
		}

		const layereleven = scene.add.sprite(33, -192, "ambient", "layereleven0001.png");
		this.add(layereleven);

		const layertwelve = scene.add.sprite(89, -44, "ambient", "layertwelve0001.png");
		if(hasBelt){
			this.add(layertwelve);
		}

		const layerthirteen = scene.add.sprite(89, -43, "ambient", "layerthirteen0001.png");
		if(hasBelt){
			this.add(layerthirteen);
		}

		const layerfourteen = scene.add.sprite(81, -117, "ambient", "layerfourteen0001.png");
		this.add(layerfourteen);

		const layerfifteen = scene.add.sprite(81, -119, "ambient", "layerfifteen0001.png");
		this.add(layerfifteen);
		layerfifteen.tint = spritetint
		

		layerone.play("layerone")
		layertwo.play("layertwo")
		layerthree.play("layerthree")
		layerfour.play("layerfour")
		layerfive.play("layerfive")
		layersix.play("layersix")
		layerseven.play("layerseven")
		layereight.play("layereight")
		layernine.play("layernine")
		layerten.play("layerten")
		layereleven.play("layereleven")
		layertwelve.play("layertwelve")
		layerthirteen.play("layerthirteen")
		layerfourteen.play("layerfourteen")
		layerfifteen.play("layerfifteen")
	}
}
