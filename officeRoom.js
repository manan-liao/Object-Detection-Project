img = "";
status = "";

function preload(){
    img = loadImage('office room.jpg');
}

function setup(){
    canvas = createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelloaded);
    document.getElementById("status").innerHTML = "status : Detecting Objects";
}

function modelloaded(){
    console.log("modelloaded");
    status = true;
    objectDetector.detect(img,gotResult);
}

function gotResult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
    }
}

function draw(){
    image(img,0,0,640,420);
    fill("blue");
    text("Laptop",200,100);
    textSize(20);
    noFill();
    stroke("green");
    rect(30,60,450,350);
    fill("red");
    text("Phone",300,290);
    textSize(20);
    noFill();
    stroke("orange");
    rect(300,260,170,100);
}

