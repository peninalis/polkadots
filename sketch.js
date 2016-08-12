//var y=5;
//var v=30;
//var w=55;

function setup() {
  createCanvas(640,480);
  background(0,0,20);
  wallpaper();
}
 function wallpaper(){
 for (var r=0; r<= width; r=r+50){
 for ( var c=0; c<= height; c=c+50) {
   
    
  fill(250,20,200);
  stroke(0,259,255);
  strokeWeight(6);
  ellipse(r+10,c+10,15,15);
  fill(200, 200, 0);
  stroke(153, 0, 51);
  strokeWeight(6);
  ellipse(r+30,c+20,15,15);
  fill(50,200,255);
  stroke(153, 255, 51);
  strokeWeight(6);
  ellipse(r+50,c+30,15,15);
 }
}
}
 function screen(){
 for (var r=0; r<= width; r=r+50){
 for ( var c=0; c<= height; c=c+50) {
   
    
  fill(0, 0, 255);
  stroke(50, 0, 102);
  strokeWeight(6);
  ellipse(r+10,c+10,25,25);
  fill(153, 0, 51);
  stroke(250, 200, 0);
  strokeWeight(6);
  ellipse(r+30,c+20,25,25);
  fill(153, 255, 51);
  stroke(102, 0, 255);

  strokeWeight(6);
  ellipse(r+50,c+30,25,25);
 }
}
}


function draw() {

 

}
function mousePressed(){
  background(255,255,255);
  screen();
}
  
  
  
  
  
  