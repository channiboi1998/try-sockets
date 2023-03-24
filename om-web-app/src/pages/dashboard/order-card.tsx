import { useTranslation } from "react-i18next";
import Button from "../../components/button";
import { AngleRightIcon, DesktopIcon } from "../../components/icon";
import { useAppDispatch } from "../../store";
import { Order } from "../../store/order/model";
import { setSelectedOrderId } from "../../store/order/slice";
import { formatPhilippinePeso } from "../../utilities/currencyFormatters";
import { formatTimestampToLong } from "../../utilities/dateTimeFormatters";
import OrderButton from "./order-button";
import { variations } from "../../utilities/variations";
import { useSelector } from "react-redux";
import { getSelectedStoreId } from "../../store/store-slice/selectors";
import { Socket } from "socket.io-client/build/esm/socket";

type Props = {
  order: Order;
  socket?: Socket | null;
};

const OrderCard = ({ order, socket }: Props) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation("translation");
  const storeId = useSelector(getSelectedStoreId);

  return (
    <>
      <div className="py-2 first:pt-4 last:pb-4">
        <div
          className={`${
            order.variant && variations[order.variant].boxShadow
          } relative flex flex-row flex-wrap rounded-lg p-4`}
        >
          {/* Floating Order Queue */}
          <span
            className={`${
              order.variant && variations[order.variant].backgroundColor
            } absolute flex flex-row items-center justify-center text-white text-xs top-[-10px] right-[-10px] rounded-full h-6 w-6`}
          >
            1
          </span>
          {/* Countdown timer & Order Created At Date */}
          <div className="flex flex-row w-full">
            <div className="flex-1 flex flex-row items-center">
              <DesktopIcon
                fill={order.variant && variations[order.variant].iconFillHex}
              />
              <p
                className={`${
                  order.variant && variations[order.variant].textColor
                } font-bold ml-2 text-xl`}
              >
                {order.elapsedTime}
              </p>
            </div>
            <div>
              <p className="text-sm text-dark">
                {formatTimestampToLong(order.createdAt)}
              </p>
            </div>
          </div>
          {/* Order ID No., Order Total & Payment Method */}
          <div className="flex flex-row items-center w-full">
            <div className="flex-1">
              <p className="text-xs text-dark font-semibold">
                {t("orderIdNo.")} {order.id}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-xs text-dark px-1 mr-1 font-semibold">
                {formatPhilippinePeso(order.total)}
              </p>
              <p className="text-xs font-bold rounded-md px-1 py-0.5 capitalize text-success bg-ice">
                {order.paymentMethod}
              </p>
            </div>
          </div>
          {/* Border Separator */}
          <div className="w-full dash-border-separator my-2"></div>
          {/* Customer Name & View Order Button */}
          <div className="w-full flex flex-row items-center">
            <p className="text-xs flex-1 text-dark">
              {order.firstName} {order.lastName}
            </p>
            <Button
              className="flex flex-row items-center"
              aria-label="view order"
              onClick={() => dispatch(setSelectedOrderId(order.id))}
            >
              <p className="font-semibold capitalize mr-1 text-success">
                {t("viewOrder")}
              </p>
              <AngleRightIcon fontSize={9} />
            </Button>
          </div>
          {/* Update Order Button */}
          <OrderButton
            variant={order.variant && order.variant}
            storeId={storeId}
            orderId={order.id}
            orderStatus={order.status}
            socket={socket}
          />
        </div>
      </div>
    </>
  );
};

export default OrderCard;
