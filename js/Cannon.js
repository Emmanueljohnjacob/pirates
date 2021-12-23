class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonImg=loadImage("./assets/canon.png")
    this.cannonbaseImg=loadImage("./assets/cannonBase.png")

  }
  Display(){
    push ();
    translate (this.x,this.y);
    rotate(this.angle);
    imageMode(CENTER)
    image (this.cannonImg,0,0,this.width,this.height)
    pop ();
    image(this.cannonbaseImg,70,20,200,200)
  }

  

}
