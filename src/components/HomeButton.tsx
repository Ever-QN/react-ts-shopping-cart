import { Link } from "react-router-dom";

function HomeButton() {
    return (
        <button>
            <Link to='/'>Go home</Link>
        </button>
    )

}

export default HomeButton;