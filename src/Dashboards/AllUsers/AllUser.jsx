import React, { useState } from "react";
import {
  useGetAllUserQuery,
  useMakeAdminMutation,
  useMakeSellerMutation,
} from "../../redux/api/api";
import { genButton } from "../../utils/paginationButton";
import toast from "react-hot-toast";

const AllUser = () => {
  const [query, setQuery] = useState({
    pageno: 1,
    perpage: 10,
  });
  const { data, isLoading } = useGetAllUserQuery(query);
  const [makeUser] = useMakeSellerMutation();
  const [makeAdmin] = useMakeAdminMutation();

  if (isLoading) return "Loading...";

  const users = data?.data;
  const count = data?.count;

  const buttonCount = Math.ceil(count / query.perpage);
  console.log(users[0]);

  const handleMakeSeller = async (id) => {
    const response = await makeUser(id);

    if (response?.data?.success) {
      toast.success(response?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(response?.error?.data?.message, {
        position: "bottom-center",
      });
    }
  };

  const handleMakeAdmin = async (id) => {
    const response = await makeAdmin(id);

    if (response?.data?.success) {
      toast.success(response?.data?.message, {
        position: "bottom-center",
      });
    } else {
      toast.error(response?.error?.data?.message, {
        position: "bottom-center",
      });
    }
  };

  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">All Users</h3>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className="text-white">
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {users?.map((user) => (
                <tr key={user._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={user.image} alt="user image" />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.seller ? "seller" : user.role}</td>
                  <td>
                    {!user.seller && user.role !== "admin" && (
                      <button
                        onClick={() => handleMakeSeller(user._id)}
                        className="btn btn-sm btn-info text-white"
                      >
                        Make seller
                      </button>
                    )}
                    {user.role !== "admin" && (
                      <button
                        onClick={() => handleMakeAdmin(user._id)}
                        className="btn btn-sm btn-warning ml-2 text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-5">
        {genButton(buttonCount).map((element, index) => (
          <button
            onClick={() => handlePagination(element)}
            className="btn btn-outline btn-primary mx-1"
          >
            {element}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllUser;
