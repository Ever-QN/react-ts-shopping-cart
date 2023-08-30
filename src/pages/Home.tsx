import { Link } from "react-router-dom"

function Home() {
    return (
        <div className='container'>
            <h1>Home</h1>
            <p>Hello!</p>
            <nav>
                <ul>
                    <li>
                        <Link to='shop'>Shop</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Home