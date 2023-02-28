import React from "react";
import {
  useDeletePodcastMutation,
  useGetPodcastsQuery,
} from "../../redux/api/api";
import Swal from "sweetalert2";

const AdminPodcasts = () => {
  const { data, isLoading } = useGetPodcastsQuery();
  const [deletePodcast] = useDeletePodcastMutation();

  if (isLoading) return "Loading...";

  const podcasts = data?.data;

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
        const response = await deletePodcast(id);

        Swal.fire("Deleted!", "Your podcast has been deleted.", "success");
      }
    });
  };

  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">All Podcasts</h3>
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
              {podcasts?.map((podcast) => (
                <tr key={podcast._id}>
                  <td>{podcast._id}</td>
                  <td>{podcast.title}</td>
                  <td>
                    <button
                      onClick={() => handleDelete(podcast._id)}
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

export default AdminPodcasts;
