import {
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(3080,{ cors: { origin: '*' } })
export class ChatGateway
  implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect
{

  

  @WebSocketServer() server: Server;


  afterInit(server: Server) {
   
    console.log("init");
  }

  handleConnection(client: Socket, ...args: any[]) {
    
    console.log(` ${client.id} is connected`);
  }

  handleDisconnect(client: Socket) {
    
    console.log(` ${client.id} is disconnected`);
  }

  @SubscribeMessage('sendMessage')
  handleSendMessage(client: any, payload: any) {
    console.log(client.id);
    console.log(payload);
    this.server.emit('receivedMessage', payload.content); // broadcast the message to all connected clients
}

}