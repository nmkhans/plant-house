import React, { useState } from 'react';
import Product from '../../components/Product/Product';
import Spinner from '../../components/Spinner/Spinner';
import { useGetAllProductsQuery } from '../../redux/api/api';

const AllProducts = () => {
    const [query, setQuery] = useState({
        pageno: 1,
        perpage: 6
    })
    const { data, isLoading } = useGetAllProductsQuery(query)
    const products = data?.data;

    if (isLoading) return <Spinner />

    return (
        <section className="py-10">
            <div>
                <h3 className="text-3xl font-semibold text-base-200">Latest Products</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
                {products?.map(product => <Product key={product._id} product={product} />)}
            </div>
        </section>
    );
};

export default AllProducts;