import { Order } from "./model";
import { RootState } from "./../index";
import { createSelector } from "@reduxjs/toolkit";
import { sortOrdersByCreatedAtAsc } from "../../utilities/orders";

/**
 * Get the order that is being updated.
 */
export const getUpdatingOrderStatus = (state: RootState) =>
  state.order.updatingOrderStatus;

export const getSelectedOrderId = (state: RootState) =>
  state.order.selectedOrderId;

/**
 * Get the selected order item selector.
 */
export const getOrderBySelectedOrderId = (state: RootState) => {
  return (
    state.order.orders.find(
      (order: Order) => order.id === state.order.selectedOrderId
    ) || null
  );
};

/**
 * Get the loading state property.
 */
export const getIsLoading = (state: RootState) => state.order.isLoading;

/**
 * Error Selectors.
 */
export const selectErrors = (state: RootState) => state.order.errors;

/**
 * Error Selector for "fetchOrders" Error.
 */
export const getFetchOrderErrors = createSelector([selectErrors], (error) => {
  return error.fetchOrders;
});

/**
 * Error Selector for "getUpdateOrderStatus".
 */
export const getUpdateOrderStatusErrors = createSelector(
  [selectErrors],
  (error) => {
    return error.updateOrderStatus;
  }
);

/**
 * Orders Selector.
 */
export const selectOrders = (state: RootState) => state.order.orders || [];

/**
 * Selector for getting "open" orders.
 */
export const getOpenOrders = createSelector(
  [selectOrders],
  (orders: Order[]) => {
    return sortOrdersByCreatedAtAsc(
      orders.filter((order: Order) => order.status === "open" ?? [])
    );
  }
);

/**
 * Selector for getting "confirmed" orders.
 */
export const getConfirmedOrders = createSelector(
  [selectOrders],
  (orders: Order[]) => {
    return sortOrdersByCreatedAtAsc(
      orders.filter((order: Order) => order.status === "confirmed" ?? [])
    );
  }
);

/**
 * Selector for getting "advancing" orders.
 */
export const getAdvancingOrders = createSelector(
  [selectOrders],
  (orders: Order[]) => {
    return sortOrdersByCreatedAtAsc(
      orders.filter((order: Order) => order.status === "advancing" ?? [])
    );
  }
);
