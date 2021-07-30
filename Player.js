class Player
 {
    constructor(x,y,width,height)
    {
this.x= x;
this.y = y;
this.W = Width;
this.H = Height;
this.spt = createsprite(this.x , this.y,this.width, this.height)
  
this.spt .shapeColor = "orange";
}
move(xdir,ydir)
{
    this.spt.x += xdir*grid;
    this.spt.y += ydir*grid;
}}

function keypressed()
{
    if(keyCode  ==UP_ARROW){
        Player.move(0,-2)
    }else if(keyCode  ==DOWN_ARROW){
        Player.move(0,2)
    }else if(keyCode  ==LEFT_ARROW){
        Player.move(-2,0)
    }else  if(keyCode  ==RIGHT_ARROW){
        Player.move(2,0)}
}
