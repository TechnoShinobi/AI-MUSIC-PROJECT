song1 = ""
song2 = ""
song1_status = ""
song2_status = ""
scoreleft = 0
scoreright = 0
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
scoreleft = results[0].pose.keypoints[9].score;
scoreright = results[0].pose.keypoints[10].score;
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

fill("#FF0000")
stroke("#FF0000")
song2_status = song2.isPlaying();
if (scoreleft > 0.2) {
circle(leftWristX,leftWristY,20)
song1.stop()
if (song2_status == false) {
song2.play();
document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
}
}
song1_status = song1.isPlaying();
if (scoreright > 0.2) {
circle(rightWristX,rightWristY,20)
song1.stop()
if (song1_status == false) {
song1.play();
document.getElementById("song").innerHTML = "Playing - Harry Potter Theme Song"
}
}

}