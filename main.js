function preload(){
	img = loadImage("dog_cat.jpg")
}
function setup(){
	canvas = createCanvas(640,420);
	canvas.center();
//    ml5class = ml5.imageClassfier
}
function draw(){
	image(img,0,0,640,420);
	fill("red");
	stroke("red")
	text("Dog",50,45);
	noFill();
	stroke("red")
	stroke("red");
	rect(45,30,300,350);
	stroke("blue");
	rect(300,100,250,250)
	text("Cat",305,115)
}
