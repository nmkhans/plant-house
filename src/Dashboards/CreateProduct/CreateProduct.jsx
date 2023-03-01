import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreateProductMutation,
  useGetCategoriesQuery,
  useUploadImageMutation,
} from "../../redux/api/api";
import capitalize from "./../../utils/captalize";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const { data, isLoading: categoryLoading } = useGetCategoriesQuery();
  const [uploadImage] = useUploadImageMutation();
  const [createProduct] = useCreateProductMutation();

  if (categoryLoading) return "Loading...";

  const categories = data?.data;

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const {
      data: { url },
    } = await uploadImage(formData);

    const productData = {
      ...data,
      image: url,
    };

    const response = await createProduct(productData);

    if (response?.data?.success) {
      reset()
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
          Create Products
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto mt-10">
        <div className="form-control">
          <label htmlFor="name" className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter product name"
            className="input input-bordered"
            {...register("name", {
              required: {
                value: true,
                message: "Name is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.name?.type === "required" && errors?.name?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="Enter product description"
            className="input input-bordered h-[100px] p-3"
            {...register("description", {
              required: {
                value: true,
                message: "Description is required",
              },
            })}
          ></textarea>
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.description?.type === "required" &&
              errors?.description?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="category" className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            id="category"
            className="select select-bordered w-full font-normal"
            {...register("category", {
              required: {
                value: true,
                message: "Category is required!",
              },
            })}
          >
            <option disabled>Select category</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>
                {capitalize(category.name)}
              </option>
            ))}
          </select>
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.category?.type === "required" && errors?.category?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="price" className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            id="price"
            type="text"
            placeholder="Enter product price"
            className="input input-bordered"
            {...register("price", {
              required: {
                value: true,
                message: "Price is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.price?.type === "required" && errors?.price?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="image" className="label">
            <span className="label-text">Image</span>
          </label>
          <input
            id="image"
            type="file"
            className="file-input file-input-primary font-normal file-input-bordered w-full"
            {...register("image", {
              required: {
                value: true,
                message: "Image is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.image?.type === "required" && errors?.image?.message}
          </p>
        </div>

        <div className="form-control">
          <label htmlFor="stock" className="label">
            <span className="label-text">Stock</span>
          </label>
          <input
            id="stock"
            type="text"
            placeholder="Enter product stock"
            className="input input-bordered"
            {...register("stock", {
              required: {
                value: true,
                message: "Stock is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.stock?.type === "required" && errors?.stock?.message}
          </p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
