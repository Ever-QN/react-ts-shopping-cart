import { useEffect, useState } from "react"
import StoreItem from "../components/StoreItem";

export default function Store() {

    const [products, setProducts] = useState<Array<product>>([]);

    type product = {
        category: string;
        description: string;
        id: number;
        image: string;
        price: number;
        rating: object;
        title: string;
    }

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://fakestoreapi.com/products');
                if (!response.ok) {
                    throw new Error('Network response error');
                }
                const data = await response.json();
                setProducts(data);
            } catch (error) {
                console.error('Error fetching the data: ', error);
            }
        }

        fetchData();
    }, []);

    return (
        <div className='container mx-auto'>
            <h1 className='text-xl font-bold underline mb-4'>Store</h1>
            <ul className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-3 justify-center items-center'>
                {products.map((item) => 
                    <li key={item.id} className=''>
                        <StoreItem {...item} />
                    </li>
                )}
            </ul>
        </div>
    )
}