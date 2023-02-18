import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { TailSpin } from 'react-loader-spinner'
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './../../components/CartItem/CartItem';
import { useAuthUser } from 'react-auth-kit'
import { useCreateOrderMutation } from '../../redux/api/api';
import { emptyCart } from '../../redux/state/cartSlice';

const Checkout = () => {
    const cart = useSelector(state => state.cart.value)
    const subTotal = useSelector(state => state.cart.subTotal)
    const [agree, setAgree] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [createOrder, { isLoading }] = useCreateOrderMutation()
    const navigate = useNavigate()
    const auth = useAuthUser()
    const user = auth()
    const dispatch = useDispatch()

    const shipping = (subTotal / 100) * 10;

    function productList(cart) {
        const productKeys = Object.keys(cart)
        const productList = []

        productKeys.forEach(keys => {
            const product = cart[keys]
            productList.push(product)
        })

        return productList
    }


    const onSubmit = async (data) => {
        const products = productList(cart)

        const orderData = {
            ...data,
            products: products,
            payment: subTotal + shipping

        }

        const response = await createOrder(orderData)

        if (response?.data?.success) {
            dispatch(emptyCart())
            navigate("/")
            toast.success(response?.data?.message, {
                position: "bottom-center"
            })
            toast.success("Check your email for order related information", {
                position: "bottom-center"
            })
        } else {
            toast.error(response?.error?.data?.message, {
                position: "bottom-center"
            })
        }
    }

    return (
        <main className="py-5">
            <div className="container mx-auto px-5 lg:max-w-6xl">
                <div className="text-center mb-10">
                    <h3 className="text-3xl font-semibold text-base-200">Checkout</h3>
                </div>
                <div className="min-h-screen">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center w-[300px] lg:w-[500px] m-auto bg-base-300 rounded shadow p-7">
                                <div className="mb-3">
                                    <h3 className="text-xl text-base-200 font-semibold">Your order</h3>
                                </div>
                                <div className="mx-auto ">
                                    {Object.keys(cart).map(keys => <CartItem keys={keys} item={cart[keys]} />)}
                                </div>
                                <div className="divider"></div>
                                <div>
                                    <div className="text-left ml-14 font-semibold flex items-center justify-evenly text-base-200">
                                        <span>Subtotal:</span>
                                        <span>{subTotal} Taka</span>
                                    </div>
                                    <div className="text-left ml-14 mt-5 font-semibold flex items-center justify-evenly text-base-200">
                                        <span>Shipping:</span>
                                        <span>{shipping} Taka</span></div>
                                    <div className="divider"></div>
                                    <div className="text-left ml-14 font-semibold flex items-center justify-evenly text-base-200">
                                        <span>Total:</span>
                                        <span>{subTotal + shipping} Taka</span></div>
                                </div>
                                <div className="mt-5">
                                    <h3 className="text-lg text-base-200 font-semibold mb-2">Select payment method:</h3>
                                    <div className="form-control mb-2">
                                        <label className="flex items-center justify-center cursor-pointer">
                                            <input type="radio" name="paymentmethod" className="radio checked:bg-primary" value="cod" defaultChecked
                                                {...register("paymentmethod")}
                                            />
                                            <span className="label-text font-semibold pl-2">Cash on delevery</span>
                                        </label>
                                    </div>
                                    <div className="form-control mb-2">
                                        <label className="flex items-center justify-center cursor-pointer">
                                            <input type="radio" name="paymentmethod" className="radio checked:bg-primary" value="card"
                                                {...register("paymentmethod")}
                                            />
                                            <span className="label-text font-semibold pl-2">Card</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <p className="label-text">Your personal data will be used for processing your order. Do you agree with our terms and condition?</p>
                                    <div className="form-control mt-4">
                                        <label className="flex items-center justify-center cursor-pointer">
                                            <input onClick={() => setAgree(!agree)} type="checkbox" className="checkbox checkbox-primary mr-2" />
                                            <span className="label-text">Yes I agree.</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="mt-5">
                                    <button disabled={agree === false} type="submit" className="btn btn-primary text-white w-full">{isLoading ? <TailSpin
                                        height="30"
                                        width="30"
                                        color="#fff"
                                        ariaLabel="tail-spin-loading"
                                        radius="1"
                                        visible={true}
                                    /> : "Place order"}</button>
                                </div>
                            </div>
                            <div className="card flex-shrink-0 w-full max-w-lg shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <h3 className="text-xl text-center text-base-200 font-semibold">Delivery detail</h3>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input
                                            type="name" placeholder="Enter name" className="input input-bordered"
                                            defaultValue={user.name}
                                            {...register("name", {
                                                required: {
                                                    value: true,
                                                    message: "Name is required!"
                                                }
                                            })}
                                        />
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.name?.type === 'required' && errors?.name?.message}</p>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input
                                            type="email" placeholder="Enter email" className="input input-bordered"
                                            defaultValue={user.email}
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
                                            <span className="label-text">Phone</span>
                                        </label>
                                        <input
                                            type="text" placeholder="Enter phone" className="input input-bordered"
                                            defaultValue={user.phone}
                                            {...register("phone", {
                                                required: {
                                                    value: true,
                                                    message: "Phone is required!"
                                                }
                                            })}
                                        />
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.phone?.type === 'required' && errors?.phone?.message}</p>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">District</span>
                                        </label>
                                        <input
                                            type="text" placeholder="Enter district" className="input input-bordered"
                                            {...register("district", {
                                                required: {
                                                    value: true,
                                                    message: "District is required!"
                                                }
                                            })}
                                        />
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.district?.type === 'required' && errors?.district?.message}</p>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">City/Town</span>
                                        </label>
                                        <input
                                            type="text" placeholder="Enter city/Town" className="input input-bordered"
                                            {...register("city", {
                                                required: {
                                                    value: true,
                                                    message: "City is required!"
                                                }
                                            })}
                                        />
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.city?.type === 'required' && errors?.city?.message}</p>
                                    </div>

                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Address</span>
                                        </label>
                                        <textarea
                                            placeholder="Enter address" className="input input-bordered h-[80px] p-5"
                                            {...register("address", {
                                                required: {
                                                    value: true,
                                                    message: "Address is required!"
                                                }
                                            })}
                                        ></textarea>
                                        <p className="text-sm text-red-600 mt-2 ml-3">{errors?.address?.type === 'required' && errors?.address?.message}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
};

export default Checkout;