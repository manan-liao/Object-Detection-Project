img = "";

function preload(){
    img = loadImage('dog_cat.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
}

function draw(){
    image(img,0,0,640,420);
    fill("blue");
    text("Cat",45,75);
    textSize(20);
    noFill();
    stroke("green");
    rect(30,60,450,350);
}
