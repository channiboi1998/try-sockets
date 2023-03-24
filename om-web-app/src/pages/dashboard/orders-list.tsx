import { useTranslation } from "react-i18next";
import { Socket } from "socket.io-client/build/esm/socket";
import { Order } from "../../store/order/model";
import OrderEntries from "./order-entries";

type Props = {
  title: string;
  orders?: Order[];
  socket?: Socket | null;
};

const OrdersList = ({ title, orders, socket }: Props) => {
  const { t } = useTranslation("translation");

  return (
    <>
      <div className="flex flex-col">
        <h3 className="font-semibold mb-2 text-xl">{t(title)}</h3>
        <div className="scroll mt-2 bg-white rounded-xl px-4 h-full overflow-auto overflow-x-hidden">
          <div className="h-0">
            <OrderEntries orders={orders} title={t(title)} socket={socket} />
          </div>
        </div>
      </div>
    </>
  );
};

export default OrdersList;
