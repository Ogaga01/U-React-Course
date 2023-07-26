/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "./../../UI/Button";
import { deleteItem } from "./cartSlice";

const DeleteItem = ({ id }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteItem(id));
  };
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
};

export default DeleteItem;
