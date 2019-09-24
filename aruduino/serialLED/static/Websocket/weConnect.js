//Websocketに接続する
var connection = new WebSocket("");

通信が接続された場合

connection.onopen = function(e){
	connection.send("sample data");
};

//エラーが発生した場合
connection.onerror = function(error){

};

//メッセージを受け取った場合
connection.onmessage = function(e){

};

//通信が切断され
connection.onclose = function(){
	connection.close();
};


