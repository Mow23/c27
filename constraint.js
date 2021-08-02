class constraint{
    constructor(bodyA,bodyB) {
        var options = {
            'length':15,
            'stiffness':0.05,
            bodyA:bodyA,
            bodyB:bodyB
        }
        this.constraint = Constraint.create(options);
        World.add(world, this.constraint);
    }
    display(){
        var abc = this.constraint.bodyA.position;
        var bcd = this.constraint.bodyB.position;
        push ();
        strokeWeight(5);
        line(abc.x,abc.y,bcd.x,bcd.y);
        pop ();
    }
}