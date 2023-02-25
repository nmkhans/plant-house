import React from "react";
import { useForm } from "react-hook-form";
import { useCreateCategoryMutation } from "../../redux/api/api";
import toast from "react-hot-toast";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createCategory] = useCreateCategoryMutation();

  const onSubmit = async (data) => {
    const categoryData = {
      name: data.category,
    };

    const response = await createCategory(categoryData);

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
        <h3 className="text-2xl font-semibold text-base-200">
          Create Category
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto mt-10">
        <div className="form-control">
          <label htmlFor="category" className="label">
            <span className="label-text">Category name</span>
          </label>
          <input
            id="category"
            type="text"
            placeholder="Enter category name"
            className="input input-bordered"
            {...register("category", {
              required: {
                value: true,
                message: "Category name is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.category?.type === "required" && errors?.category?.message}
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
