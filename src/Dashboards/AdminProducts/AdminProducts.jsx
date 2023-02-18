import React, { useState } from 'react';
import RestockModal from '../../components/RestockModal/RestockModal';
import { useGetAllProductsQuery, useDeleteProductMutation } from '../../redux/api/api';
import { genButton } from '../../utils/paginationButton';
import Swal from 'sweetalert2';

const AdminProducts = () => {
    const [query, setQuery] = useState({
        pageno: 1,
        perpage: 10
    })
    const [id, setId] = useState("")
    const { data, isLoading } = useGetAllProductsQuery(query)
    const [deleteProduct] = useDeleteProductMutation()

    if (isLoading) return "Loading..."

    const products = data?.data;
    const count = data?.count;

    const buttonCount = Math.ceil(count / query.perpage)

    const handlePagination = (element) => {
        setQuery(prev => ({
            ...prev,
            pageno: element
        }))
    }

    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8abe53',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {

                await deleteProduct(id)

                Swal.fire(
                    'Deleted!',
                    'Your product has been deleted.',
                    'success'
                )
            }
        })
    }

    return (
        <div className="p-5">
            <div>
                <h3 className="text-2xl font-semibold text-base-200">All Products</h3>
            </div>
            <div className="mt-5">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-white text-center">
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map(product => (
                                <tr>
                                    <td>
                                        <div className="flex items-center space-x-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={product.image} alt="product image" />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">
                                                    {product.name}
                                                </div>
                                                <div className="text-sm opacity-50">{product.category}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>{product.price} Taka</td>
                                    <td>{product.stock === 0 ? <span className=" badge badge-sm badge-error text-white">Out of stock</span> : <span>{product.stock} Pice</span>}</td>
                                    <td>
                                        <label
                                            onClick={() => setId(product._id)}
                                            htmlFor="restock-modal" className="btn btn-sm btn-success mr-3 text-white">Restock</label>
                                        <button
                                            onClick={() => handleDelete(product._id)}
                                            className="btn btn-sm btn-error text-white">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="mt-5">
                {genButton(buttonCount).map((element, index) => <button
                    onClick={() => handlePagination(element)}
                    className="btn btn-outline btn-primary mx-1">{element}</button>)}
            </div>
            <div>
                <RestockModal id={id} />
            </div>
        </div>
    );
};

export default AdminProducts;