
var drawe=[];
var background;
function setup(){
createCanvas(1600,800);
background("black");
}
function draw(){



function mouseDragged(){
  var line={
    x:mouseX,
    y:mouseY}
  drawe.push(line);

}

for(var i=0;i<drawe.length;i++){
  drawe[i].x,drawe[i].y
}}
//function mouseReleased(){

//}