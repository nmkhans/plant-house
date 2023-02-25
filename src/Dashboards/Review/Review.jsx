import React from "react";

const Review = () => {
  return (
    <div className="p-5">
      <div>
        <h3 className="text-2xl font-semibold text-base-200">
         Add Review
        </h3>
      </div>
      <form  className="w-3/4 mx-auto mt-10">
        {/* <div className="form-control">
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
        </div> */}
        <div className="form-control mt-6">
          <button className="btn btn-primary text-white">Add</button>
        </div>
      </form>
    </div>
  );
};

export default Review;
