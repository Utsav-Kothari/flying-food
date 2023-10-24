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
    return ( 
        <div>
            <h1 className="text-xl font-bold ml-3 mt-2">Cart has {cartList.length} items</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }  }>
                {cartList.map((Element) => (
                <div className="flex flex-col">
                <CartFoodCard key={Element?.card?.info?.id} {...Element?.card?.info} />
                <button className='p-1 m-1 rounded-lg bg-cyan-200 font-semibold' onClick={()=>handleRemoveItem(Element)}>Remove from Cart</button>

                </div>
            ))}
            </div>
        </div>
    )

}
export default Cart;