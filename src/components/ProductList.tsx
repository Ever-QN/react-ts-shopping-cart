import { useState, useEffect } from 'react';
import Product from './Product';

function FetchProductList() {
    const [productList, setProductList] = useState<Array<Product>>([]);

    useEffect(() => {
        async function FetchProducts() {
            try {
                const response = await fetch('https://fakestoreapi.com/products', { 
                    mode: 'cors' 
                });
                const data = await response.json();
                setProductList(data);
            } catch (error) {
                console.error('Error fetching products: ', error);
            }
        }
        
        FetchProducts();
    }, [])

    console.log(productList);
    return productList;

}

function ProductList() {

    const productList = FetchProductList();

    return (
        <div className='products-list-container'>
            <h1 className='text-3xl font-bold underline'>Items</h1>
            <ul className='products-list'>
                {productList.map(product =>
                    <Product key={product.id} category={product.category} description={product.description} id={product.id} image={product.image} price={product.price} rating={product.rating} title={product.title}/>)}
                </ul>
        </div>
    )
}   

export default ProductList;
