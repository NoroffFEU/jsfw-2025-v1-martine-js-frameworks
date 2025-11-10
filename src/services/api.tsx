import React, { useEffect, useState } from 'react';
import ProductCard from 'components/ProductCard';

const url = 'https://v2.api.noroff.dev/online-shop';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsError(false);
        setIsLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProducts(json.data);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(true);
        console.log(error);
      }
    }

    getData();
  }, []);

  if (isLoading) {
    return <div>Loading products...</div>;
  }

  if (isError) {
    return <div>Error loading products</div>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-8 gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          price={
            product.price > product.discountedPrice
              ? product.discountedPrice
              : product.price
          }
          image={product.image.url}
          discountedPrice={
            product.discountedPrice === product.price ? null : product.price
          }
          rating={product.rating}
        />
      ))}
    </div>
  );
}
