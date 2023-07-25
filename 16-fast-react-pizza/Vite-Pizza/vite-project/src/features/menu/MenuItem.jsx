/* eslint-disable react/prop-types */
import Button from '../../UI/Button'
import { formatCurrency } from "../../Utilities/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="py-2 gap-4 flex">
      <img src={imageUrl} alt={name} className={`h-24 ${soldOut? 'opacity-70 grayscale': ''}`} />
      <div className="flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="text-sm italic text-stone-500 capitalize">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? <p className="text-sm">{formatCurrency(unitPrice)}</p> : <p className="text-sm uppercase font-medium text-stone-500">Sold out</p>}
          {!soldOut && <Button type='small'>Add to cart</Button>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
