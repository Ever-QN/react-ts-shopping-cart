import StoreItem from "../components/StoreItem";
import { useShoppingCart } from "../context/ShoppingCartContext";

export default function Store() {

    const { products } = useShoppingCart();

    return (
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold underline mb-4'>Store</h1>
            <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-3 justify-center items-center'>
                {products.map((item) => 
                    <li key={item.id} className=''>
                        <StoreItem {...item} />
                    </li>
                )}
            </ul>
        </div>
    )
}