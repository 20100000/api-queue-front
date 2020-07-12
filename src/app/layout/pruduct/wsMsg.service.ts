import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { WebsocketService } from '../common/websocket.service';

const SERVER_URL = 'ws://127.0.0.1:7788/';

export interface Message {
    data: any
}

@Injectable()
export class WsMsg {
    public messages: Subject<Message>;

    constructor(wsService: WebsocketService) {
        this.messages = <Subject<Message>>wsService
            .connect(SERVER_URL,'product')
            .pipe(map((response: MessageEvent): Message => {
                let data = JSON.parse(response.data);
                return {
                    data: data.data
                };
            }));
    }
}
