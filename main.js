NoseX = 0;
NoseY = 0;   
function preload(){
clown_nose = loadImage('hu.png')
}
function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}

classifier = ml5.imageClassifier('MobileNet', modelLoaded);
 
function modelLoaded(){
    console.log('model loaded');
}

function draw(){
image(video,0,0,300,300)
image(clown_nose,NoseX, NoseY, 60, 30);

}
function take_snapshot(){
    save('My Image.png')
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y);
    NoseX = results[0].pose.nose.x-15;
    NoseY = results[0].pose.nose.y;

}
}


