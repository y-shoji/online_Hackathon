
//Websocketに接続する
const socket = new WebSocket("ws://localhost:8000/serialLED/");

//通信が接続された場合
socket.on("open",function(event){
	socket.send("Hello Server");
});

// socket.on("message",function(event){
// 	console.log("Hello");
// })

socket.on("cancel",function(event){
	socket.close();
})


function sendText(){
	let msg = {
		type:"message",
		text:document.getElementById("text").value,
		id:clientID,
		date:Date.now()
	};

	socket.send(JSON.stringify(msg));

	document.getElementById("text").value="";
}