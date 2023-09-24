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
    category,
    description,
    id,
    image,
    price,
    rating,
    title
}: StoreItemProps) {

    const quantity = 0; // Placeholder to test add to cart btn

    return (
        <div className='card h-96 max-h-full border-orange-500 border-2 p-4 overflow-hidden'>
            <div className='card-img flex justify-center mb-4'>
                <img className='w-56 h-56 object-contain ' src={image} />
            </div>
            <div className='card-body flex-col'>
                <div className='card-title flex justify-between items-baseline mb-4'>
                    <span className='text-base'>{title}</span>
                    <span className='ml-2 text-lg'>${price}</span>
                </div>
                <div className='mt-auto'>
                    
                </div>
            </div>
        </div>
    )
}