import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../../useFetch';

const ProductDetails = () => {
    const { id } = useParams();
    const { data: product, isPending, errorMsg, haveError } = useFetch(`http://localhost:8000/products/${id}`);

    return (
        <div>
            {isPending && <p>Loading...</p>}
            {haveError && <p>{errorMsg}</p>}
            {product && (
                <div>
                    <h2>{product.product_name}</h2>
                    <img src={product.product_image} alt={product.product_name} />
                    <p>{product.product_desc}</p>
                    <p><strong>Price:</strong> ${product.product_price}</p>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
