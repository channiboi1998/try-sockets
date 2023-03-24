import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import Modal from "../../../components/modal";
import { useAppDispatch } from "../../../store";
import {
  getOrderBySelectedOrderId,
  getSelectedOrderId,
} from "../../../store/order/selectors";
import { setSelectedOrderId } from "../../../store/order/slice";
import {
  getDeliveryTimelineThresholds,
  getSelectedStoreId,
} from "../../../store/store-slice/selectors";
import { getViewOrderModalOpen } from "../../../store/ui/selectors";
import { setViewOrderModalOpen } from "../../../store/ui/slice";
import {
  getElapsedTime,
  getOrderVariantTimestamp,
} from "../../../utilities/dateTimeFormatters";
import { getButtonLabel } from "../../../utilities/orders";
import AdditionalInformation from "./additional-information";
import CartSummary from "./cart-summary";
import CustomerDetails from "./customer-details";
import OrderActions from "./order-actions";
import OrderCard from "./order-card";

const ViewOrderItemModal = () => {
  const { t } = useTranslation("translation");
  const dispatch = useAppDispatch();
  const storeId = useSelector(getSelectedStoreId);
  const selectedOrderId = useSelector(getSelectedOrderId);
  const selectedOrder = useSelector(getOrderBySelectedOrderId);
  const viewOrderItemModalOpen = useSelector(getViewOrderModalOpen);
  const deliveryTimelineThresholds = useSelector(getDeliveryTimelineThresholds);

  type UpdatedOrderVariantElapsedTime = {
    variant: "success" | "warning" | "danger";
    elapsedTime: string;
  } | null;

  const [updatedOrderVariantElapsedTime, setUpdatedOrderVariantElapsedTime] =
    useState<UpdatedOrderVariantElapsedTime>(null);

  /**
   * Defines a function to fetch the order variant & elapsed time based on the order's createdAt property.
   */
  const fetchOrderVariantElapsedTime = (createdAt: string) => {
    const variant = getOrderVariantTimestamp(
      createdAt,
      deliveryTimelineThresholds
    );
    const elapsedTime = getElapsedTime(createdAt);
    setUpdatedOrderVariantElapsedTime({ variant, elapsedTime });
  };

  /**
   * The useEffect hook to update the view order modal state and fetch the order variant & elapsed time.
   */
  useEffect(() => {
    if (selectedOrderId && selectedOrder) {
      dispatch(setViewOrderModalOpen(true));
      fetchOrderVariantElapsedTime(selectedOrder.createdAt);
    } else {
      dispatch(setViewOrderModalOpen(false));
    }
  }, [selectedOrderId, selectedOrder]);

  /**
   * Uses the useEffect hook to fetch the order variant & elapsed time at 1 second intervals.
   */
  useEffect(() => {
    if (!selectedOrder || !viewOrderItemModalOpen) return;

    const interval = setInterval(() => {
      fetchOrderVariantElapsedTime(selectedOrder.createdAt);
    }, 1000);

    return () => clearInterval(interval);
  }, [selectedOrder, viewOrderItemModalOpen]);

  return (
    <Modal
      className="relative w-full overflow-hidden h-screen max-h-[90vh] max-w-[95%] rounded-lg bg-white"
      isOpen={viewOrderItemModalOpen}
      title={`${t("orderIdNo.")} ${selectedOrder?.id || ""}`}
      closeModal={() => dispatch(setSelectedOrderId(null))}
    >
      {selectedOrder && updatedOrderVariantElapsedTime && (
        <>
          <div className="scroll max-h-scrollable overflow-auto overflow-x-hidden pb-[120px]">
            <div className="p-6 md:flex md:flex-row">
              {/* First Column */}
              <div className="w-full md:max-w-[330px] md:pr-2">
                {/* View Order Card */}
                <OrderCard
                  variant={updatedOrderVariantElapsedTime.variant}
                  elapsedTime={updatedOrderVariantElapsedTime.elapsedTime}
                  orderId={selectedOrder.id}
                  createdAt={selectedOrder.createdAt}
                  disposition={selectedOrder.disposition}
                  dispositionType={selectedOrder.dispositionType}
                  paymentMethod={selectedOrder.paymentMethod}
                  total={selectedOrder.total}
                  dispositionSchedule={selectedOrder.dispositionSchedule}
                  orderStatus={selectedOrder.status}
                />
                <CustomerDetails
                  firstName={selectedOrder.firstName}
                  lastName={selectedOrder.lastName}
                  mobile={selectedOrder.mobile}
                />
              </div>
              {/* Second Column */}
              <div className="flex-1 md:pl-2">
                {/* Cart Summary */}
                <CartSummary
                  items={selectedOrder.items}
                  subtotal={selectedOrder.subtotal}
                  discount={selectedOrder.discount}
                  total={selectedOrder.total}
                />
                {/* Additional Information */}
                <AdditionalInformation
                  disposition={selectedOrder.disposition}
                  deliveryAddress={selectedOrder.deliveryAddress}
                  detailedDeliveryAddress={
                    selectedOrder.detailedDeliveryAddress
                  }
                  specialInstructions={selectedOrder.specialInstructions}
                  notesToRider={selectedOrder.notesToRider}
                  includeUtensils={selectedOrder.includeUtensils}
                />
              </div>
            </div>
            {/* Modal Actions */}
            <OrderActions
              buttonLabel={getButtonLabel(selectedOrder.status)}
              storeId={storeId}
              orderId={selectedOrder.id}
              orderStatus={selectedOrder.status}
            />
          </div>
        </>
      )}
    </Modal>
  );
};

export default ViewOrderItemModal;
