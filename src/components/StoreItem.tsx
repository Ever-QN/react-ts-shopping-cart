import { useShoppingCart } from "../context/ShoppingCartContext";
import formatCurrency from "../utilities/formatCurrency";

type StoreItemProps = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: object;
    title: string;
}

export default function StoreItem({
    id,
    image,
    price,
    title
}: StoreItemProps) {

    const { 
        getItemQuantity, 
        increaseCartQuantity, 
        decreaseCartQuantity, 
        removeFromCart, 
    } = useShoppingCart()

    const quantity = getItemQuantity(id);

    return (
        <div className='grid grid-cols-none h-100 p-4 w-0 min-w-full'>
            <div className='card-img flex justify-center mb-4'>
                <img className='w-56 h-56 object-contain ' src={image} />
            </div>
            <div className='card-body flex-col'>
                <div className='flex justify-between items-baseline mb-4'>
                    <span className='text-base'>{title}</span>
                    <span className='ml-2 text-lg'>{formatCurrency(price)}</span>
                </div>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <button className='w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => increaseCartQuantity(id)}>+ Add to Cart</button>
                    ) : (
                        <div className='flex items-center flex-col gap-2'>
                            <div className='flex items-center justify-center gap-2'>
                                <button className=' bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => decreaseCartQuantity(id)}>-</button>
                                <div className=''>
                                    <span className='text-3xl'>{quantity}</span> in cart
                                </div>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => increaseCartQuantity(id)}>+</button>
                            </div>
                            <button className=' bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => removeFromCart(id)}>Remove</button>
                        </div> 
                        )}
                </div>
            </div>
        </div>
    )
}