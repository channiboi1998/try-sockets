import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client/build/esm/socket";
import { Order } from "../../store/order/model";
import { getFetchOrderErrors, getIsLoading } from "../../store/order/selectors";
import { getDeliveryTimelineThresholds } from "../../store/store-slice/selectors";
import {
  getElapsedTime,
  getOrderVariantTimestamp,
} from "../../utilities/dateTimeFormatters";
import OrderCard from "./order-card";

type Props = {
  orders?: Order[];
  title: string;
  socket?: Socket | null;
};

const OrderEntries = ({ orders, title, socket }: Props) => {
  const fetchOrderErrors = useSelector(getFetchOrderErrors);
  const isLoading = useSelector(getIsLoading);
  const deliveryTimelineThresholds = useSelector(getDeliveryTimelineThresholds);

  /**
   * Define initial state for updatedOrders.
   */
  const [updatedOrders, setUpdatedOrders] = useState<Order[]>([]);

  /**
   * A function that updates the copied set of orders from slice, adds or updates order's "elapsedTime" and "variant".
   */
  const updateOrders = (orders: Order[]) => {
    const updatedOrders = orders.map((order) => {
      const variant = getOrderVariantTimestamp(
        order.createdAt,
        deliveryTimelineThresholds
      );
      const elapsedTime = getElapsedTime(order.createdAt);
      return {
        ...order,
        variant,
        elapsedTime,
      };
    });
    setUpdatedOrders(updatedOrders);
  };

  /**
   * useEffect hook that runs "updateOrders" method every 1 second.
   */
  useEffect(() => {
    if (!orders) return;

    updateOrders(orders); // call the function to update orders initially

    const interval = setInterval(() => {
      updateOrders(orders); // call the function to update orders periodically
    }, 1000);

    return () => clearInterval(interval);
  }, [orders]);

  if (isLoading === true) {
    return <p className="p-4 text-center">Fetching Orders...</p>;
  }

  if (isLoading === false && fetchOrderErrors && fetchOrderErrors !== "idle") {
    return (
      <>
        <p className="p-4 text-center">
          There has been an error on your request.
        </p>
      </>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <>
        <p className="p-4 text-center">
          There are no
          <span className="lowercase font-semibold"> {title} </span>
          orders.
        </p>
      </>
    );
  }

  return (
    <>
      {updatedOrders.map((order: Order) => (
        <OrderCard key={order.id} order={order} socket={socket} />
      ))}
    </>
  );
};

export default OrderEntries;
