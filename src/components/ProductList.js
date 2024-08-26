import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <div key={product.product_id}>
          <Link to={`/product/${product.product_id}`}>
            <h3>{product.product_name}</h3>
            <p>{product.product_desc}</p>
            <p><strong>Category:</strong> {product.product_category}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
