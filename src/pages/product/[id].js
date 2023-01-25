import React from 'react';
import { useRouter } from 'next/router';

const ProductDetails = props => {
    const router = useRouter();
    const { id } = router.query;
    return (
        <div>
            <p>{id}</p>
        </div>
    )
}

export default ProductDetails;
