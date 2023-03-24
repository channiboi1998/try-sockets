import { useState } from "react";
import RadioField from "../../../components/forms/radio-field";
import RadioOption from "../../../components/forms/radio-option";
import CancelForm from "./cancel-form";

const UpdateOrderForm = () => {
  const [plan, setPlan] = useState("cancel_order");
  return (
    <>
      <h6 className="font-bold text-base">What would you like to do?</h6>
      <div className="py-3">
        <RadioField value={plan} onChange={setPlan}>
          <RadioOption
            className="pt-3"
            value="cancel_order"
            content="Cancel Order"
            contentClassName="pb-3 border-b"
            activeContent={<CancelForm />}
          />
          <RadioOption
            className="pt-3"
            value="move_on_the_road"
            content="Move to on the road"
            contentClassName="pb-3 border-b"
          />
          <RadioOption
            className="pt-3"
            value="mark_delivered"
            content="Mark as delivered"
            contentClassName="pb-3 border-b"
          />
        </RadioField>
      </div>
    </>
  );
};

export default UpdateOrderForm;
