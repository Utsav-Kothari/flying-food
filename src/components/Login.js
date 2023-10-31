import { useState, useEffect } from "react";
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { addDetails } from "../utils/loginSlice";
import store from "../utils/store";
const Login = () => {

    const dispatch=useDispatch()
    const [details, setDetails] = useState({ name: "", add: "", email: "",status:false})
    
    const handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setDetails((prevDetails) => ({ ...prevDetails, [name]: value }))
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();  
       
        const { name, value } = e.target;
        setDetails((prevDetails) =>  ({ ...prevDetails, [name]: value  }))      
    }
    useEffect(()=>{
        dispatch(addDetails(details))
    },[details.status])
   
    const userDetails=useSelector(store=>store.login.detail)
    console.log(`Login.js:${userDetails.status}`)
    return (
       details.status?
        <>
         <div className="font-bold text-3xl m-1 p-1">Hello {details?.name}, You are logged in.</div>
         <div className="text-xl m-1 p-1">Go to Home page and order your meal:
         <Link to={"/"}> <button className="text-white m-1  bg-black w-20  text-md rounded-lg  hover:bg-gray-300 hover:text-black "
               >Home</button></Link></div> 
            
        </> 
        :
        <div>
            <div className=" text-center mx-96 rounded-xl bg-gradient-to-l from-blue-500 to-violet-700 text-white shadow-xl">
            <div className="font-bold text-3xl m-1 mt-2 p-1.5 ">Login</div>
            </div>
        <div className=" mt-2 flex justify-center" >
            <div className=" bg-white rounded-xl py-6 shadow-2xl   lg:w-[40%]">
            <form className="flex flex-col px-10 pt-5 gap-6  text-xl mt-2  ">
               <div className="flex flex-col md:flex-row w-full md:items-center gap-x-3 hover:scale-105 transition-all hover:bg-gray-100 p-2 rounded-xl">
               <label className="font-bold">Name:</label>
                <input type="text" required placeholder="Enter your name" className="bganimate border border-gray-300 rounded-xl text-xl px-2 py-2 mt-3 md:mt-0  focus:border-cyan-500 focus:shadow-lg "
                    name="name" value={details.name} onChange={handleChange} /> 
               </div>
                <div className="flex flex-col md:flex-row w-full md:items-center gap-x-3 hover:scale-105 transition-all hover:bg-gray-100 p-2 rounded-xl">
                <label className="font-bold">Location:</label>
                <input type="text" required placeholder="Enter address" className="bganimate border border-gray-300 rounded-xl text-xl px-2 py-2 mt-3 md:mt-0  focus:border-cyan-500 focus:shadow-lg "
                    name="add" value={details.add} onChange={handleChange} />
                </div>
                <div className="flex flex-col md:flex-row w-full md:items-center gap-x-3 hover:scale-105 transition-all hover:bg-gray-100 p-2 rounded-xl">

                <label className="font-bold">E-mail:</label>
                <input type="email" required placeholder="Enter your e-mail" className="bganimate border border-gray-300 rounded-xl text-xl px-2 py-2 mt-3 md:mt-0  focus:border-cyan-500 focus:shadow-lg "
                    name="email" value={details.email} onChange={handleChange} />
                </div>
                <div className="flex flex-col md:flex-row w-full md:items-center gap-x-3 hover:scale-105 transition-all hover:bg-gray-100 p-2 rounded-xl">
                <label className="font-bold">Password:</label>
                <input type="password" required placeholder="Password" className="bganimate border border-gray-300 rounded-xl text-xl px-2 py-2 mt-3 md:mt-0  focus:border-cyan-500 focus:shadow-lg "
                name="password" />
                </div>
                
                <button type="submit" name="status" value={true} className="text-white bg-gradient-to-l from-blue-500 to-violet-700 w-20 text-xl rounded-lg p-2 hover:bg-gray-300 hover:text-black "
                onClick={handleSubmit} >Submit</button>
                
                
            </form>
            </div>
        
        </div >
        </div>
    )
}
export default Login