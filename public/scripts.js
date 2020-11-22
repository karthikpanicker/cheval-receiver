window._setTimeout = window.setTimeout;
window.setTimeout = function(a, b) {
    console.info("Triggering timeout.")
};
async function getDeviceDetails() {
    return fetch('url')
}


async function initSocketConnection(){
    // let success = true;
    // const response = await getDeviceDetails().catch(err => { success = false; setTimeout(initSocketConnection, 1000); return;});
    // if (!success) {
    //     return;
    // }
    // if (!response.count) {
    //     setTimeout(initSocketConnection, 2000);
    //     return;
    // }
    connect(4000);
}

function connect(roomId) {
    console.log('connecting...');
    var returnEvent = new Event('smartremote:RETURN'),
        playEvent = new Event('smartRemote:PLAY'),
        pauseEvent = new Event('smartRemote:PAUSE')
    if (window["WebSocket"]) {
        var conn = new WebSocket( 'ws://10.0.0.7:9000/ws'+ '?room-id=' + roomId);
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
