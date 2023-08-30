import { Link } from "react-router-dom";

function NavCartButton() {
    return (
        <div className='cart-btn'>
            <Link to='/cart'>View shopping cart</Link>
        </div>
    )
}

export default NavCartButton;