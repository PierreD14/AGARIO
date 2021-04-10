class Phyto{
  constructor(x,y,color){
    this.x = x
    this.y = y
    this.color = color
    this.diameter = 12
  }  
  
  
  
  drawPhyto(){
    noStroke()
    fill(this.color)
    circle(this.x, this.y, this.diameter)
  }
}