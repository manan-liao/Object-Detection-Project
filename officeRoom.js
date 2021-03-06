img = "";
status = "";
object = [];

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
        objects = results;
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
    image(img,0,0,640,420);
    if(status != ""){
        for(i = 0;i < objects.length;i++){
            document.getElementById("status").innerHTML = "status-object detected";
            fill("blue");
            textSize(20);
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
            noFill();
            stroke("green");
            rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
        }
    }
}

