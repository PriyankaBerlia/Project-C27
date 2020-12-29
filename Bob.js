class bob{
    constructor(x,y,width,height){
        var options = {
            restitution : 1.2,
            friction : 0.2,
            density : 0.5
        }
        this.body = Bodies.circle(x,y,width,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;        
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,this.width,this.height);
    }
}