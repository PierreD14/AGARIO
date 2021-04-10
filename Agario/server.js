const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, showListen);


function showListen() {
	const port = server.address().port;
	console.log("je suis en train d'écouter le port" + port);
}

app.use(express.static('public'));


const io = require('socket.io')(server);
	setInterval(heartbeat, 33)
	function heartbeat(){
		io.sockets.emit('heartbeat', players)
		}
io.sockets.on('connection',(socket) => {
	console.log("we have a new websocket connection " + socket.id);
	socket.on('start',(data)=>{
		console.log(data)
		let player = newPlayer(data.x, data.y, data.color)
		players.push(newPlayer);
	});

});

