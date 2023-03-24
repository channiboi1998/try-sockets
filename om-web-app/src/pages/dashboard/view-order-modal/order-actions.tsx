import { useTranslation } from "react-i18next";
import Button from "../../../components/button";
import { ShareIcon } from "../../../components/icon";
import { useAppDispatch } from "../../../store";
import { UpdateOrderStatus } from "../../../store/order/model";
import { setSelectedOrderId } from "../../../store/order/slice";
import { updateOrderStatus } from "../../../store/order/thunks";
import {
  setUpdateOrderModalOpen,
  setViewOrderModalOpen,
} from "../../../store/ui/slice";
import { getClearVariant } from "../../../utilities/buttons";
import { variations } from "../../../utilities/variations";

type Props = {
  variant?: "success" | "warning" | "danger";
  buttonLabel: string;
  storeId: string;
  orderId: string;
  orderStatus: string;
};
const OrderActions = ({
  variant = "success",
  buttonLabel,
  storeId,
  orderId,
  orderStatus,
}: Props) => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();

  const updateButtonClick = () => {
    dispatch(setViewOrderModalOpen(false));
    dispatch(setUpdateOrderModalOpen(true));
  };

  return (
    <div className="shadow-plain w-full bg-white p-4 flex flex-row items-center fixed bottom-0 justify-end h-[80px]">
      <div className="w-full max-w-screen-sm flex flex-row items-center justify-end">
        {/* Send an Update Button */}
        <Button
          className="flex flex-row items-center justify-center mr-2 normal-case max-w-[320px]"
          aria-label="send an update"
          variant={getClearVariant(variant)}
          onClick={() => updateButtonClick()}
        >
          <ShareIcon fill={variations[variant].iconFillHex} />
          <span className="ml-2">{t("sendAnUpdate")}</span>
        </Button>
        {/* Update Order Button */}
        {buttonLabel && (
          <Button
            className="ml-2"
            aria-label="submit"
            variant={variant}
            onClick={() => alert("Run update order via socket")}
          >
            {t(buttonLabel)}
          </Button>
        )}
      </div>
    </div>
  );
};

export default OrderActions;
