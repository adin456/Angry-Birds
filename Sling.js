class Sling{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length : 10
        }
        this.pointB=pointB;
        this.sling=Matter.Constraint.create(options);
        World.add(world,this.sling); 
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
         this.sling.bodyA=body
    }
    display(){
        if(this.sling.bodyA){
        var pA=this.sling.bodyA.position
        var pB=this.pointB 
        push()
        stroke("blue");
        strokeWeight(4);
        line(pA.x,pA.y,pB.x,pB.y);
        pop()
    }
}
}