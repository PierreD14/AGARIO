
let firstPhyto;
let firstPlayer;
let easing=0.95;
let phytos;
let colors = ["blue", "green", "purple", "yellow", "azur", "orange", "red", "bisque", "chocolate", "darkblue", "darkcyan", "#FF8C00", "#FF00FF", "#ADFF2F"]



                                  //SETUP

socket=io.connect('http://localhost:3000')



function setup() {
  createCanvas(400, 400);
                      //FOOD
  firstPhyto = new Phyto(random(400), random(400), random(colors));
  
  phytos = [firstPhyto]
  
  for (i = 0; i<150; i++){
    let newPhyto = new Phyto(random(400), random(400), random(colors))
    phytos.push(newPhyto);
  }
  
                      //PLAYER
  player1 = new Player(random(colors));
  
players = [player1] 
  
    for (i = 0; i<0; i++){
    let newPlayer = new Player(random(colors))
  }
  console.log(players)

    let data = {
    x: player1.x,
    y: player1.y,
    color: player1.color
  }
   socket.emit('start', data)
   socket.on('heartbeat', player=>{
    players=data
   })

}

                            //DRAW

function draw() {
  background(220);
  phytos.forEach(phyto =>{
        phyto.drawPhyto();
      })
  
  players.forEach(player =>{
    player.drawPlayer();
    player.eat(phytos);
  })
}

