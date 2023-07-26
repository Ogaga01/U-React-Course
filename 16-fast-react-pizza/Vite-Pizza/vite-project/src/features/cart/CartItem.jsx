/* eslint-disable react/prop-types */
import DeleteItem from "./DeleteItem";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { formatCurrency } from "../../Utilities/helpers";

function CartItem({ item }) {
  const { id, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity id={id} />
        <DeleteItem id={id} />
      </div>
    </li>
  );
}

export default CartItem;
