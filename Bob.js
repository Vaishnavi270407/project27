class Bob{
    constructor(x,y,r){
        var options = {
            isStatic: true,
            restitution:0.3,
            friction:0.5,
            density:.8
        }
        this.body = Bodies.circle(x,y,r,options)
        //this.image= loadImage("paper.png")
        this.radius = r
        World.add(world,this.body)
        
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("yellow");
        //imageMode(CENTER);
        circle(10,10,this.radius);
        //    image(this.image, 10, 10, this.radius, this.radius);
        pop();
      }
        //rectMode(CENTER);
        //fill("blue");
        //circle(pos.x, pos.y, this.radius);
      
}