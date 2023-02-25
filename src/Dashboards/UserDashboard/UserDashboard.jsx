import React from "react";
import SummeryCard from "../../components/SummeryCard/SummeryCard";
import { useAdminSummeryQuery, useUserSummeryQuery } from "../../redux/api/api";
import { useAuthUser } from "react-auth-kit";

const UserDashboard = () => {
  const auth = useAuthUser();
  const user = auth();
  const { data, isLoading } = useAdminSummeryQuery();
  const { data: userSummery, isLoading: userDataLoading } = useUserSummeryQuery(
    user?.email
  );
  console.log(user)

  if (isLoading) return "Loading...";
  if (userDataLoading) return "Loading...";
  const adminSummery = data?.data;
  const summery = userSummery?.data;

  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">Dashboard</h3>
      </div>
      {user.seller ? (
        <div className="grid grid-cols-3 gap-10 mt-10">
          <SummeryCard title="All Orders" data={adminSummery.orders} />
          <SummeryCard
            title="Pending orders"
            data={adminSummery.pendingOrders}
          />
          <SummeryCard
            title="Delivered orders"
            data={adminSummery.deliveredOrders}
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-10 mt-10">
          <SummeryCard
            title="Pending orders"
            data={summery.pendingOrders}
          />
          <SummeryCard
            title="Delivered orders"
            data={summery.deliveredOrders}
          />
        </div>
      )}
    </div>
  );
};

export default UserDashboard;
