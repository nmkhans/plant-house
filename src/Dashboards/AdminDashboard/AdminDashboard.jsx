import React from "react";
import SummeryCard from "../../components/SummeryCard/SummeryCard";
import { useAdminSummeryQuery } from "../../redux/api/api";

const AdminDashboard = () => {
  const { data, isLoading } = useAdminSummeryQuery();

  if(isLoading) return "Loading..."
  const summery = data?.data;

  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">Dashboard</h3>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-10">
        <SummeryCard title="All Users" data={summery.users} />
        <SummeryCard title="All Orders" data={summery.orders} />
        <SummeryCard title="Pending orders" data={summery.pendingOrders} />
        <SummeryCard title="Delivered orders" data={summery.deliveredOrders} />
      </div>
    </div>
  );
};

export default AdminDashboard;
