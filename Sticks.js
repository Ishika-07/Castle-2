class Stick{

constructor(x,y,width,height){

this.twig=Bodies.rectangle(x,y,width,height);
this.width=width;
this.height=height;
this.x=x;
this.y=y;
this.image=loadImage("wood2.png");
World.add(world, this.twig);
    

}
display(){


image(this.image,this.x,this.y,this.width,this.height);

}

};