import React from 'react';
import Product from '../../components/Product/Product';
import { useGetAllProductsQuery } from '../../redux/api/api';

const AllProducts = () => {
    const { data, isLoading } = useGetAllProductsQuery()
    const products = data?.data;

    return (
        <section className="py-10">
            <div>
                <h3 className="text-3xl font-semibold text-base-200">Leatest Products</h3>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
                {products?.slice(0, 12).map(product => <Product key={product._id} product={product} />)}
            </div>
        </section>
    );
};

export default AllProducts;