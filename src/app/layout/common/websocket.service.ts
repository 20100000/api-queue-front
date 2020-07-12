import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
    public websocket: any;
    private subject: Subject<MessageEvent>;

    public connect(url, action): Subject<MessageEvent> {
        if (!this.subject) {
            this.subject = this.create(url, action);
            console.log("Successfully connected: " + url);
        }
        return this.subject;
    }

    private create(url, action): Subject<MessageEvent> {
        let ws = new WebSocket(url);

        let observable = Observable.create(
            (obs: Observer<MessageEvent>) => {
                ws.onmessage = obs.next.bind(obs);
                ws.onerror = obs.error.bind(obs);
                ws.onclose = obs.complete.bind(obs);
                return ws.close.bind(ws);
            });

        let observer = {
            next: (data: Object) => {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(action);
                }
            }
        };

        return Subject.create(observer, observable);
    }

}
