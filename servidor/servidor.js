const app = require('express')();
const servidor = require('http').Server(app);
const io = require('socket.io')(servidor);
const cors = require('cors');
const gerarValores = require('./gerarValores');

app.use(cors());
servidor.listen(3000);

io.on('connection', function(socket){
	
	setInterval(function repeticao(){
	    socket.emit('atualizaBarras', gerarValores());
	}, 5000);
	
});



