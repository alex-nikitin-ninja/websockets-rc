let wsEnabled = false;
if (wsEnabled === true) {
	var ws = new WebSocket("ws://127.0.0.1:8765/");

	function sendJStatus(){
	    ws.send(JSON.stringify(movableObjectValues)); 
	    setTimeout(function(){
	        sendJStatus();
	    }, 50);
	};

	ws.onopen = function (event) {
	    console.log('onopen worked...');
	    // ws.send("test sent"); 
	    sendJStatus();
	};

	ws.onmessage = function (event) {
	    // sendJStatus();
	    // console.log(event.data);
	};
}
