import { useState, useEffect } from 'react';

export default function useProducts({saleOnly}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    setError(undefined);
    fetch(`data/${saleOnly ? 'sale_' : ''}products.json`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log('데이터를 네트워크에서 받아옴!');
        
        setProducts(data);
      }).catch((error) => {
        console.log(error);
        setError('에러 발생');
      }).finally(() => {
        setLoading(false);
      });

      return () => {
        console.log('깨끗하게 Clean!');
      };
  }, [saleOnly]);

  return [loading, error, products];
}