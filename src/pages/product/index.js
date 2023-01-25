import React from 'react';
import { useRouter } from 'next/router';

const ProductList = props => {

    const router = useRouter();
    const { id } = router.query;

    return (
        <div>
            List
        </div>
    )
}

export default ProductList;
