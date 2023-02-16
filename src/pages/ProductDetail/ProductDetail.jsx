import React from 'react';
import { useGetSingleProductQuery } from '../../redux/api/api';
import { useParams } from 'react-router-dom';
import capitalize from './../../utils/captalize';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/state/cartSlice';
import Spinner from './../../components/Spinner/Spinner';

const ProductDetail = () => {
    const { id } = useParams()
    const { data, isLoading } = useGetSingleProductQuery(id)
    const dispatch = useDispatch()

    if (isLoading) return <Spinner />

    const product = data?.data[0]

    return (
        <main className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <div className="card lg:card-side bg-base-100 shadow-xl border">
                    <figure>
                        <img className="w-[500px]" src={product.image} alt="Product image" />
                    </figure>
                    <div className="p-10">
                        <h2 className="text-2xl font-semibold text-base-200 mb-4">Name: {product.name}</h2>
                        <p className="text-slate-400 mb-5">Category {capitalize(product.category)}</p>
                        <p>{product.description}</p>
                        <p className="text-base-200 mt-10">Price: {product.price} Taka</p>
                        <p className="text-base-200 mt-2">Stock: {product.stock ? product.stock + " pice" : <span className="text-red-500">Out of stock</span>}</p>
                        <div className="card-actions justify-start mt-10">
                            <button
                                disabled={product.stock === 0}
                                onClick={() => dispatch(addToCart({ _id: product._id, name: product.name, image: product.image, price: product.price }))}
                                className="btn btn-primary text-white w-full">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default ProductDetail;