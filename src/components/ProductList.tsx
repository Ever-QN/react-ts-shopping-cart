import { useState, useEffect } from 'react';
import Product from './Product';

function FetchProductList() {
    const [productList, setProductList] = useState([]);

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
        <div className="product-list">
            <h1 className='text-3xl font-bold underline'>Items</h1>
                <ul>
                    {productList.map(product => <li key={product}><Product /></li>)}
                </ul>
        </div>
    )
}   

export default ProductList
