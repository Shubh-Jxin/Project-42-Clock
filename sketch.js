
function setup() {
  //creating the Canvas
 createCanvas(500,600);

 //changing the angle into DEGREES
 angleMode(DEGREES);
}

function draw() {
  //black background
  background(0);

  //to change 0 ,0 to 250,250
  translate(250,250);

  //to rotate the arcs at an angle of 270 DEGREES
  rotate(270)

  //to store the valur of hour, minutes and seconds
  hr= hour();
  sec=second();
  min= minute();

  //to prevent the arc from filling
  noFill();
  strokeWeight(10);
  
  //SECONDS HAND
  stroke(0,255,0);
  //creating an angle for the seconds and mapping it to 0 <-> 360
  secAngle= map(sec,0,60,0,360);
  //creating an arc at 0,0 having radius 400 and starting at 0 to the value of the angle
  arc(0,0,400,400,0,secAngle);
  //to create the hand and preventing the rotation of the arcs
  push();
  rotate(secAngle);
  line(0,0,120,0)
  pop();


  //MINUTES HAND
  stroke(255,0,0);
   //creating an angle for the minutes and mapping it to 0 <-> 360
  minAngle= map(min,0,60,0,360);
  //creating an arc at 0,0 having radius 400 and starting at 0 to the value of the angle
  arc(0,0,350,350,0,minAngle);
  //to create the hand and preventing the rotation of the arcs
  push();
  rotate(minAngle);
  line(0,0,100,0)
  pop();


  //HOURS HAND
  stroke(0,0,255);
   //creating an angle for the hours and mapping it to 0 <-> 360
  hrAngle= map(hr % 12,0,12,0,360);
  //creating an arc at 0,0 having radius 400 and starting at 0 to the value of the angle
  arc(0,0,300,300,0,hrAngle);
  //to create the hand and preventing the rotation of the arcs
  push();
  rotate(hrAngle);
  line(0,0,70,0)
  pop();


  //TO DISPLAY THE TIME
  strokeWeight(1);
  rotate(90)
  textSize(50)
  stroke("olive")
  text(hr%12+ ":" + min + ":" + sec , -100, 300);
}



