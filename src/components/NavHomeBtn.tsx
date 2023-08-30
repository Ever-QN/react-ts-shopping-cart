import { Link } from "react-router-dom"

function NavHomeBtn() {
    return (
        <div className='home-btn'>
            <Link to='/'>Go home</Link>
        </div>

    )
}

export default NavHomeBtn;