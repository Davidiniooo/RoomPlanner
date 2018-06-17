class Obstacle {
  constructor(x,y,w,h,id) {
    this.xPos    = x;
    this.yPos   = y;
    this.height = h;
    this.width  = w;
    this.id     = id;
    this.xPos=parseInt(this.xPos);
    this.yPos=parseInt(this.yPos);
    this.height=parseInt(this.height);
    this.width=parseInt(this.width);

  }
}
