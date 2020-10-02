class Bob{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution:0.002,
            friction:0.1,
            density:5
        }
        this.x=x;
        this.r=r;
        this.y=y;

        this.body=Bodies.circle(this.x,his.y,this.r/2,options)
        World.add(world,this.body)
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        ellipseMode(CENTER);
        circle(0,0,this.r);
        pop();
      }
      
}