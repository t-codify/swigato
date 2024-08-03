import { useDispatch, useSelector } from "react-redux";
import ItemsList from "./ItemsList";
import { clearCart } from "../util/slices/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClear = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>Cart</h1>
      <button className="bg-black text-white rounded-lg" onClick={handleClear}>
        Clear Cart
      </button>
      {items.map((item) => {
        <ItemsList data={item} />;
      })}
    </div>
  );
};
export default Cart;
