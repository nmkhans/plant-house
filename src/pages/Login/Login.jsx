import React from 'react';
import login from "../../assets/login.svg"
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()

    const onSubmit = (data) => {

    }

    return (
        <main className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <div className="min-h-screen">
                    <div className="hero-content flex-col lg:flex-row">
                        <div className="text-center mr-5">
                            <img className="w-[300px] lg:w-[500px] m-auto" src={login} alt="login image" />
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                            <div className="card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <h3 className="text-xl text-center text-base-200 font-semibold">Login</h3>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email" placeholder="Enter email" className="input input-bordered"
                                            {...register("email", {
                                                required: {
                                                    value: true,
                                                    message: "Email is required!"
                                                }
                                            })}
                                        />
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.email?.type === 'required' && errors?.email?.message}</p>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input
                                            type="password" placeholder="Enter password" className="input input-bordered"
                                            {...register("password", {
                                                required: {
                                                    value: true,
                                                    message: "Password is required!"
                                                }
                                            })}
                                        />
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.password?.type === 'required' && errors?.password?.message}</p>
                                        <label className="label text-center block text-sm lg:text-md">
                                            New here? <Link to="/register">Register now</Link>
                                        </label>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary text-white">Login</button>
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