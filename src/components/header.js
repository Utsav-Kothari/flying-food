import { Link } from 'react-router-dom';

import { useSelector } from 'react-redux';



const Header = () => {

const cartItems=useSelector(store=>store.cart.items)

    return (
        <>
        <div className="flex text-xl bg-black sticky top-0">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-J4fSCsqXBK_jxEAiZX_KA-y7Pq9iAqISNuON8oTki_AyczC_pjamwRDi5xAQ0Tsjfk&usqp=CAU"
            className='m-0.5 h-16 w-16'
              />
               
            <div >
                <ul className='flex overflow-x-auto '>
                    <li className='inline-block py-4 px-16 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/"}>Home</Link></li>
                    <li className='inline-block py-4 px-16 text-white text-xl whitespace-nowrap  hover:text-yellow-500' ><Link to={"/about"}>About Us</Link></li>
                    <li className='inline-block py-4 px-16 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/offers"}>Offers</Link></li>
                    <li className='inline-block py-4 px-16 text-white text-xl whitespace-nowrap  hover:text-yellow-500'><Link to={"/cart"}>Cart-{cartItems.length} items</Link></li>
                    <li className='inline-block py-4 px-16 text-white text-xl whitespace-nowrap  hover:text-yellow-500'>Login</li>
                    <li className='inline-block py-4 px-16 text-white text-xl whitespace-nowrap  hover:text-yellow-500'>Sign up</li>
                    
                </ul>
            </div>
        </div>
        
        </>

    )
}

export default Header