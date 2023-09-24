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
    return (
        <div className='card border-orange-500 border-2 p-4'>
            <div className='card-img'>
                <img className='w-96 h-96 object-contain' src={image} />
            </div>
            <div className='card-body flex-col'>
                <div className='card-title flex justify-between items-baseline mb-4'>
                    <span className='text-base whitespace-nowrap'>{title}</span>
                    <span className='ml-2 text-lg'>${price}</span>
                </div>
            </div>
        </div>
    )
}