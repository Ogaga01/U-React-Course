import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";

const Menu = () => {
  const menu = useLoaderData()
  return <ul>{menu.map((pizza)=>{
    return <MenuItem pizza={pizza} key={pizza.id} />
  })}</ul>;
};

export const loader = async ()=>{
  const menu = await getMenu()
  return menu
}

export default Menu;
