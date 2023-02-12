import React from 'react';
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'

const SearchBox = ({ setToggleSearch }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        const search = data?.search;
        navigate(`/search/${search}`)
        reset()
        setToggleSearch(false)
    }

    return (
        <div className="absolute top-10 right-0 border p-2 bg-white shadow-md w-[350px] lg:w-[500px] rounded-lg z-10">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="flex items-center">
                <input type="text" placeholder="Search here" className="input input-bordered w-full"
                    {...register("search", {
                        required: {
                            value: true,
                            message: "Please provide something!"
                        }
                    })}
                />
                <button className="btn btn-primary text-white ml-3">Search</button>
            </form>
            {errors?.search?.type && <p className="text-center py-2 mt-1 text-red-600">{errors?.search?.message}</p>}
        </div>
    );
};

export default SearchBox;