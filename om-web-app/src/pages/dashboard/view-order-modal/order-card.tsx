import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { DesktopIcon } from "../../../components/icon";
import { formatPhilippinePeso } from "../../../utilities/currencyFormatters";
import {
  formatTimestampToLong,
  formatTimestampToMedium,
  formatTimestampToShort,
} from "../../../utilities/dateTimeFormatters";
import { getStatusLabel } from "../../../utilities/orders";
import { variations } from "../../../utilities/variations";

type Props = {
  variant?: "success" | "warning" | "danger";
  elapsedTime?: string;
  orderId: string;
  createdAt: string;
  disposition: string;
  dispositionType: string;
  paymentMethod: string;
  total: number;
  dispositionSchedule: string;
  orderStatus: string;
};

const OrderCard = ({
  variant = "success",
  elapsedTime,
  orderId,
  createdAt,
  disposition,
  dispositionType,
  paymentMethod,
  total,
  dispositionSchedule,
  orderStatus,
}: Props) => {
  const { t } = useTranslation("translation");
  return (
    <div className="shadow-plain rounded-lg bg-white mb-4">
      <div
        className={`relative flex flex-row flex-wrap rounded-lg overflow-hidden`}
      >
        <div className="p-4 w-full">
          {/* Countdown Timer and Date of Transaction */}
          <div className="flex flex-row items-baseline w-full">
            <div className="flex-1 flex flex-row items-center mb-1">
              <DesktopIcon fill={variant && variations[variant].iconFillHex} />
              <p
                className={clsx(
                  "font-bold ml-2 text-xl",
                  variant && variations[variant].textColor
                )}
              >
                {elapsedTime}
              </p>
            </div>
            <div>
              <p className="text-xs text-dark capitalize">
                {t("dateOfTransaction")}
              </p>
            </div>
          </div>
          {/* Order ID and Order Created At */}
          <div className="flex flex-row w-full">
            <div className="flex-1">
              <p className="text-xs text-dark font-semibold">
                {t("orderIdNo.")} {orderId}
              </p>
            </div>
            <div className="flex flex-row ">
              <p className="text-xs text-dark font-bold">
                {formatTimestampToLong(createdAt)}
              </p>
            </div>
          </div>
          {/* Border Separator */}
          <div className="w-full border-separator my-2"></div>
          {/* Dispositions, Total & Payment Menthod */}
          <div className="flex flex-row items-center w-full mb-1">
            <div className="flex-1">
              <p className="text-xs text-dark capitalize">
                {`${t(disposition)} ${t(dispositionType)}`}
              </p>
            </div>
            <div className="flex flex-row items-center">
              <p className="text-xs text-dark px-1 mr-1 font-semibold">
                {formatPhilippinePeso(total)}
              </p>
              <p className="text-xs font-bold rounded-md px-1 py-0.5 capitalize text-success bg-ice">
                {paymentMethod}
              </p>
            </div>
          </div>
          {/* Disposition Schedule & Change For ... */}
          <div className="flex flex-row items-center w-full">
            <p className="flex-1 text-xs text-dark font-bold">
              {dispositionType === "later"
                ? formatTimestampToMedium(dispositionSchedule)
                : formatTimestampToShort(dispositionSchedule)}
            </p>
            <p className="text-xs text-dark">
              Change for {formatPhilippinePeso(1000)}
            </p>
          </div>
        </div>
        {/* Status and Order Status */}
        <div
          className={clsx(
            "flex flex-row items-center w-full px-4 py-2",
            variant && variations[variant].backgroundColor
          )}
        >
          <p className="flex-1 text-white text-lg font-semibold capitalize">
            {t("status")}
          </p>
          <p className="text-white text-lg font-semibold">
            {getStatusLabel(t(orderStatus))}
          </p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
