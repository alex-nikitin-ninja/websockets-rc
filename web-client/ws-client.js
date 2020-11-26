let wsEnabled = false;
// let wsEnabled = true;

// RC commands sending socket
if (wsEnabled === true) {
    // var ws = new WebSocket("ws://192.168.0.116:8765/");
    var ws = new WebSocket("ws://127.0.0.1:8765/");

    function sendJStatus() {
        ws.send(JSON.stringify(movableObjectValues));
        setTimeout(function() {
            sendJStatus();
        }, 50);
    };

    ws.onopen = function(event) {
        console.log('onopen worked...');
        // ws.send("test sent"); 
        sendJStatus();
    };

    ws.onmessage = function(event) {
        // sendJStatus();
        console.log(event.data);
    };
}

// camera streaming socket
if (0) {
    // var ws = new WebSocket("ws://192.168.0.116:8765/");
    var ws = new WebSocket("ws://127.0.0.1:8764/");

    function getImageCommand() {
        ws.send(JSON.stringify({ action: 'get-image' }));
        // setTimeout(function(){
        // 	getImageCommand();
        // }, 50);
    };

    ws.onopen = function(event) {
        console.log('onopen worked...');
        // ws.send("test sent"); 
        getImageCommand();
    };

    ws.onmessage = function(event) {
        setTimeout(function() {
            getImageCommand();
        }, 250);
        // console.log(event.data);

        let data = event.data;
        data = JSON.parse(data);

        if (data.hasOwnProperty('f')) {
            let img = data.f;
            // document.getElementById("camera-view").style.backgroundImage = "url('data:image/png;base64," + img + "')";
            document.getElementById("image-one").setAttribute("src", "data:image/jpeg;base64," + img + "");
            // document.getElementById("image-two").style.backgroundImage = "url('data:image/png;base64," + img + "')";
        }

    };
}