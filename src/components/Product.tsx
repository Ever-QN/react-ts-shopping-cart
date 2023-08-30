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

function Product(prop: Product) {

    return (
        <div className={prop.id.toString()}>
        </div>
    )
}

export default Product