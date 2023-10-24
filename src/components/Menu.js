import { useParams } from "react-router-dom"
import Loader from "./Loader"

import useMenu from "../utils/useMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const Menu = () => {
    const { resId } = useParams()
    const restaurant = useMenu(resId);
    const restro = restaurant[0]?.card?.card?.info
    const menuList = restaurant[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards
    console.log(menuList);

    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return (Object.keys(restaurant).length === 0) ? <Loader />
        :
        (
            <>
                <div className="flex flex-wrap bg-gray-200 justify-between ">
                    <div className="pt-7 pl-2">
                        <h1 className="text-4xl font-bold ">{restro?.name}</h1>
                        <div className="text-lg text-gray-500">{restro?.cuisines.join(", ")}</div>
                        <div className="text-lg text-gray-500">{restro?.avgRating} stars</div>
                        <div className="text-lg text-gray-500">{restro?.areaName}, {restro?.sla?.lastMileTravelString}</div>
                        <hr></hr>
                        <div className="text-xl text-bold"><b>{restro?.sla?.deliveryTime} minutes, {restro?.costForTwoMessage}</b></div>

                    </div>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restro?.cloudinaryImageId} 
                    className="w-64 h-52 rounded-lg my-2.5 mr-10 "/>


                </div>
                <div>
                    <h3 className="text-2xl font-bold mt-1 ml-1" >Menu</h3>
                    <ul className="flex flex-wrap">
                        {menuList.map((item) => <li key={item?.card?.info?.id} className="m-2 p-1 w-40">
                            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" + item?.card?.info?.imageId }
                            className="rounded-lg h-36 w-42 " />
                            <h3 className="text-lg font-bold p-1 " >{item?.card?.info?.name}</h3>
                            <div className="text-md font-semibold"> Rs.{item?.card?.info?.price/100}</div>
                            <div className="text-md font-medium text-yellow-600">{item?.card?.info?.itemAttribute?.vegClassifier}</div>
                            <div>
                                <button onClick={() => handleAddItem(item)} className="p-1 m-0.5 bg-blue-200 rounded-md font-semibold ">Add to Cart</button>
                            </div>
                        </li>)}
                    </ul>

                </div>
            </>
        )
}
export default Menu