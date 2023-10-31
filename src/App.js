
import { Outlet, createBrowserRouter } from "react-router-dom";
import Products from "./components/Products";
import Header from "./components/header";
import AboutUs from "./components/AboutUs";
import Error from "./Error";
import Offers from "./components/Offers";
import Menu from "./components/Menu";
import { Provider } from "react-redux";
import Cart from "./components/cart";
import store from "./utils/store";
import Login from "./components/Login";
import Splash from "./components/Splash";
import {useState, useEffect} from "react";
import Footer from "./components/Footer";

function App() {
  const [loading,setLoading]=useState(true)
  useEffect(()=>{
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[])
  return (
   <Provider store={store}>
    {loading ? <Splash/> :
     <div>
     <Header/>
    <Outlet/>
    <div className=" bottom-0 fixed w-full">
    <Footer />
    </div>
   </div>}
   </Provider>
  );
}

const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Error/>,
    children:[
      {
        path:"/",
        element:<Products/>
      },
      {
        path:"/about",
        element:<AboutUs/>
      },
      {
        path:"/offers",
        element:<Offers/>
      },
      {
        path:"/cart",
        element:<Cart/>
      },
      {
        path:"/menu/:resId",
        element:<Menu/>
      },
      {
        path:"/login",
        element:<Login/>
      },
    ]
  },
  
])

export {App,appRouter};
