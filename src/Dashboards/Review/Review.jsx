import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  useAddReviewMutation,
  useGetSingleOrderQuery,
} from "../../redux/api/api";
import { useForm } from "react-hook-form";
import StarRatings from "react-star-ratings";
import { useAuthUser } from "react-auth-kit";
import toast from "react-hot-toast";

const Review = () => {
  const auth = useAuthUser();
  const user = auth();
  const [rating, setRating] = useState(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { id } = useParams();
  const { data, isLoading: orderDataLoading } = useGetSingleOrderQuery(id);
  const [addReview] = useAddReviewMutation();

  if (orderDataLoading) return "Loading...";

  const orderInfo = data?.data[0];

  const handleRating = (rate) => {
    setRating(rate);
  };

  const onSubmit = async (data) => {
    const ratingData = {
      ...data,
      _id: orderInfo._id,
      products: orderInfo.products,
      name: orderInfo.name,
      email: orderInfo.email,
      image: user.image,
      rating: rating,
    };

    const response = await addReview(ratingData);
    console.log(response);

    if (response?.data?.success) {
      reset();
      setRating(0)
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
        <h3 className="text-2xl font-semibold text-base-200">Add Review</h3>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="w-3/4 mx-auto mt-10">
        <div className="form-control">
          <label htmlFor="review" className="label">
            <span className="label-text text-xl font-semibold text-slate-500">
              Leave a rating
            </span>
          </label>
          <StarRatings
            rating={rating}
            starRatedColor="#8abe53"
            starHoverColor="#f6c912"
            changeRating={handleRating}
            numberOfStars={5}
            starDimension="35px"
            name="rating"
          />
        </div>

        <div className="form-control">
          <label htmlFor="description" className="label">
            <span className="label-text text-xl font-semibold text-slate-500">
              Write review
            </span>
          </label>
          <textarea
            id="description"
            type="text"
            placeholder="Write your review"
            className="input input-bordered h-[150px] p-3"
            {...register("description", {
              required: {
                value: true,
                message: "description name is required!",
              },
            })}
          ></textarea>
          <p className="mt-3 text-[13px] text-red-500">
            {errors?.description?.type === "required" &&
              errors?.description?.message}
          </p>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
