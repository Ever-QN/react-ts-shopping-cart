import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext"

export default function Cart() {

    const { cartItems } = useShoppingCart();

    return (
        <>
            {cartItems.length > 0 ? (
                cartItems.map(item => (
                <CartItem key={item.id} {...item} />
                ))
                ) : (
                    <h1>No items in your cart!</h1>
                )
            }
        </>
    )
}