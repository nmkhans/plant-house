import React from "react";
import Swal from "sweetalert2";
import {
  useDeleteCategoryMutation,
  useGetCategoriesQuery,
} from "../../redux/api/api";
import capitalize from "./../../utils/captalize";

const AdminCategories = () => {
  const { data, isLoading } = useGetCategoriesQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  if (isLoading) return "Loading...";

  const categories = data?.data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#8abe53",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteCategory(id);
        console.log(response)

        Swal.fire("Deleted!", "Your category has been deleted.", "success");
      }
    });
  };

  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">All Categories</h3>
      </div>
      <div className="mt-5">
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr className="text-white">
                <th>Id</th>
                <th>Name</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((category) => (
                <tr key={category._id}>
                  <td>{category._id}</td>
                  <td>{capitalize(category.name)} Plant</td>
                  <td>
                    <button
                      onClick={() => handleDelete(category._id)}
                      className="btn btn-sm btn-error text-white"
                    >
                      Delete
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

export default AdminCategories;
