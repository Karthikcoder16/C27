class Chain {

    constructor(bodya ,bodyb) {
        
        var options = {
            bodyA: bodya,
            bodyB: bodyb,
            stiffness: 0.04,
            length: 100
        }
    this.chain = Constraint.create(options);
    this.bodyA = bodya;
    this.bodyB= bodyb
        World.add(world, this.chain);




    }

display(){



    strokeWeight(5);
    line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.bodyB.position.x, this.chain.bodyB.position.y);




}






}