import React, { useState } from 'react';
import useProducts from '../hooks/use-products';

export default function Products() {
  const [checked, setChecked] = useState(false);
  const [loading, error, products] = useProducts({ saleOnly: checked });
  const handleChange = () => setChecked(prev => !prev);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>{error}</div>;

  return (
    <>
      <input id='checkbox' type="checkbox" value={checked} onChange={handleChange} />
      <label htmlFor='checkbox'>Show Only 핫 Sale</label>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <article>
              <h3>{product.name}</h3>
              <p>{product.price}</p>
            </article>
          </li>
        ))}
      </ul>
    </>
  );
}

