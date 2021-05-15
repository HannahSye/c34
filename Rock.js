class Rock{

    constructor(x,y,width,height){
      var options ={ isStatic: false}
      
      this.body =  Bodies.rectangle(x,y,width,height,options);
      World.add(myWorld,this.body);
      this.width = width;
      this.height = height;
      this.image=loadImage("images/rock1.png")
    }
    
    show()
    {
        // rectMode(CENTER);
        // rect(this.body.position.x, this.body.position.y,this.width, this.height);


        // rect( x, y , width, height)
        // image(img, x, y, width, height)
        
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, this.width,this.height)
    }
  
  
}
  
  
