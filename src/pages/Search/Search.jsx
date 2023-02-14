import React, { useState, useEffect } from 'react';
import Product from './../../components/Product/Product';
import { useParams } from 'react-router-dom';
import { useGetProductBySearchQuery } from '../../redux/api/api';
import { genButton } from '../../utils/paginationButton';
import Spinner from './../../components/Spinner/Spinner';

const Search = () => {
    const { search } = useParams();
    const [query, setQuery] = useState({
        pageno: 1,
        perpage: 12,
        search: search
    });

    useEffect(() => {
        setQuery(prev => ({
            ...prev, 
            search: search
        }))
    }, [search])

    const { data, isLoading } = useGetProductBySearchQuery(query)

    if (isLoading) return <Spinner />

    const products = data?.data
    const count = data?.count
    const buttonCount = Math.ceil(count / query.perpage)

    console.log(data)

    return (
        <main className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <div className="shop__title py-3">
                    <h2 className="text-center font-semibold text-3xl">Showing search result for {search}</h2>
                    <p className="text-[13px] text-center max-w-lg mx-auto mt-4">Welcome to Plant House, your one-stop shop for Plants. Buy Plants at the best deal. What ever you can think, we have in our collection. </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 mt-10">
                    {products?.map(product => <Product key={product._id} product={product} />)}
                </div>
                <div className="my-10 text-center">
                    <div className="btn-group">
                        {genButton(buttonCount).map((element, index) => <button
                            onClick={() => handlePagination(element)}
                            className="btn btn-outline btn-primary">{element}</button>)}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Search;