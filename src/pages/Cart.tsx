import { useShoppingCart } from "../context/ShoppingCartContext"


type CartItemProps = {
    id: number
    quantity: number
}

export default function Cart() {

    
    const { removeFromCart, cartItems } = useShoppingCart();
    const item = cartItems.find(i => i.id === id);
    if (item == null) return null;

    return (
        <>
            {cartItems.map((item) => {
                <ul key={item.id}>{item.quantity}</ul>
            })}
        </>
    )
}