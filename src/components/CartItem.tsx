import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

type CartItemProps = {
    id: number;
    quantity: number;
}

export default function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart, products } = useShoppingCart();
    const item = products.find(i => i.id === id);
    if (item == null) return null;

    return (
        <div className=''>
            <img className='w-32 object-cover' src={item.image} />
            <div className='me-auto'>
                <div>
                    {item.title} {quantity > 1 && <span className='text-sm'>x{quantity}</span>}
                </div>
                <div className='text-sm'>
                    {formatCurrency(item.price)}
                </div>
                <div className='text-3xl'>
                {formatCurrency(item.price * quantity)}
                </div>
            </div>
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => removeFromCart(item.id)}>&times;</button>
        </div>
    )
}