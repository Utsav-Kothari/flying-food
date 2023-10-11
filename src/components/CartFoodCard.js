import { IMG_CDN_URL } from '../content'
import './foodcard.css'

const CartFoodCard=({imageId,name,price,description})=>{
    console.log({name});
    return(
        <div className="foodcard">
        <img src={IMG_CDN_URL + imageId}/>
        <div className="foodcard-title">{name}</div>
        <div className="foodcard-rating">Rs.{price/100}</div>
        <div className="foodcard-info">{description}</div>
        </div>
    )
}
export default CartFoodCard