import { Link } from "react-router-dom";
import Button from "../../UI/Button";
import LinkButton from "../../UI/LinkButton";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "./cartSlice";
import EmptyCart from "./EmptyCart";

const fakeCart = [
  {
    pizzaId: 12,
    name: "Mediterranean",
    quantity: 2,
    unitPrice: 16,
    totalPrice: 32,
  },
  {
    pizzaId: 6,
    name: "Vegetale",
    quantity: 1,
    unitPrice: 13,
    totalPrice: 13,
  },
  {
    pizzaId: 11,
    name: "Spinach and Mushroom",
    quantity: 1,
    unitPrice: 15,
    totalPrice: 15,
  },
];

const Cart = () => {
  const cart = useSelector((state)=>{return state.cart.cart});
  const username = useSelector((state) => {
    return state.user.username;
  });

  const dispatch = useDispatch()

  const handeleClearCart= ()=>{
    dispatch(clearCart())
  }

  if(!cart.length) return <EmptyCart/>

  return (
    <div className="px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>
      <ul className="divide-y divide-stone-200 border-b mt-3" >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </ul>
      <div className="mt-6 space-x-2">
        <Button type="primary" to="/order/new">
          Order pizzas
        </Button>
        <Button type='secondary' onClick={handeleClearCart}>Clear cart</Button>
      </div>
    </div>
  );
};

export default Cart;
