import { OrderItem } from "../../../store/order/model";
import { formatPhilippinePeso } from "../../../utilities/currencyFormatters";

type Props = {
  item: OrderItem;
};

const CartItem = ({ item }: Props) => {
  return (
    <div key={item.sku} className="flex flex-row items-baseline w-full mb-1">
      <p className="font-normal text-sm">
        {item.name} {item.sizeInfo} x {item.quantity}
      </p>
      <div className="flex-1 dash-border-separator mx-1 ml-6"></div>
      <p className="font-normal text-sm">
        {formatPhilippinePeso(item.unitPrice * item.quantity)}
      </p>
    </div>
  );
};

export default CartItem;
