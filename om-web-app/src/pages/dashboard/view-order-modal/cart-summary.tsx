import { useTranslation } from "react-i18next";
import { CircleCheckIcon } from "../../../components/icon";
import { OrderItem } from "../../../store/order/model";
import { formatPhilippinePeso } from "../../../utilities/currencyFormatters";
import CartItem from "./cart-item";

type Props = {
  items: OrderItem[];
  subtotal: number;
  discount: number;
  total: number;
};

const CartSummary = ({ items, subtotal, discount, total }: Props) => {
  const { t } = useTranslation("translation");
  return (
    <div className="shadow-plain p-4 rounded-xl mb-4">
      {items && (
        <>
          {/* Cart Items */}
          {items.map((item: OrderItem) => (
            <CartItem key={item.sku} item={item} />
          ))}
          {/* Tags List (Discounts etc) */}
          <div className="flex flex-row items-center py-4">
            {/* Discount Tag */}
            <div className="flex flex-row items-center bg-babyGreen px-3 py-2 rounded-xl">
              <CircleCheckIcon height={16} width={16} />
              <p className="text-sm ml-1">50 OFF Influencer Applied</p>
            </div>
          </div>
          {/* Cart Subtotal */}
          <div className="flex flex-row items-baseline w-full mb-1">
            <p className="font-normal text-sm capitalize">{t("subtotal")}</p>
            <div className="flex-1 dash-border-separator mx-1"></div>
            <p className="font-normal text-sm">
              {formatPhilippinePeso(subtotal)}
            </p>
          </div>
          {/* Cart Discounts */}
          {discount && discount !== 0 ? (
            <div className="flex flex-row items-baseline w-full mb-1">
              <p className="font-normal text-sm capitalize">{t("discountApplied")}</p>
              <div className="flex-1 dash-border-separator mx-1" />
              <p className="font-normal text-sm capitalize text-success">
                -{formatPhilippinePeso(discount)}
              </p>
            </div>
          ) : null}
          {/* Cart Total */}
          <div className="flex flex-row items-baseline w-full">
            <p className="font-bold text-sm flex-1 capitalize">{t("total")}</p>
            <p className="font-bold text-sm">{formatPhilippinePeso(total)}</p>
          </div>
        </>
      )}
    </div>
  );
};

export default CartSummary;
