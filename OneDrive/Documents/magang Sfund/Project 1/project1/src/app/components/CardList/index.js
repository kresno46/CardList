'use client'
import React, { useState, useEffect } from 'react';

const Card = ({ products }) => {
    return (
        <div className="grid grid-cols">
            {products.map((product, index) => (
                <div key={index} className="border rounded p-4 m-2">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-600">{product.description}</p>
                    <p className="text-gray-600">Price: {product.price}</p>
                </div>
            ))}
        </div>
    )
}

const CardList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch.get('https://dummyjson.com/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <Card products={products} />
        </div>
    )
}

export default CardList;
