import { useShoppingCart } from "../context/ShoppingCartContext";

type CartItemProps = {
    id: number;
    quantity: number;
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart, products } = useShoppingCart();
    const item = products.find(i => i.id === id);
    if (item == null) return null;

    return (
        <>
            <img src={item.image} />
        </>
    )
}