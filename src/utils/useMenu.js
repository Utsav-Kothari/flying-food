import { useEffect, useState } from "react"
import { MENU_CDN_URL } from "../content";


const useMenu=(resId)=>{
    
    const [restaurant,setRestaurant]=useState({})
    useEffect(()=>{
        getMenu();
    },[])
    async function getMenu(){
        const data= await fetch( MENU_CDN_URL +resId)
        const json=await data.json()
        setRestaurant(json?.data?.cards)
    }
    return (restaurant);
}
export default useMenu;