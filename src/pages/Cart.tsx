import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext"
import formatCurrency from "../utilities/formatCurrency";

export default function Cart() {

    const { cartItems, products } = useShoppingCart();

    return (
        <>
            {cartItems.length > 0 ? (
                <>
                    <div className='ms-auto font-bold text-3xl'>
                        Total {formatCurrency(cartItems.reduce((total, cartItem) => {
                            const item = products.find(i => i.id === cartItem.id)
                            return total + (item?.price || 0) * cartItem.quantity;
                    }, 0))}
                    </div>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} {...item} />
                    ))}
                </>
            ) : (
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-3xl font-bold p-4 flex justify-center'>No items in your cart!</h1>
                    <NavLink to='/store' className='hover:underline'>
                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center'>
                            Shop now
                        </button>
                    </NavLink>
                </div>
            )}

        </>
    );
}