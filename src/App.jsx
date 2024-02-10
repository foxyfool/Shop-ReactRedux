import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom"
import {Route} from "react-router-dom"
import Cart from "./pages/Cart"
import Home from "./pages/Home"
import { useEffect } from "react";
import { useSelector } from "react-redux";

const App = () => {


  const {theme} = useSelector((state) => state)

   useEffect(() => {
      
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])
  
  return (
    <div>
      <div className="bg-slate-900">
      <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>)
};
export default App;
