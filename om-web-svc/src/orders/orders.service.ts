import { Injectable } from '@nestjs/common';
import { UpdateOrderStatusDto } from './dto/update-order-status.dto';

@Injectable()
export class OrdersService {
  //Memory database
  orders = [
    {
      createdAt: '2023-03-08T05:45:32.036Z',
      updatedAt: '2023-03-09T09:23:47.079Z',
      sid: '64056b27-c8f1-4be7-b92b-0d1154fc2309',
      user: {
        id: 1,
        uid: '761b81d0-9645-11ed-80f8-06837ee29c40',
        email: 'alexander.magtipon@jollibee.com.ph',
        firstName: 'Zander',
        lastName: 'Magtipon',
        createdAt: null,
        updatedAt: '2023-02-22T06:47:10.210Z',
        mobile: '+639001234567',
        receiveNewsletter: false,
      },
      coordinates: '121.0615934,14.58776208',
      firstName: 'DEV',
      lastName: 'Tester',
      mobile: '9001234567',
      email: 'greenwich@jollibee.com.ph',
      items: [
        {
          productId: '63e042d62dc63341741d5822',
          name: 'TEST PRODUCT 01',
          thumbnail: '/images/products/hawaiian-overload',
          stockId: '63e0472cacc39e3630280c50',
          sizeInfo: '12" Solo',
          unitPrice: 480,
          sku: 'TESTSKU3',
          quantity: 1,
        },
        {
          productId: '63e042d62dc63341741d5822',
          name: 'TEST PRODUCT 01',
          thumbnail: '/images/products/hawaiian-overload',
          stockId: '63e0472cacc39e3630280c4f',
          sizeInfo: '9" Solo',
          unitPrice: 290,
          sku: 'TESTSKU2',
          quantity: 1,
        },
      ],
      status: 'open',
      paymentMethod: 'cash',
      subtotal: 770,
      discount: 0,
      total: 770,
      disposition: 'deliver',
      dispositionType: 'now',
      dispositionSchedule: '2023-03-08T14:00:00+08:00',
      deliveryFee: '0',
      detailedDeliveryAddress: 'AA',
      notesToRider: '',
      includeUtensils: false,
      specialInstructions: '',
      ids: [],
      store: {
        location: {
          type: 'Point',
          coordinates: [121.0571472667078, 14.58407100162837],
        },
        code: 'TEST STORE 01',
        name: 'TEST STORE 01',
        description: 'TEST STORE 01',
        address: 'TEST STORE 01',
        distance: 2,
        contactNumber: '(02) 822-97549754',
        deliveryEta: 60,
        opensAt: '08:00:00 GMT+8',
        closesAt: '22:00:00 GMT+8',
        timeZone: 'Asia/Manila',
        createdAt: '2023-02-05T23:24:52.480Z',
        updatedAt: '2023-02-05T23:24:52.480Z',
        id: '63e03ac4e2dafda4f35f5e5c',
      },
      id: '640820fc01e1501e3293b8b0',
    },
  ]; 

  getOrdersByStoreId(storeId: string) {
    //Let's assume that this method will return all orders that has storeId equivalent to prop.
    return this.orders;
  }

  updateOrderStatus(updateOrderStatusDto: UpdateOrderStatusDto) {  
    console.log('UPDATING ORDER:', updateOrderStatusDto);
    const orderToUpdate = this.orders.find(
      (order) => order.id === updateOrderStatusDto.orderId,
    );
    if (orderToUpdate) {
      console.log('BEFORE UPDATING ...', orderToUpdate.status);
      orderToUpdate.status = updateOrderStatusDto.orderStatus;
      console.log('AFTER UPDATING ...', orderToUpdate.status);
      // Return only the orderId & the updated status.
      return { orderId: orderToUpdate.id, orderStatus: orderToUpdate.status };
    } else {
      // Order to update is not found, return null.
      return {
        error: true,
        message: 'Unable to find the order you want to update.',
      };
    }
  }
}
