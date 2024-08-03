import { useDispatch } from "react-redux";
import { IMG_URL } from "../util/constants";
import { addItem } from "../util/slices/cartSlice";
const ItemsList = ({ data }) => {
  console.log(data);
  const dispatch = useDispatch();
  const handleOnClick = () => {
    dispatch(addItem(data));
  };
  return (
    <div className="text-left m-4 p-2 border-b-2 border-gray-400 flex">
      <div className="w-9/12">
        <h3>
          {data.name} - ₹{data.price / 100 || data.defaultPrice / 100}
        </h3>
        <p className="text-sm">{data.description}</p>
      </div>
      <div className="w-3/12 ">
        <div className="absolute">
          <button
            className="absolute m-auto shadow-lg bg-white p-4 rounded-lg"
            onClick={handleOnClick}
          >
            Add+
          </button>
        </div>
        <img className="w-full h-auto" src={IMG_URL + data.imageId} />
      </div>
    </div>
  );
};

export default ItemsList;
