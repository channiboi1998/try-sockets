import { useEffect } from "react";
import { useSelector } from "react-redux";
import Button from "../../../components/button";
import Modal from "../../../components/modal";
import { useAppDispatch } from "../../../store";
import { getSelectedOrderId } from "../../../store/order/selectors";
import { getUpdateOrderModalOpen } from "../../../store/ui/selectors";
import {
  setUpdateOrderModalOpen,
  setViewOrderModalOpen,
} from "../../../store/ui/slice";
import UpdateOrderForm from "./update-order-form";

const UpdateOrderModal = () => {
  const dispatch = useAppDispatch();
  const selectedOrderId = useSelector(getSelectedOrderId);
  const UpdateOrderModalOpen = useSelector(getUpdateOrderModalOpen);

  /**
   * This useEffect hook checks if there is a selected order ID, and if not, sets the update order modal to closed.
   */
  useEffect(() => {
    if (!selectedOrderId) {
      dispatch(setUpdateOrderModalOpen(false));
    }
  }, [selectedOrderId]);

  /**
   * This function sets the update order modal to closed and the view order modal to open.
   */
  const closeUpdateOrderModal = () => {
    dispatch(setUpdateOrderModalOpen(false));
    dispatch(setViewOrderModalOpen(true));
  };

  return (
    <Modal
      className="relative w-full overflow-hidden h-screen max-w-xl bg-white 2xl:max-w-2xl"
      isOpen={UpdateOrderModalOpen}
      position="end"
      title={`Select an Update for Order ID: ${selectedOrderId}`}
      closeModal={() => closeUpdateOrderModal()}
    >
      <div className="scroll max-h-scrollable overflow-auto overflow-x-hidden pb-[120px]">
        {/* Update Order Form */}
        <div className="p-6">
          <UpdateOrderForm />
        </div>
        {/* Update Order Actions */}
        <div className="shadow-plain w-full bg-white p-4 flex flex-row items-center fixed bottom-0 justify-end h-[80px]">
          <div className="w-full max-w-screen-sm flex flex-row items-center justify-end">
            <Button
              className="flex flex-row items-center justify-center mr-2 normal-case max-w-[320px]"
              aria-label="send an update"
              variant="clearSuccess"
              onClick={() => closeUpdateOrderModal()}
            >
              <span className="ml-2">Close</span>
            </Button>
            <Button
              className="ml-2"
              aria-label="submit"
              variant="success"
              onClick={() => closeUpdateOrderModal()}
            >
              Send Update
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default UpdateOrderModal;
