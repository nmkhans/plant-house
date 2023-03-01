import React from "react";
import registerImg from "../../assets/register.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSignIn } from "react-auth-kit";
import { useRegisterUserMutation } from "../../redux/api/api";
import { TailSpin } from "react-loader-spinner";
import uploadImageFetch from "./../../utils/uploadImage";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [registerUser, { isLoading }] = useRegisterUserMutation();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.password === data.cPassword) {
      const image = data.image[0];
      const formData = new FormData();
      formData.append("image", image);

      const imageUrl = await uploadImageFetch(formData);

      const userData = {
        ...data,
        image: imageUrl?.data?.url,
      };

      const response = await registerUser(userData);

      if (response?.data?.success) {
        signIn({
          token: response.data.token,
          expiresIn: 3600,
          tokenType: "Bearer",
          authState: response.data.data,
        });
        navigate("/");
        toast.success(response?.data?.message, {
          position: "bottom-center",
        });
      } else {
        toast.error(response?.error?.data?.message, {
          position: "bottom-center",
        });
      }
    } else {
      toast.error("Your password and confirm password didn't matched!", {
        position: "bottom-center",
      });
    }
  };

  return (
    <main className="py-5">
      <div className="container mx-auto px-5 lg:max-w-6xl">
        <div className="min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center mr-5">
              <img
                className="w-[300px] lg:w-[500px] m-auto"
                src={registerImg}
                alt="register image"
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="text-xl text-center text-base-200 font-semibold">
                    Register
                  </h3>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="Enter name"
                      className="input input-bordered"
                      {...register("name", {
                        required: {
                          value: true,
                          message: "Name is required!",
                        },
                      })}
                    />
                    <p className="text-sm text-red-600 mt-2 ml-3">
                      {errors?.name?.type === "required" &&
                        errors?.name?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="Enter email"
                      className="input input-bordered"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is required!",
                        },
                      })}
                    />
                    <p className="text-sm text-red-600 mt-2 ml-3">
                      {errors?.email?.type === "required" &&
                        errors?.email?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Phone</span>
                    </label>
                    <input
                      type="number"
                      placeholder="Enter number"
                      className="input input-bordered"
                      {...register("phone", {
                        required: {
                          value: true,
                          message: "Number is required!",
                        },
                      })}
                    />
                    <p className="text-sm text-red-600 mt-2 ml-3">
                      {errors?.phone?.type === "required" &&
                        errors?.phone?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Image</span>
                    </label>
                    <input
                      type="file"
                      className="input input-bordered p-2"
                      {...register("image", {
                        required: {
                          value: true,
                          message: "Image is required!",
                        },
                      })}
                    />
                    <p className="text-sm text-red-600 mt-2 ml-3">
                      {errors?.image?.type === "required" &&
                        errors?.image?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="input input-bordered"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is required!",
                        },
                      })}
                    />
                    <p className="text-sm text-red-600 mt-2 ml-3">
                      {errors?.password?.type === "required" &&
                        errors?.password?.message}
                    </p>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Confirm password</span>
                    </label>
                    <input
                      type="password"
                      placeholder="Confirm password"
                      className="input input-bordered"
                      {...register("cPassword", {
                        required: {
                          value: true,
                          message: "Password is required!",
                        },
                      })}
                    />
                    <p className="text-sm text-red-600 mt-2 ml-3">
                      {errors?.cPassword?.type === "required" &&
                        errors?.cPassword?.message}
                    </p>
                    <label className="label text-center block text-sm lg:text-md">
                      Already have account? <Link to="/login">Login now</Link>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary text-white">
                      {isLoading ? (
                        <TailSpin
                          height="30"
                          width="30"
                          color="#fff"
                          ariaLabel="tail-spin-loading"
                          radius="1"
                          visible={true}
                        />
                      ) : (
                        "Register"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Register;
