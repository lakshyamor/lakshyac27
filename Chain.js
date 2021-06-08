class Chain {

    constructor(a,b) {

var options = {

    bodyA:a,
    bodyB:b,
    length:200,
    stiffness:0.04

}

this.chain = Constraint.create(options);
World.add(world , this.chain);
}

display() {
var pointA = this.chain.bodyA.position;
var pointB = this.chain.bodyB.position;

strokeWeight(3);
line(pointA.x,pointA.y,pointB.x,pointB.y); 

}

}
