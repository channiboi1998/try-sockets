import clsx from "clsx";
import { useTranslation } from "react-i18next";
import { BoxCheckIcon } from "../../../components/icon";

type Props = {
  disposition: string;
  deliveryAddress: string;
  detailedDeliveryAddress: string;
  specialInstructions: string;
  notesToRider: string;
  includeUtensils: boolean;
};

const AdditionalInformation = ({
  disposition,
  deliveryAddress,
  detailedDeliveryAddress,
  specialInstructions,
  notesToRider,
  includeUtensils,
}: Props) => {
  const { t } = useTranslation("translation");
  return (
    <div className="shadow-plain p-4 rounded-xl mb-4">
      <div
        className={clsx(
          "grid grid-flow-col gap-4 mb-4",
          disposition === "deliver" ? "grid-rows-2" : "grid-rows-1" 
        )}
      >
        {/* Delivery Address */}
        {disposition === "deliver" ? (
          <>
            {/* Disposition: Deliver */}
            <div className="max-w-sm">
              <p className="font-bold capitalize">{t("deliveryAddress")}</p>
              <p>{deliveryAddress || "N/A"}</p>
            </div>
            {/* Detailed Delivery Address */}
            <div className="max-w-sm">
              <p className="font-bold capitalize">
                {t("detailedDeliveryAddress")}
              </p>
              <p>{detailedDeliveryAddress || "N/A"}</p>
            </div>
            {/* Special Instructions */}
            <div className="max-w-sm">
              <p className="font-bold capitalize">{t("specialInstructions")}</p>
              <p>{specialInstructions || "N/A"}</p>
            </div>
            {/* Notes to Rider */}
            <div className="max-w-sm">
              <p className="font-bold">{t("notesToRider")}</p>
              <p>{notesToRider || "N/A"}</p>
            </div>
          </>
        ) : (
          <>
            {/* Disposition: Pickup */}
            <div>
              <p className="font-bold capitalize">{t("specialInstructions")}</p>
              <p>{specialInstructions || "N/A"}</p>
            </div>
          </>
        )}
      </div>
      {/* Utensils */}
      <div className="flex flex-row items-center">
        {includeUtensils ? (
          <BoxCheckIcon fill="#299834" />
        ) : (
          <BoxCheckIcon fill="#DADADA" />
        )}
        <p className="ml-2 capitalize">{t("includePlasticUtensils")}</p>
      </div>
    </div>
  );
};

export default AdditionalInformation;
