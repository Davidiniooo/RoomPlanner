var ApplicationArea = {
  canvas : document.createElemnt("canvas"),
  start : function(){
      this.canvas.width= 100;
      this.canvas.height=100;
      this.context = this.canvas.getContext("2d");
      document.body.instetBefore(this.canvas,document.body.childNodes[0]);
      },
  clear : function() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
