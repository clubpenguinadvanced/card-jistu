const socket = new WebSocket('ws://localhost:8765');

socket.addEventListener('open', function (event) {
	// id = whatever comfy's function is for getting penguin id
	id = 101
    socket.send('jitsu#join' + '%' + id);
});

socket.addEventListener('message', function (event) {
    console.log('Packet recieved: ', event.data);
});