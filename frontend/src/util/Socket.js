import {EventEmitter} from "events";

export class Socket {
    constructor(ws = new WebSocket(), ee = new EventEmitter()){

        this.ws = ws;
        this.ee = ee;

        ws.onopen = this.open.bind(this);
        ws.onclose = this.close.bind(this);
        ws.onmessage = this.message.bind(this);
    }

    on(eventName, fn){
        this.ee.on(eventName, fn)
    }

    off(eventName, fn){
        this.ee.removeListener(eventName, fn)
    }

    emit(eventName, data){
        const message = JSON.stringify({name, data});
        this.ws.send(message);
    }

    open(){
        this.ee.emit("connect")
    }

    close(){
        this.ee.emit("disconnect")
    }

    message(e){
        try{
            let message = JSON.parse(e)
            this.ee.emit(message.name, message.data)
        }catch(err){
            this.ee.emit("error", err)
        }
    }
}