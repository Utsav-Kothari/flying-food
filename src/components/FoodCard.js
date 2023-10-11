import { IMG_CDN_URL } from '../content'
import './foodcard.css'

const FoodCard=( {cloudinaryImageId
    ,name,avgRating,cuisines,locality /*data*/})=>{
    
    // method 2
    // const {imageId,title,rating,cuisines,address}=abcd
    // Now you can use {title} instead of {data.title} and similarly for others.


    return(
        <div className="foodcard">
        <img src={IMG_CDN_URL + cloudinaryImageId}/>
        <div className="foodcard-title">{name}</div>
        <div className="foodcard-rating">{avgRating} stars</div>
        <div className="foodcard-info">{cuisines.join(", ")}</div>
        <div className="foodcard-info">{locality}</div>
       
        </div>
    )
}

export default FoodCard