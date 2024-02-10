
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";
import { MdDelete } from "react-icons/md";

const CartItem = ({item, itemIndex,cartLength}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div className="flex flex-col mt-5">
    <div className="w-full p-2 md:p-5  mb-3 md:mx-5  ml-6     ">
    <div className="flex flex-col md:flex-row items-center gap-5 mr-7 ">
    <div className=" w-[30%]">
    <img src={item.image} className="object-cover mb-5" />
  </div>
  <div className="ml-10 self-start w-[100%] space-y-5 md:w-[70%]">
    <div>
      <p className="text-xl font-semibold text-black">{item.title}</p>
    </div>
    <div>
      <p className=" text-base font-medium text-blue-900">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
    </div>
    <div className="flex justify-between">
      <p className="text-xl text-green-600 font-bold ">${item.price}</p>
            <div className="bg-red-300 p-3 rounded-full mb-3"
            onClick={removeFromCart}>
              <MdDelete className="text-red-800 "/>
            </div>
          </div>
        </div>
      </div>
      {
    itemIndex !== cartLength - 1 && (
      <hr className="h-[0.08rem] bg-slate-900 border-0 dark:bg-slate-300"></hr>
    )
  }
</div>
    </div>
  );
};

export default CartItem;