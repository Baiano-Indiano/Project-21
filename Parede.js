class Parede {
    constructor(x,y,l,a){
        var config = {
            isStatic: true
        }
        this.corpo = Bodies.rectangle(x,y,l,a,config);
        World.add(world,this.corpo);
        this.largura = l;
        this.altura = a;
    }
    show(){
        var pos = this.corpo.position;
        push();
        stroke("black");
        fill("red");
        rect(pos.x, pos.y, this.largura, this.altura);
        pop();
    }
}