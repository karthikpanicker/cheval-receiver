import React, { Component } from "react";
import "./QrCode.css";
/*global QRious */
class QrCode extends Component {
    interval;
    responseJson;
    state = { isFinished: false };

    componentDidMount() {
        this.fetchQr();
        this.interval = window.setInterval(this.fetchQr, 10000);
    }

    fetchQr = () => {
        fetch('http://10.147.4.160:8000/api/roominfo')
            .then((response) => {
                if (response.status == 200) {
                    return response.json();
                } else {
                    this.responseJson = null;
                    this.setState({ isFinished:false });
                }
            })
            .then((myJson) => {
                if (myJson && !this.state.isFinished) {
                    this.responseJson = myJson;
                    this.setState({ isFinished: true });
                    this.generateQr();
                }
            });
    }

    generateQr() {
        var qr = new QRious({
            element: document.getElementById('qr-code'),
            value: this.responseJson
        });
    }

    componentWillUnmount() {
        clearInterval(this.interval);

    }

    render() {
        return (
        <div>
            { this.state.isFinished &&
            <img id="qr-code" className="qr-code"/>
            }
            { this.state.isFinished &&
            <ol>
                <li> {'Connect to guest Wifi'}</li>
                <li> {' Scan the QR code'}</li>
                <li> {'Cast using your favorite app'}</li>
            </ol>
            }

        </div>

    )
    }
}

export  default QrCode;