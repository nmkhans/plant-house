import React from "react";
import login from "../../assets/login.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useSignIn } from "react-auth-kit";
import { useLoginUserMutation } from "../../redux/api/api";
import { TailSpin } from "react-loader-spinner";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const signIn = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const response = await loginUser(data);

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
  };

  return (
    <main className="py-5">
      <div className="container mx-auto px-5 lg:max-w-6xl">
        <div className="min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center mr-5">
              <img
                className="w-[300px] lg:w-[500px] m-auto"
                src={login}
                alt="login image"
              />
            </div>
            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <h3 className="text-xl text-center text-base-200 font-semibold">
                    Login
                  </h3>
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
                    <label className="label text-center block text-sm lg:text-md">
                      New here? <Link to="/register">Register now</Link>
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
                        "Login"
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

export default Login;
