import {
  
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';

@WebSocketGateway(4040,{ cors: { origin: '*' } })
export class ChatGateway
  
{
  @WebSocketServer() server: Server;

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
    this.server.emit('receivedMessage', payload.content); 
}

}