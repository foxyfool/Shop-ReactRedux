import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";

const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="max-w-6xl mx-auto">
      {
        cart.length > 0 ?
        (
          <div className="flex gap-6">
      <div className="md:w-7/12">
        {
          cart.map((item, index) => (
            <div><CartItem key={item.id} item={item} itemIndex={index} cartLength={cart.length} /> </div>
          ))
        }
      </div>
      <div className="w-full md:w-[40%] flex flex-col p-5 gap-5 justify-between my-20 ml-5 ">
        <div className="">
          <p className="text-5xl font-semibold text-green-700">YOUR CART</p>
          <p className="text-7xl font-semibold text-green-700">SUMMARY</p>
          <p className="text-xl font-semibold text-slate-700 mt-5">Total items: {cart.length}</p>
        </div>
        <div>
          <p className="text-xl  font-semibold text-slate-700">Total Amount: <span className="text-slate-900  font-bold">${totalAmount}</span></p>
         <Link to="#">
         <button className="bg-green-700 w-full rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
            Checkout Now
          </button>
         </Link>
        </div>
      </div>
    </div>
        ) :
        (
          <div className="flex flex-col min-h-[80vh]  justify-center items-center ">
            <p className="text-2xl  font-bold">Your cart is empty!</p>
            <Link to="/">
              <button className="mt-7 font-semibold px-10 py-3 text-xl text-white bg-green-600 rounded-lg border ">
                SHOP NOW
              </button>
            </Link>
          </div>
        )
      }
    </div>
    );
  };

export default Cart;