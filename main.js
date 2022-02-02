img="";
status1="";
objects=[];

function preload(){

img=loadImage("dog_cat.jpg")

}

function modelLoaded(){

console.log("Model Loaded")
status1=true
objectDetector.detect(img,gotResult)
}

function gotResult(error,results){

if(error){
console.log(error)

}
console.log(results)
objects=results
}

function setup(){
    
canvas=createCanvas(640,420)
canvas.center()
objectDetector=ml5.objectDetector("cocossd",modelLoaded)
document.getElementById("status").innerHtML="status: detecting objects"
}

function draw(){
textSize(20)
    image(img,0,0,640,420)

if(status1 !="")

for(i=0; i<objects.length; i=i+1){

document.getElementById("status").innerHTML="Status:Objects Detected"
percent=floor(objects[i].confidence * 100)
fill("#FF0000")
text(objects[i].label+" " + percent +"%"  , objects[i].x + 15,objects[i].y + 15)
noFill()
stroke("#FF0000")
rect(objects[i].x,objects [i].y,objects[i].width,objects[i].height)
}

}

