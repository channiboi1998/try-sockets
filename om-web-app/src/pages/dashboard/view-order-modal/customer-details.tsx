import { useTranslation } from "react-i18next";
import { formatPhoneNumber } from "../../../utilities/orders";
import MessageCustomer from "./message-customer";

type Props = {
  firstName: string;
  lastName: string;
  mobile: string;
};
const CustomerDetails = ({ firstName, lastName, mobile }: Props) => {
  const { t } = useTranslation("translation");
  return (
    <div className="shadow-plain p-6 rounded-xl mb-4">
      {/* Customer Name & Contact Number */}
      <div className="flex flex-row mb-1">
        <p className="flex-1 text-xs text-ash font-bold capitalize">{t("customerName")}</p>
        <p className="text-xs text-ash font-bold capitalize">{t("contactNumber")}</p>
      </div>
      <div className="flex flex-row mb-4">
        <p className="flex-1 text-dark font-bold text-sm">
          {firstName} {lastName}
        </p>
        <p className="text-dark font-bold text-sm">
          {formatPhoneNumber(mobile)}
        </p>
      </div>
      {/* Message Customer Button */}
      <MessageCustomer />
    </div>
  );
};

export default CustomerDetails;
