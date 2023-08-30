import NavCartBtn from "../components/NavCartBtn";
import NavHomeBtn from "../components/NavHomeBtn";
import ProductList from "../components/ProductList";

function Shop() {
    return (
        <>
            <ProductList />
            <NavHomeBtn />
            <NavCartBtn />
        </>
    )
}

export default Shop