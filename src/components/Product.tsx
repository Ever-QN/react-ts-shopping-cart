
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


function Product( { ...product }: Product ) {

    return (
        <div>
            <ul>{product.title}</ul>
        </div>
    )
}

export default Product