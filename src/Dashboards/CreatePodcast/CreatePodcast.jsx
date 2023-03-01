import React from "react";
import { useForm } from "react-hook-form";
import {
  useCreatePodcastMutation,
} from "../../redux/api/api";
import toast from "react-hot-toast";
import uploadImageFetch from './../../utils/uploadImage';

const CreatePodcast = () => {
  const [createPodcast] = useCreatePodcastMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const imageUrl = await uploadImageFetch(formData);

    const podcastData = {
      ...data,
      image: imageUrl?.data?.url,
    };

    const response = await createPodcast(podcastData);

    if (response?.data?.success) {
      reset();
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
          Create Podcasts
        </h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto mt-10">
        <div className="form-control">
          <label htmlFor="title" className="label">
            <span className="label-text">Title</span>
          </label>
          <input
            id="title"
            type="text"
            placeholder="Enter podcast name"
            className="input input-bordered"
            {...register("title", {
              required: {
                value: true,
                message: "Title is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.title?.type === "required" && errors?.title?.message}
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
          <label htmlFor="link" className="label">
            <span className="label-text">Link</span>
          </label>
          <input
            id="link"
            type="text"
            placeholder="Enter podcast link"
            className="input input-bordered"
            {...register("link", {
              required: {
                value: true,
                message: "Link is required!",
              },
            })}
          />
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.link?.type === "required" && errors?.link?.message}
          </p>
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Add</button>
        </div>
      </form>
    </div>
  );
};

export default CreatePodcast;
