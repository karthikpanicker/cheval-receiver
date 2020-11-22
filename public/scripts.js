window._setTimeout = window.setTimeout;
window.setTimeout = function(a, b) {
    console.info("Triggering timeout.")
};
async function getDeviceDetails() {
    const response = await fetch('http://10.0.0.7:8001/launcher/roominfo');
    const roomInfo = await response.json();
    const url = new URL(roomInfo);
    return url.searchParams.get("roomno");
}

async function initSocketConnection(){
    try{
        const roomNo = await getDeviceDetails();
        connect(roomNo);
    } catch {
        console.log("error subscribing to rooms websocket")
    }
}

function connect(roomId) {
    console.log('connecting...');
    var returnEvent = new Event('smartremote:RETURN'),
        playEvent = new Event('smartRemote:PLAY'),
        pauseEvent = new Event('smartRemote:PAUSE')
    if (window["WebSocket"]) {
        var conn = new WebSocket( 'ws://10.0.0.7:9001/ws'+ '?room-id=' + roomId);
        conn.onclose = function (evt) {
            console.log('connection has been closed. Reconnect will be attempted in 1 second.', evt.reason);
            window._setTimeout(function() {
                connect(roomId);
            }, 1000);
        };
        conn.onmessage = function (evt) {
            var messages = evt.data.split('\n');
            var command = messages[0].toUpperCase();
            console.log(command)
            var keyCode = 0;
            switch(command) {
                case 'LEFT':
                    keyCode = 37;
                    break;
                case 'UP':
                    keyCode = 38;
                    break;
                case 'RIGHT':
                    keyCode = 39;
                    break;
                case 'DOWN':
                    keyCode = 40;
                    break;
                case 'OK':
                    keyCode = 13;
                    break;
                case 'RETURN':
                    document.body.dispatchEvent(returnEvent);
                    return;
                case 'MEDIA:PLAY':
                    document.body.dispatchEvent(playEvent);
                    return;
                case 'MEDIA:PAUSE':
                    document.body.dispatchEvent(pauseEvent);
                    return;
            }

            window.dispatchEvent(new KeyboardEvent('keydown',{'keyCode':keyCode}));
            window.dispatchEvent(new KeyboardEvent('keyup',{'keyCode':keyCode}));
            window.dispatchEvent(new KeyboardEvent('keypress',{'keyCode':keyCode}));

        };
    }

}

initSocketConnection();
