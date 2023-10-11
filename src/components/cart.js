import { useSelector } from "react-redux";
import CartFoodCard from "./CartFoodCard";
const Cart = () => {
    const cartList = useSelector(store => store.cart.items)
    // console.log(cartList)
    return (
        <div>
            <h1>Cart has items</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }  }>
                {cartList.map((Element) => (
                <CartFoodCard key={Element?.card?.info?.id} {...Element?.card?.info} />
            ))}
            </div>
        </div>
    )

}
export default Cart;