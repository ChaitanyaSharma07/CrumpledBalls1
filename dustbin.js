class Dustbin {
    constructor(x, y, width, height) {

        var options = {
            isStatic:true

        }

        this.width= width;
        this.height = height;

        this.body = Bodies.rectangle(x, y, this.width, this.height, options);
        World.add(world, this.body);

    }

    display() {
        var pos = this.body.position;

        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}