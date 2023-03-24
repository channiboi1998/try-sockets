import { ResponseError } from "./../../api/index";
import { createSlice } from "@reduxjs/toolkit";
import { Order, OrderResponse, UpdateOrderStatus } from "./model";

import { io, Socket } from "socket.io-client";

/**
 * Initial State Interface
 */
type InitialState = {
  errors: {
    fetchOrders: ResponseError | null | "idle";
    updateOrderStatus?: ResponseError | null | "idle";
  };
  updatingOrderStatus: UpdateOrderStatus | null;
  selectedOrderId: string | null;
  isLoading: boolean;
  orders: Order[];
};

/**
 * Initial State
 */
const initialState: InitialState = {
  errors: {
    fetchOrders: "idle",
    updateOrderStatus: "idle",
  },
  updatingOrderStatus: null,
  selectedOrderId: null,
  isLoading: false,
  orders: [],
};

/**
 * State Slice
 */
export const OrderSlice = createSlice({
  name: "[ORDER]",
  initialState,
  reducers: {
    orderSliceReset(state) {
      state = initialState;
    },
    setSelectedOrderId(state, action) {
      state.selectedOrderId = action.payload;
    },
    setOrders(state, action) {
      state.orders = action.payload;
    },
    updateOrderStatus(state, action) {
      const orderToUpdate = state.orders.find(
        (order: Order) => order.id === action.payload.orderId
      );
      if (orderToUpdate && orderToUpdate.status) {
        orderToUpdate.status = action.payload.orderStatus;
      }
    }
  },
});

export const { orderSliceReset, setSelectedOrderId, setOrders, updateOrderStatus } =
  OrderSlice.actions;

export default OrderSlice.reducer;
