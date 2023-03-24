import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectOrders } from "../../store/order/selectors";
import { getDeliveryTimelineThresholds } from "../../store/store-slice/selectors";

const Legends = () => {
  const { t } = useTranslation("translation");

  const orders = useSelector(selectOrders);
  const deliveryTimelineThresholds = useSelector(getDeliveryTimelineThresholds);

  /**
   * Define initial state for orderLegendsCount.
   */
  const [orderLegendsCount, setOrderLegendsCount] = useState({
    onTime: 0,
    atRisk: 0,
    late: 0,
  });

  /**
   * Use useEffect hook to update orderLegendsCount every second.
   */
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    // Check if orders exist
    if (orders) {
      // Set up interval to update orderLegendsCount
      interval = setInterval(() => {
        const now = new Date();

        // Initialize computedValues object to store the count of each order status
        const computedValues = {
          onTime: 0,
          atRisk: 0,
          late: 0,
        };

        // Loop through each order and check its delivery status
        orders.forEach((order) => {
          const date = new Date(order.createdAt);
          const secondsDiff: number = (now.getTime() - date.getTime()) / 1000;

          // Check if the order is on time
          if (
            secondsDiff >= deliveryTimelineThresholds.onTime &&
            secondsDiff < deliveryTimelineThresholds.atRisk
          ) {
            computedValues.onTime++;
          }
          // Check if the order is at risk of being late
          else if (
            secondsDiff >= deliveryTimelineThresholds.atRisk &&
            secondsDiff < deliveryTimelineThresholds.late
          ) {
            computedValues.atRisk++;
          }
          // Check if the order is late
          else {
            computedValues.late++;
          }
        });

        // Update orderLegendsCount with the computedValues
        setOrderLegendsCount(computedValues);
      }, 1000);
    }

    // Clean up the interval when the component unmounts
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [orders]);

  return (
    <>
      <div className="flex flex-row items-center">
        <p className="hidden uppercase text-base font-bold px-2 text-granite md:block">
          {t("legend")}
        </p>
        <div className="flex flex-row">
          {/* On Time Orders Count */}
          <div className="flex flex-row text-xs text-white font-semibold rounded-full px-2 py-1 ml-2 bg-success">
            <span className="px-1 border-r border-[#06BC2C]">
              {orderLegendsCount.onTime}
            </span>
            <span className="px-1 uppercase">{t("onTime")}</span>
          </div>
          {/* At Risk Orders Count */}
          <div className="flex flex-row text-xs text-white font-semibold rounded-full px-2 py-1 ml-2 bg-warning">
            <span className="px-1 border-r border-[#FF814B]">
              {orderLegendsCount.atRisk}
            </span>
            <span className="px-1 uppercase">{t("atRisk")}</span>
          </div>
          {/* Late Orders Count */}
          <div className="flex flex-row text-xs text-white font-semibold rounded-full px-2 py-1 ml-2 bg-danger">
            <span className="px-1 border-r border-[#EE3640]">
              {orderLegendsCount.late}
            </span>
            <span className="px-1 uppercase">{t("late")}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legends;
