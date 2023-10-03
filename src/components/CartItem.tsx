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
        <div className='flex justify-center items-center  gap-3 p-2 m-32'>
                <img className='w-32 object-cover' src={item.image} />
                <div className='me-auto'>
                    <div>
                        {item.title} {quantity > 1 && <span className='text-sm'>x{quantity}</span>}
                    </div>
                    <div className='text-sm italic'>
                        {formatCurrency(item.price)}
                    </div>
                    <div className='text-3xl font-bold'>
                        {formatCurrency(item.price * quantity)}
                    </div>
                </div>
                <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-6 max-h-10' onClick={() => removeFromCart(item.id)}>
                    &times;
                </button>
        </div>
    )
}