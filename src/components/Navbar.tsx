import { NavLink } from "react-router-dom"
import { useShoppingCart } from "../context/ShoppingCartContext"

export default function Navbar() {
    const { cartQuantity } = useShoppingCart();

    return (
        <nav className='flex items-center justify-between flex-wrap bg-slate-500 p-6 shadow-xl mb-3 sticky top-0'>

            <ul className='flex gap-4 text-white'>
                <li><NavLink to='/' className='hover:underline'>Home</NavLink></li>
                <li><NavLink to='/store' className='hover:underline'>Store</NavLink></li>
                <li><NavLink to='/about' className='hover:underline'>About</NavLink></li>
            </ul>
                <NavLink to='/cart'>
                    <button className='text-white hover:bg-slate-600 rounded-full p-2 border-2 relative'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                        {cartQuantity > 0 ? (<div className='rounded-full w-5 bg-red-500 absolute bottom-0 right-0 translate-x-1/4 translate-y-1/4'>
                        {cartQuantity}
                        </div>
                        ) : null }
                    </button>
                </NavLink>
                
        </nav>
    )
}