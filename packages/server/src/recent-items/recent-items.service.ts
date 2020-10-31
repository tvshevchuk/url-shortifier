import { MessageBody, SubscribeMessage, WebSocketGateway, WebSocketServer } from "@nestjs/websockets";
import { from, timer } from "rxjs";
import { map } from "rxjs/operators";
import { Server } from "socket.io";

@WebSocketGateway()
export class RecentItems {
    @WebSocketServer() 
    server: Server;

    @SubscribeMessage('toServer')
    getItems(@MessageBody() payload) {
        console.log('>>> payload', payload);
        // this.server.emit('toClient', payload);
        return timer(1000, 1000);
    }
}