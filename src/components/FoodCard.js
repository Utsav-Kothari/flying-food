import { IMG_CDN_URL } from '../content'


const FoodCard=( {cloudinaryImageId
    ,name,avgRating,cuisines,locality /*data*/})=>{
    
    // method 2
    // const {imageId,title,rating,cuisines,address}=abcd
    // Now you can use {title} instead of {data.title} and similarly for others.


    return(
        <div className="flex flex-col h-inherit w-52 m-4">
        <img src={IMG_CDN_URL + cloudinaryImageId} className='h-52 rounded-md'/>
        <div className="font-bold text-xl m-0.5 pt-0.5">{name}</div>
        <div className="font-bold text-lg ml-0.5">{avgRating} stars</div>
        <div className="text-base text-gray-500 m-0.5 font-semibold ">{cuisines.join(", ")}</div>
        <div className="text-base text-gray-500 m-0.5 font-semibold ">{locality}</div>
       
        </div>
    )
}

export default FoodCard