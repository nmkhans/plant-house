import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useGetSingleProductQuery, useRestockProductMutation } from '../../redux/api/api';

const RestockModal = ({ id }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const { data, isLoading } = useGetSingleProductQuery(id)
    const [restockProduct] = useRestockProductMutation()
    const buttonRef = useRef(null)

    if (isLoading) return "Loading..."

    const prevStock = data?.data[0]?.stock;


    const onSubmit = async ({ amount }) => {

        const response = await restockProduct({ id, amount })
        console.log(response)
        buttonRef.current.click()
    }

    return (
        <div>
            <input type="checkbox" id="restock-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label ref={buttonRef} htmlFor="restock-modal" className="btn btn-primary text-white font-bold btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className=" text-primary text-lg text-center font-bold mb-3">Restock product name</h3>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="text"
                            placeholder="Enter amount"
                            className="input input-bordered w-full"
                            {...register("amount", {
                                required: {
                                    value: true,
                                    message: "Amount is required!"
                                },
                                min: {
                                    value: 1,
                                    message: "Amount has to be 1 or more"
                                }
                            })}
                        />
                        <p className="text-red-500 mt-3 text-center">{errors?.amount?.type === "required" && errors?.amount?.message}</p>
                        <p className="text-red-500 mt-3 text-center">{errors?.amount?.type === "min" && errors?.amount?.message}</p>
                        <button className="btn btn-primary text-white w-full mt-4" type="submit">Restock</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestockModal;