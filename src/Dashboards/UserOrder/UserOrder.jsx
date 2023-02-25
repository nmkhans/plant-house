import React from "react";
import { useGetOrderByEmailQuery } from "../../redux/api/api";
import { useAuthUser } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

const UserOrder = () => {
  const auth = useAuthUser();
  const user = auth();
  const { data, isLoading } = useGetOrderByEmailQuery(user?.email);
  const navigate = useNavigate();

  if (isLoading) return "loading...";

  const orders = data?.data;

  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">Your Orders</h3>
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
                <th>Review</th>
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
                    {order.status === "pending" ? (
                      <span className="badge badge-warning text-white">
                        {order.status}
                      </span>
                    ) : (
                      <span className="badge badge-success text-white">
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td>
                    {order.paid ? (
                      <span className="badge badge-info text-white">paid</span>
                    ) : (
                      <span className="badge badge-error text-white">
                        unpaid
                      </span>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => navigate(`/user/review/${order._id}`)}
                      disabled={order.status === "pending" || !order.paid}
                      className="btn btn-info btn-sm text-white"
                    >
                      Review
                    </button>
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

export default UserOrder;
