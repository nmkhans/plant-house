import React from 'react';
import { useDeleteOrderMutation, useGetAllOrderQuery, useUpdateStatusMutation } from '../../redux/api/api';
import { FiEdit, FiTrash } from "react-icons/fi"
import Swal from "sweetalert2"

const AdminOrders = () => {
    const { data, isLoading } = useGetAllOrderQuery()
    const [updateStatus] = useUpdateStatusMutation()
    const [deleteOrder] = useDeleteOrderMutation()

    if (isLoading) return "Loading..."

    const orders = data?.data;

    const handleStatusUpdate = async (id) => {
        const { value } = await Swal.fire({
            title: 'Update Status.',
            input: 'select',
            inputOptions: {
                pending: "pending",
                delivered: "delivered"
            },
            inputPlaceholder: 'Select status',
            showCancelButton: true,
        })

        const response = await updateStatus({ id, value })

        if (response?.data?.success) {
            Swal.fire(
                'Updated!',
                'Order status has been updated and email has been send.',
                'success'
            )
        }
    }

    const handleCancel = (id) => {
        Swal.fire({
            title: 'Cancel this order?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#8abe53',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, cancel it!'
          }).then(async (result) => {
            if (result.isConfirmed) {
                const response = await deleteOrder(id)
                if(response?.data?.success) {
                    Swal.fire(
                        'Canceled!',
                        'Order has been canceled.',
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
                                    <td className="flex items-center">
                                        <span
                                            onClick={() => handleStatusUpdate(order._id)}
                                            className="p-2 cursor-pointer text-warning"><FiEdit /></span>
                                        <span
                                        onClick={() => handleCancel(order._id)}
                                        className="p-2 cursor-pointer text-error"><FiTrash /></span>
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

export default AdminOrders;