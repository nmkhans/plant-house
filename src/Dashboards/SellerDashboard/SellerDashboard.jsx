import React from 'react';
import { useConfirmPaymentMutation, useGetAllOrderQuery } from '../../redux/api/api';
import { FiEdit, FiTrash } from "react-icons/fi"
import Swal from 'sweetalert2'

const SellerDashboard = () => {
    const { data, isLoading } = useGetAllOrderQuery()
    const [confirmPayment] = useConfirmPaymentMutation()

    if (isLoading) return "Loading..."

    const orders = data?.data;

    const handlePayment = async (id) => {
        Swal.fire({
            title: 'Confirm payment!',
            text: "You are confirming payment for this order.",
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#8abe53',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, confirm it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await confirmPayment(id)
                if (response?.data?.success) {
                    Swal.fire(
                        'Done!',
                        'Payment has been completed.',
                        'success'
                    )
                }
            }
        })
    }

    return (
        <div className="p-5">
            <div>
                <h3 className="text-2xl font-semibold text-base-200">All Orders</h3>
            </div>
            <div className="mt-5">
                <div className="overflow-x-auto w-full">
                    <table className="table w-full">
                        <thead>
                            <tr className="text-white text-center">
                                <th>Email</th>
                                <th>Products</th>
                                <th>Payment</th>
                                <th>Payment method</th>
                                <th>Status</th>
                                <th>Paid</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order, index) => (
                                <tr className="text-center" key={order._id}>
                                    <td>{order.email}</td>
                                    <td>{order.products.length}</td>
                                    <td>{order.payment}</td>
                                    <td>{order.paymentmethod}</td>
                                    <td>
                                        {order.status === "pending" ? <span className="badge badge-warning text-white">{order.status}</span> : <span className="badge badge-success text-white">{order.status}</span>}
                                    </td>
                                    <td>{order.paid ? <span className="badge badge-info text-white">paid</span> : <span className="badge badge-error text-white">unpaid</span>}</td>
                                    <td onClick={() => handlePayment(order._id)}>
                                        <span className="p-2 cursor-pointer text-white btn btn-success btn-sm">Pay</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default SellerDashboard;