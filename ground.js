class Ground{
    constructor(){
        this.body=Bodies.rectangle(600,380,1200,20,{isStatic:true})
        World.add(world,this.body)
    }
    display(){
        push ()
        fill ("brown")
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,1200,20);
    pop ()
    }
}