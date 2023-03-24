export type OrderItem = {
  productId: string;
  name: string;
  thumbnail: string;
  stockId: string;
  sizeInfo: string;
  unitPrice: number;
  sku: string;
  quantity: number;
};

export type Order = {
  createdAt: string;
  updatedAt: string;
  sid: string;
  user: {
    id: number;
    uid: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: string | null;
    updatedAt: string;
    mobile: string;
    receiveNewsletter: boolean;
  };
  coordinates: string;
  firstName: string;
  lastName: string;
  mobile: string;
  email: string;
  items: OrderItem[];
  status: string;
  paymentMethod: string;
  subtotal: number;
  discount: number;
  total: number;
  disposition: string;
  dispositionType: string;
  dispositionSchedule: string;
  deliveryFee: string;
  deliveryAddress: string;
  detailedDeliveryAddress: string;
  notesToRider: string;
  includeUtensils: boolean;
  specialInstructions: string;
  ids: {
    fullName: string;
    idNumber: string;
    type: string;
    uid: string;
    fileName: string;
  }[];
  store: {
    location: {
      type: string;
      coordinates: number[];
    };
    code: string;
    name: string;
    description: string;
    address: string;
    distance: number;
    contactNumber: string;
    deliveryEta: number;
    opensAt: string;
    closesAt: string;
    timeZone: string;
    createdAt: string;
    updatedAt: string;
    id: string;
  };
  gift: {
    firstName: string;
    lastName: string;
    notifyRecipient: boolean;
    email: string;
    includeNote: boolean;
    note: string;
  };
  id: string;
  variant?: "success" | "warning" | "danger";
  elapsedTime?: string;
};

export type OrderResponse = {
  orders: Order[];
};

export type UpdateOrderStatus = {
  storeId: string;
  orderId: string;
  orderStatus: string;
};
