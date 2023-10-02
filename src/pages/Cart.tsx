import CartItem from "../components/CartItem";
import { useShoppingCart } from "../context/ShoppingCartContext"

export default function Cart() {

    const { cartItems } = useShoppingCart();

    return (
        <>
            {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </>
    )
}