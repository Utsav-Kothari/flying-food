import { useParams } from "react-router-dom"
import Loader from "./Loader"
import './menu.css';
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
                <div className="menu-header">
                    <div>
                        <h1>{restro?.name}</h1>
                        <div className="menu-titleinfo">{restro?.cuisines.join(", ")}</div>
                        <div className="menu-titleinfo">{restro?.avgRating} stars</div>
                        <div className="menu-titleinfo">{restro?.areaName}, {restro?.sla?.lastMileTravelString}</div>
                        <hr></hr>
                        <div style={{ fontSize: 23 }}><b>{restro?.sla?.deliveryTime} minutes, {restro?.costForTwoMessage}</b></div>

                    </div>
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + restro?.cloudinaryImageId} />


                </div>
                <div className="menu-content">
                    <h3>Menu</h3>
                    <ul>
                        {menuList.map((item) => <li key={item?.card?.info?.id}><h3>{item?.card?.info?.name}</h3>
                            <div>
                                <button onClick={() => handleAddItem(item)} style={{ backgroundColor: "lavender", color: "black"  }}>Add to Cart</button>
                            </div>
                        </li>)}
                    </ul>

                </div>
            </>
        )
}
export default Menu