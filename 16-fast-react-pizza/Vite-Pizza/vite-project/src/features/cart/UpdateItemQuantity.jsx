import { useDispatch } from "react-redux";
import Button from "../../UI/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

/* eslint-disable react/prop-types */
const UpdateItemQuantity = ({id}) => {
    const dispatch = useDispatch()

    const handleIncreaseItem = ()=>{
        dispatch(increaseItemQuantity(id))
    }

    const handleDecreaseItem = ()=>{
        dispatch(decreaseItemQuantity(id))
    }


  return <div className="flex gap-1 items-center md:gap-3">
    <Button type='round' onClick={handleDecreaseItem}>-</Button>
    <Button type='round' onClick={handleIncreaseItem}>+</Button>
  </div>;
};

export default UpdateItemQuantity;
