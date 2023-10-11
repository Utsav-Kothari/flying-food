import { Link } from 'react-router-dom';
import './header.css';
import { useSelector } from 'react-redux';
import store from '../utils/store';


const Header = () => {

const cartItems=useSelector(store=>store.cart.items)

    return (
        <>
        <div className="header">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6-J4fSCsqXBK_jxEAiZX_KA-y7Pq9iAqISNuON8oTki_AyczC_pjamwRDi5xAQ0Tsjfk&usqp=CAU"
              />
               
            <div className="nav-items">
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About Us</Link></li>
                    <li><Link to={"/offers"}>Offers</Link></li>
                    <li><Link to={"/cart"}>Cart-{cartItems.length} items</Link></li>
                    <li>Login</li>
                    <li>Sign up</li>
                    
                </ul>
            </div>
        </div>
        
        </>

    )
}

export default Header