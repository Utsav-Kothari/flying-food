import { useSelector } from "react-redux";
import CartFoodCard from "./CartFoodCard";
import { useDispatch } from "react-redux";
import { removeItem } from "../utils/cartSlice";
const Cart = () => {
    const cartList = useSelector(store => store.cart.items)
    // console.log(cartList)
    const dispatch=useDispatch();
    const handleRemoveItem=(Element)=>{
        dispatch(removeItem(Element))
    }
    let amount=0;
    const cost=()=>{
        
            cartList.map((Element)=>(
                amount=amount+Element?.card?.info?.price
                
            ))
            return(
                <div>
                   {amount/100}
                </div>
        )
    }
    const userDetails=useSelector(store=>store.login.detail)
    return ( 
        <div>
           <div className="flex justify-between">
           <h1 className="text-xl font-bold ml-3 mt-2">Cart has {cartList.length} items</h1>
            <div className="font-bold text-lg text-orange-500 mt-2">Location:
                <input type="text" defaultValue={userDetails.add} className="bg-white text-md underline rounded active:bg-gray-300 pl-1 ml-1 "
                name="name"  />  
                </div>
           </div>
            <div className="text-xl font-bold ml-3 mt-1 flex ">Total Amount*: Rs.{
               cost()
            }</div>
            
            <div className="text-sm font-norma ml-3">*Your order is eligible for Free Delivery</div>
            <button className='inline-flex justify-center w-fit ml-3 mt-3 px-2 py-2 text-lg text-white font-bold bg-lime-700 border-gray-300 rounded-md shadow-sm  hover:bg-yellow-500 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
                >Order Now</button>
            <div className="flex flex-wrap mt-3">
                {cartList.map((Element) => (
                <div className="flex flex-col">
                <CartFoodCard key={Element?.card?.info?.id} {...Element?.card?.info} />
                <button className='p-1 m-1 rounded-lg bg-cyan-200 font-semibold hover:bg-blue-400' onClick={()=>handleRemoveItem(Element)}>Remove from Cart</button>

                </div>
            ))}
            </div>
        </div>
    )

}
export default Cart;