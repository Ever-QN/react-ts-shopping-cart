import '../index.css'


type Product = {
    category: string;
    description: string;
    id: number;
    image: string;
    price: number;
    rating: Rating;
    title: string;
}

type Rating = {
    count: number;
    rate: number;
}


function Product( { category, description, id, image, price, rating, title }: Product ) {

    return (
        <>
            <li className={'item-id-' + id.toString()}>
                {id} {title} ${price}

            </li>
        </>
    )
}

export default Product;