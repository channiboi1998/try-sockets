import { Socket, Server } from 'socket.io';
import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  WebSocketServer,
  ConnectedSocket,
} from '@nestjs/websockets';
import { OrdersService } from './orders.service';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class OrdersGateway {
  @WebSocketServer()
  server: Server;

  constructor(private readonly ordersService: OrdersService) {} 

  @SubscribeMessage('joinStore')
  joinStore(@MessageBody() storeId: string, @ConnectedSocket() client: Socket) { 
    client.join("SPECIFIC_STORE_ID"); // Join the client to the specified room 
    console.log('CLIENT SOCKET JOINED ROOM/STORE ID:', storeId);
    return this.ordersService.getOrdersByStoreId(storeId);
  }

  @SubscribeMessage('updateOrderStatus')
  updateOrderStatus(@MessageBody() updateOrderStatusDto: UpdateOrderStatusDto) {
    const response = this.ordersService.updateOrderStatus(updateOrderStatusDto);
    //For updating all sockets that are in roomId/storeId.
    this.server
      .to("SPECIFIC_STORE_ID")
      .emit('updateOrderStatus', response);
    return response;
  }
}
