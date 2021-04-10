class Player{
  constructor(x,y, color){
    this.x = x
    this.y = y
    
    this.color = color
    //this.name = name
    this.diameter = 40
  }
  
  drawPlayer(){
    fill(this.color)
    this.x = x
    this.y = y
    circle(this.x, this.y, this.diameter)
  }
  
  eat(phytos){
    phytos.forEach(phyto=>{
          let d = dist(phyto.x, phyto.y, this.x, this.y)
       if(d<(this.diameter/2 + phyto.diameter/2)){
         let index = phytos.indexOf(phyto)
         console.log(index)
         phytos.splice(index, 1)
         this.diameter+=0.2
       }
    })
  }
}