import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const AdminIndex = props => {
    const router = useRouter();

    useEffect(() => {
        router.push("/admin/user");
    }, [])

    return null;
}

export default AdminIndex;
