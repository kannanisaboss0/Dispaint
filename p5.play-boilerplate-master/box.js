class box{
constructor(x,y,options){
  var options = {
    isStatic:true
  }
  this.box=Bodies.rectangle;
  World.add(world,this.body);

}}
function display(){
  var pos = this.body.position;
  rect(pos.x,pos.y,50,50);
  
}


