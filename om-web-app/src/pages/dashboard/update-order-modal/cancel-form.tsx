/**
 * constants and types here are currently inline. Since we don't know yet what is the expected return from the backend or the structure of data. This file will be refactored in the future.
 */

import { useState } from "react";
import SelectField from "../../../components/forms/select-field";
import TextAreaField from "../../../components/forms/textarea-field";

const CancelForm = () => {
  const [reason, setReason] = useState("");

  const cancelReasons = [
    { id: 1, label: "No longer needed", value: "no_longer_needed" },
    { id: 2, label: "Delivery address incorrect", value: "incorrect_address" },
    { id: 3, label: "Unable to contact recipient", value: "unable_to_contact" },
    { id: 4, label: "Recipient refused delivery", value: "recipient_refused" },
    { id: 5, label: "Item damaged in transit", value: "damaged_in_transit" },
    { id: 6, label: "Wrong item delivered", value: "wrong_item_delivered" },
    { id: 7, label: "Delivery delayed too long", value: "delayed_delivery" },
    { id: 8, label: "Delivery arrived too early", value: "early_delivery" },
    { id: 9, label: "Delivery not as described", value: "not_as_described" },
    { id: 10, label: "Duplicate order", value: "duplicate_order" },
    { id: 11, label: "Order placed in error", value: "order_error" },
    { id: 12, label: "Payment issue", value: "payment_issue" },
    { id: 13, label: "Personal emergency", value: "personal_emergency" },
    { id: 14, label: "Unexpected travel", value: "unexpected_travel" },
    { id: 15, label: "Change in plans", value: "change_in_plans" },
    { id: 16, label: "Security concern", value: "security_concern" },
    { id: 17, label: "Weather-related issue", value: "weather_issue" },
    { id: 18, label: "Transportation issue", value: "transportation_issue" },
    { id: 19, label: "Service quality issue", value: "service_quality_issue" },
    { id: 20, label: "Other reason", value: "other_reason" },
  ];

  return (
    <div className="py-3">
      <SelectField
        className="mb-2"
        items={cancelReasons}
        value={reason}
        placeholder="Choose cancel reason"
        label="Cancel Reason"
        requiredIndicator={true}
        onChange={(e: string) => setReason(e)}
      />
      <TextAreaField
        required={true}
        className="min-h-[100px] text-sm"
        label="Enter Additional Reason"
        placeholder="Enter Additional Comments"
        requiredIndicator={true}
      />
    </div>
  );
};

export default CancelForm;
