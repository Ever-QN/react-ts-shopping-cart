import NavCartBtn from "./NavCartBtn";
import NavHomeBtn from "./NavHomeBtn";
import NavShopBtn from "./NavShopBtn";

function NavBar() {
    return (
        <nav>
            <NavHomeBtn />
            <NavShopBtn />
            <NavCartBtn />
        </nav>
    )
}

export default NavBar;