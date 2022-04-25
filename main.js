song1 = ""
song2 = ""
rightWristX = 0
leftWristY = 0
rightWristY = 0
leftWristX = 0
function preload() {
song1 = loadSound("music.mp3");
song2 = loadSound("music2.mp3")


}



function setup() {
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modelLoaded);
posenet.on("pose",gotPoses);
}

function gotPoses(results) {
if(results.length > 0)
{
console.log(results);
leftWristX = results[0].pose.leftWrist.x;
leftWristY = results[0].pose.leftWrist.y;
rightWristX = results[0].pose.rightWrist.x;
rightWristY = results[0].pose.rightWrist.y;
console.log(leftWristX);
console.log(rightWristX);
console.log(leftWristY);
console.log(rightWristY);
}
}
function modelLoaded(){
console.log("Posenet Is Connected");
}





function draw() {
image(video,0,0,600,500);




}