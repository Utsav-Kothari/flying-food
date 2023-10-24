import { IMG_CDN_URL } from '../content'


const CartFoodCard=({imageId,name,price,description,itemAttribute})=>{
    console.log({name});
    return(
        <div className="flex flex-col h-inherit w-52 m-4">
        <img src={IMG_CDN_URL + imageId} className='h-52 rounded-md'/>
        <div className="font-bold text-xl m-0.5 pt-0.5">{name}</div>
        <div className="font-bold text-lg ml-0.5">Rs.{price/100}</div>
        <div className='text-md font-medium text-yellow-600'>{itemAttribute?.vegClassifier}</div>
        {/* <div className="text-base text-gray-400 m-0.5 font-semibold ">{description}</div> */}
        </div>
    )
}
export default CartFoodCard