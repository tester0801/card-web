import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const ProductDetails = props => {
    const router = useRouter();

    useEffect(() => {
        router.push("/product");
    }, [])

    return null;
}

export default ProductDetails;
