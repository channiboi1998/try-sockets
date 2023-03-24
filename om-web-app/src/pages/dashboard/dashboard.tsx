import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { Socket } from "socket.io-client/build/esm/socket";
import { useAppDispatch } from "../../store";
import {
  getAdvancingOrders,
  getConfirmedOrders,
  getOpenOrders,
} from "../../store/order/selectors";
import { setOrders, updateOrderStatus } from "../../store/order/slice";
import { getSelectedStoreId } from "../../store/store-slice/selectors";
import Legends from "./legends";
import OrdersList from "./orders-list";
import UpdateOrderModal from "./update-order-modal";
import ViewOrderModal from "./view-order-modal";

const Dashboard = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch(); 

  const [socket, setStocket] = useState<Socket | null>(null);
  const selectedStoreId = useSelector(getSelectedStoreId);
  useEffect(() => {
    if (selectedStoreId) {
      const newSocket = io("http://localhost:3333");

      setStocket(newSocket);

      //Mthod for joining the room and fetching the orders
      newSocket.emit(
        "joinStore",
        { storeId: selectedStoreId },
        (orders: any) => {
          dispatch(setOrders(orders));
        }
      );

      newSocket.on("updateOrderStatus", (response: any) => {
        dispatch(updateOrderStatus(response));
      });
    }
  }, [selectedStoreId]);

  return (
    <>
      <ViewOrderModal />
      <UpdateOrderModal />
      <div className="flex flex-row items-center pb-4 border-b">
        {/* Page Heading */}
        <div className="flex-1">
          <h2 className="font-bold capitalize text-2xl text-granite md:text-3xl">
            {t("orders")}
          </h2>
        </div>
        {/* Order Legends */}
        <Legends />
      </div>
      {/* Page Content */}
      <div className="h-full pt-4 grid xl:grid-cols-3 gap-4">
        {/* Column 1: Open Orders */}
        <OrdersList
          orders={useSelector(getOpenOrders)}
          title={"openOrders"}
          socket={socket}
        />
        {/* Column 2: In the Kitchen */}
        <OrdersList
          orders={useSelector(getConfirmedOrders)}
          title={"inTheKitchen"}
          socket={socket}
        />
        {/* Column 3: On the Road */}
        <OrdersList
          orders={useSelector(getAdvancingOrders)}
          title={"onTheRoad"}
          socket={socket}
        />
      </div>
    </>
  );
};

export default Dashboard;
 