import { NavLink } from "react-router-dom"

export default function Navbar() {

    return (
        <nav className='flex items-center justify-between flex-wrap bg-slate-500 p-6 shadow-xl mb-3'>
            <div className='flex items-center flex-shrink-0 text-white mr-6'>
                <span className='font-semibold text-xl tracking-tight'>Quynh's Store</span>
            </div>

            <ul className='flex gap-4 text-white'>
                <li><NavLink to='/' className='hover:underline'>Home</NavLink></li>
                <li><NavLink to='/store' className='hover:underline'>Store</NavLink></li>
                <li><NavLink to='/about' className='hover:underline'>About</NavLink></li>
            </ul>
        </nav>
    )
}