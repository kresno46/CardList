'use client'
import React, { useState, useEffect } from 'react';
import CardList from './components/CardList';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        setProducts(data.products); 
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>
  
        <div className="mt-6 grid grid-cols-3 gap-6 sm:gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80 relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Detail
                </button>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.title}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.thumbline}</p>
                  <p className="mt-1 text-sm text-gray-500">{product.category}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
  };   

  export default Home;
  
  
//   return (
//     <div className="grid grid-cols-3 gap-5 mx-auto max-w-screen-xl">
//     {products.map(product => (
//         <div key={product.id} className="flex w-full justify-center">
//             <div className="w-60 h-64 p-4 relative">
//                 {product.title}
//                 <img src={product.thumbnail} alt={product.title} className="w-full h-full object-cover" />
//                 <div className="absolute inset-0 flex flex-col justify-between">
//                     <div>
//                         {/* <p>{product.title}</p> */}
//                         <p className="text-right">{new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(product.price)}</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     ))}
// </div>




//   );
// };

