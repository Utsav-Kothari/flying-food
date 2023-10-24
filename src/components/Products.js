import { useEffect, useState } from "react"
import FoodCard from "./FoodCard"
import Loader from "./Loader"

import { Link } from "react-router-dom"
import { filterData } from "../content"

// const list = [{
//     imageId:"snrp0ayro6kyugcyne5c",
//     key: 1,
//     title:"Domino's Pizza",
//     rating:"3.9",
//     cuisines:["Pizzas","Italian","Pastas"],
//     address:"Jagatpura"
// },
// {
//     imageId:"jzzjzwgqhg3j9xjcqcf5",
//     key:2 ,
//     title:"JBT",
//     rating:"4.2",
//     cuisines:["Burgers","Pizzas","Snacks"],
//     address:"Jagatpura"
// },
// {
//     imageId:"uhmabyaw676hn77ayneo",
//     key: 3,
//     title:"Pink Adrak",
//     rating:"4.3",
//     cuisines:["Indian","Continental"],
//     address:"Jagatpura"
// },
// {
//     imageId:"smtqoidmgljptxfpkioy",
//     key:4 ,
//     title:"Kebabs and curries",
//     rating:"4",
//     cuisines:["Indian","North Indian"],
//     address:"Jagatpura"
// },
// {
//     imageId:"61a6541fcf0f99c0aac4a720c93b5a85",
//     key:5 ,
//     title:"KFC",
//     rating:"3.9",
//     cuisines:["Burgers","Biryani","American"],
//     address:"JTM Mall"
// }]

const Products = () => {
    console.log("render");
    const [searchText, setSearchText] = useState("");
    const [dataList, setDataList] = useState([]);
    const [filteredDataList, setFilteredDataList] = useState([]);
    
    useEffect(() => {
        getDataList()
    }, [])

    async function getDataList() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8176736&lng=75.86171709999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()

        setDataList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilteredDataList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
    console.log(filteredDataList)
    // if (filteredDataList.length===0) {
    //     return(<>
    //     <h1>No restaurant matched to your search</h1>
    //     <h3>Please refresh</h3>

    //     </>
    //     )

    // }
    
    if (!dataList) { return null }
    return dataList.length === 0 ? (<Loader/>)
        : (
            <>

                <div className='mt-0.5 ml-12 pl-4 '>
                    <input className="bg-white text-md  active:bg-gray-300 p-1.5 " placeholder='Enter name of restaurant' value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }} ></input>

                    <button className="text-white bg-black p-1.5 ml-0.5 text-md rounded-lg  hover:bg-gray-300 hover:text-black " onClick={() => {
                        const data = filterData(searchText, dataList)
                        setFilteredDataList(data)
                    }
                    } >Search</button>
                </div>
                <div className="flex flex-wrap " >
                    {/* <FoodCard data={list[0]} />
       <FoodCard data={list[1]} />
       <FoodCard data={list[2]} />
       <FoodCard data={list[3]} />
       <FoodCard data={list[4]} /> */}

                    {/* or */}


                    {/* <FoodCard {...list[0]} />  
       <FoodCard {...list[1]} />
       <FoodCard {...list[2]} />
       <FoodCard {...list[3]} />
       <FoodCard {...list[4]} /> */}          {/*... spread operator */}
                    {/* or */}
                    {filteredDataList.length === 0 ? (<h1>No item matched to your search. Please refresh</h1>)
                        :
                        (filteredDataList.map((Element) => {
                            return (
                                <Link to={"/menu/" + Element.info.id} key={Element.info.id}>
                                    <FoodCard {...Element.info}  />
                                </Link>
                            )
                        }))}
                </div>
            </>
        )
}

export default Products;