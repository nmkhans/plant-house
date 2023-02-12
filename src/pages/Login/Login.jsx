import React from 'react';
import login from "../../assets/login.svg"
import { Link } from 'react-router-dom';

const Login = () => {
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
                                <h3 className="text-xl text-center text-base-200 font-semibold">Login</h3>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="text" placeholder="password" className="input input-bordered" />
                                    <label className="label text-center block text-sm lg:text-md">
                                        New here? <Link to="/register">Register now</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary text-white">Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;