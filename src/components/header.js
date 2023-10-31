import { Link } from 'react-router-dom';
import { useState,useEffect } from "react"
import { useSelector,useDispatch } from 'react-redux';
import { addDetails, changeStatus } from '../utils/loginSlice';


const Header = () => {

    const cartItems = useSelector(store => store.cart.items)
    const userDetails = useSelector(store => store.login.detail)
    const[loginStatus, setLoginStatus]=useState(userDetails?.status)
    const [dropDown, setDropDown] = useState(false)
    const dispatch=useDispatch()
    const handleDropdown = () => {
        setDropDown(!dropDown);
    }
    const handleLogout=()=>{
        setLoginStatus(!loginStatus)
       
    }
    useEffect(()=>{
        dispatch(changeStatus(false))
    },[loginStatus])
    return (
        <>
            <div className="flex text-xl bg-black sticky top-0 h-14">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-J4fSCsqXBK_jxEAiZX_KA-y7Pq9iAqISNuON8oTki_AyczC_pjamwRDi5xAQ0Tsjfk&usqp=CAU"
                    className='m-0.5 h-12.5 w-13 '
                />

                <div >
                    <ul className='flex'>
                        <li className=' py-3 px-16 mx-5 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/"}>Home</Link></li>
                        <li className=' py-3 px-16 mx-5 text-white text-xl whitespace-nowrap  hover:text-yellow-500' ><Link to={"/about"}>About Us</Link></li>
                        <li className=' py-3 px-16 mx-5 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/offers"}>Offers</Link></li>
                        <li className=' py-3 px-16 mx-5 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/cart"}>Cart-{cartItems.length} items</Link></li>
                        {userDetails.status ? <li>
                            <div className="relative inline-block text-left mx-8">
                                <button className='inline-flex justify-center w-full px-4 py-2 text-lg text-white mt-1.5 font-bold bg-lime-700 border-gray-300 rounded-md shadow-sm  hover:bg-lime-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500'
                                onClick={handleDropdown}>{userDetails.name.slice(0, 1)}</button>
                                {dropDown && (
                                    <div className="origin-top-right absolute mt-2 w-40 rounded-md shadow-xl bg-white ring-1 ring-black ring-opacity-5">
                                        <div
                                            className="py-1"
                                            role="menu"
                                            aria-orientation="vertical"
                                            aria-labelledby="options-menu"
                                        >
                                            <button
                                                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                                                role="menuitem"
                                            >
                                                My Account
                                            </button>
                                            <button
                                                className="block px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100 hover:text-gray-900" name='logout'
                                             value={loginStatus} onClick={handleLogout}  role="menuitem"
                                            >
                                                Logout
                                            </button>
                                            
                                        </div>
                                    </div>
                                )}
                            </div>

                        </li>
                            :
                            <li className=' py-4 px-16 mx-5 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/login"}> Login </Link></li>}
                            

                    </ul>
                    
                </div>
            </div>

        </>

    )
}

export default Header