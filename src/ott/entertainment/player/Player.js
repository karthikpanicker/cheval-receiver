import React, { Component } from "react";
import "./Player.css";
/* global Plyr,Hls  */
class Player extends Component {
    store;
    video;
    host;
    protocol;
    context;
    conn;
    promise;
    player;
    hls;
    isLoading = true;

    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    loadVideo() {
        this.video.setAttribute("controlsList","nofullscreen nodownload nopictureinpicture");
        this.video.setAttribute("type", this.store.selectedMovie.preview.content_type);
        let controls;
        if (this.store.selectedMovie.type === 'TV') {
            controls = ['play-large'];
        } else {
            controls = ['play-large', 'progress', 'current-time',]
        }
        this.player = new Plyr(this.video, {captions: {active: true, update: true, language: 'en'},
            controls:controls,
            loadSprite:true,
            seekTime:10});
        if(this.store.selectedMovie.preview.content_type !== 'application/x-mpegURL') {
            this.video.setAttribute("src", this.store.selectedMovie.preview.video);
        } else {
            if (!Hls.isSupported()) {
                this.video.setAttribute("src", this.store.selectedMovie.preview.video);
            } else {
                // For more Hls.js options, see https://github.com/dailymotion/hls.js
                this.hls = new Hls();
                this.hls.loadSource(this.store.selectedMovie.preview.video);
                this.hls.attachMedia(this.video);
            }
        }
        this.video.load();
        this.video.play();
    }

    addMediaEventListener() {
        document.body.addEventListener('smartRemote:PLAY', this.play);
        document.body.addEventListener('smartRemote:PAUSE', this.pause)
        document.body.addEventListener('smartRemote:PLAY-PAUSE', this.togglePlayback);
        document.body.addEventListener('smartRemote:FORWARD', this.forward);
        document.body.addEventListener('smartRemote:REWIND', this.rewind);
        window.addEventListener('keypress', this.mediaPlayerHandler);
        document.getElementById('mediaElement').addEventListener('ended',this.mediaEndHandler,false);
        document.getElementById('mediaElement').addEventListener('loadstart',this.addLoader,false);
        document.getElementById('mediaElement').addEventListener('canplay',this.removeLoader,false);

    }

    play = () => {
        this.video.play();
    }

    test = (event) => {
        console.log(event)
    }

    mediaPlayerHandler = (event) =>{
        if(this.isLoading) {
            return;
        }
        if(event.keyCode === 13) {
            //this.togglePlayback();
            return;

        }
        document.getElementById('mediaElement').dispatchEvent(new KeyboardEvent('keypress',{'keyCode': event.keyCode}));
        document.getElementById('mediaElement').dispatchEvent(new KeyboardEvent('keydown',{'keyCode': event.keyCode}));
        document.getElementById('mediaElement').dispatchEvent(new KeyboardEvent('keyup',{'keyCode': event.keyCode}));
    }

    pause = () => {
        this.video.pause();
    }

    togglePlayback = () => {
        if(this.player.paused) {
            this.play();
        } else {
            this.pause();
        }
    }

    forward = () => {
        this.player.forward();
    }

    rewind = () => {
        this.player.rewind()
    }

    addLoader = () => {
        this.isLoading = true;
        this.video.classList.add("black");
        this.video.setAttribute("poster", "https://i.gifer.com/V8kX.gif");
    }

    removeLoader = () => {
        this.isLoading = false;
        this.video.classList.remove("black")
        this.video.removeAttribute("poster");
    }


    stopVideo = () => {
        this.video.pause();
        this.video.removeAttribute('src'); // empty source
        this.video.load();
        if(this.hls) {
            this.hls.destroy();
        }
    }


    componentDidMount() {
        this.loadVideo();
        this.addMediaEventListener();
    };

    removeEventHandlers() {
        document.body.removeEventListener('smartRemote:PLAY', this.play );
        document.body.removeEventListener('smartRemote:PAUSE', this.pause);
        document.body.removeEventListener('smartRemote:PLAY-PAUSE', this.togglePlayback);
        document.body.removeEventListener('smartRemote:FORWARD', this.forward);
        document.body.removeEventListener('smartRemote:REWIND', this.rewind);
        window.removeEventListener('keypress', this.mediaPlayerHandler);
        document.getElementById('mediaElement').removeEventListener('ended',this.mediaEndHandler);
        document.getElementById('mediaElement').removeEventListener('loadstart',this.addLoader);
        document.getElementById('mediaElement').removeEventListener('canplay',this.removeLoader);
    }

    mediaEndHandler = () => {
        let {history} = this.props;
        history.goBack();
    }

    componentWillUnmount() {
        this.removeEventHandlers();
        this.stopVideo();

    }



    render() {
        return (
            <div tabIndex="0"
                 className="plyr plyr--full-ui plyr--video plyr--html5 plyr--pip-supported plyr--fullscreen-enabled">
                <video className={'video'} poster={this.store.selectedMovie.preview.poster}
                       id="mediaElement" preload="none" controls ref={(v)=>{this.video=v}}>
                </video>
            </div>
        )
    }
}

export default Player;
