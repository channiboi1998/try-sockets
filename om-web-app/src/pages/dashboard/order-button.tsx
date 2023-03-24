import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Socket } from "socket.io-client/build/esm/socket";
import Button from "../../components/button";
import { useAppDispatch } from "../../store";
import { UpdateOrderStatus } from "../../store/order/model";
import { getUpdatingOrderStatus } from "../../store/order/selectors";
import { updateOrderStatus } from "../../store/order/slice";
import { getToast } from "../../store/ui/selectors";
import { setToast } from "../../store/ui/slice";
import { getButtonLabel, getNextStatus } from "../../utilities/orders";

type Props = {
  variant?: "success" | "warning" | "danger";
  storeId: string;
  orderId: string;
  orderStatus: string;
  socket?: Socket | null;
};

const OrderButton = ({
  variant = "success",
  storeId,
  orderId,
  orderStatus,
  socket,
}: Props) => {
  const { t } = useTranslation("translation");
  const toast = useSelector(getToast);
  const updatingOrderStatus = useSelector(getUpdatingOrderStatus);
const dispatch = useAppDispatch();
  return (
    <>
      {getButtonLabel(orderStatus) && (
        <>
          <Button
            variant={variant && variant}
            aria-label={getButtonLabel(orderStatus)}
            className="mt-2 md:text-sm md:h-[38px] 2xl:text-base"
            onClick={() =>
              socket?.emit(
                "updateOrderStatus",
                { storeId, orderId, orderStatus: getNextStatus(orderStatus) },
                (response: any) => {
                  console.log("response from server is:", response);
                  dispatch(updateOrderStatus(response))
                }
              )
            }
          >
            {updatingOrderStatus && updatingOrderStatus.orderId === orderId
              ? "loading...."
              : t(getButtonLabel(orderStatus))}
          </Button>
        </>
      )}
    </>
  );
};

export default OrderButton;
