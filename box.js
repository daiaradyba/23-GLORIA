class Box{
    //as propriedades
    constructor(){
        var options ={
            restitution: 1.0
        }
        this.body = Bodies.rectangle(200,200,50,50,options);
        Matter.World.add(world,this.body);
    }
    display(){
        console.log("ENTREI NO DISPLAY DA CAIXA")
        rectMode(CENTER);
        fill(255);
        rect(this.body.position.x,this.body.position.y,50,50);
    }
    
   
}