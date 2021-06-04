class Box
{
    constructor(x,y,width,height)
    {
        var option={
            restitution: 0.8,
            density:1,
            friction:2

        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate (this.body.angle)
        rectMode(CENTER);
        fill ("yellow")
        rect(0,0,this.width,this.height);  
        pop()  
    }
}

