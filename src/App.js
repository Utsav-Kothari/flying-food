
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


function App() {
  return (
   <Provider store={store}>
     <div>
      <Header/>
     <Outlet/>
    </div>
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
    ]
  },
  
])

export {App,appRouter};
