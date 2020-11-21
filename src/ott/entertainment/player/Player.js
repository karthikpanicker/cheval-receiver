import React, { Component } from "react";
import "./Player.css";
/*global cast , dashjs */
class Player extends Component {
    store;
    video;
    host;
    protocol;
    context;
    isPlaying = true;
    conn;
    constructor(props) {
        super(props);
        this.store = this.props.store;
      //  this.playContent()
    }

    playContent() {
        fetch('http://10.154.5.151:5000/media/load', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                url: this.store.selectedMovie.preview.video,
                content_type: this.store.selectedMovie.preview.content_type,
            })
        })

    }

    mediaEventListener = event => {
        let { history } = this.props;
        if(event.type === 'MEDIA_FINISHED' && event.endedReason === 'END_OF_STREAM') {
            history.goBack();
            document.getElementById('media').style.visibility = "hidden";
        }
    }

    addMediaEventListener() {
       // window.playerManager.addEventListener(cast.framework.events.category.CORE, this.mediaEventListener);

    }

    play = () => {
            fetch('http://10.154.5.151:5000/media/play');
    }

    pause = () =>  {
            fetch('http://10.154.5.151:5000/media/pause')
    }

    stop() {
    fetch('http://10.154.5.151:5000/media/stop')
        .then(res => { document.getElementById('media').style.visibility = "hidden";})
    }


    componentDidMount() {
        // document.getElementById('media').style.visibility = "visible";
        // document.body.addEventListener('smartRemote:PLAY', this.play);

        // document.body.addEventListener('smartRemote:PAUSE', this.pause)
        // this.addMediaEventListener();

    };

    componentWillUnmount() {
        // document.body.removeEventListener('smartRemote:PLAY', this.play );
        // document.body.removeEventListener('smartRemote:PAUSE', this.pause);
        // window.playerManager.removeEventListener(cast.framework.events.category.CORE, this.mediaEventListener);
        // this.stop();
    }

    render() {
        return(
           ' <cast-media-player  id="media"></cast-media-player>'
        )
    }
}

export default Player;