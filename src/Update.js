import React from 'react';
import { useForm } from 'react-hook-form';


const Update = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();

    const handleUpdateData = (data) => {
        console.log(data);
        const userInfo = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            hobby: data.hobby

        }
        console.log(userInfo);
        return (
            <div>
                <div className='h-[700px] flex justify-center items-center '>
                    <div className='w-96 p-8 border'>
                        <h2 className='text-2xl mb-10 text-center'>Save Your Info</h2>
                        <form onSubmit={handleSubmit(handleUpdateData)}>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Name</span></label>
                                <input type="text"
                                    {...register("name", { required: 'Name is required' })}
                                    className="input input-bordered w-full max-w-xs" placeholder='Name' />
                                {errors.name && <p className='text-red-600 text-sm' role="alert">{errors.name?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Email</span></label>
                                <input type="email"
                                    {...register("email", { required: 'Email is required' })}
                                    className="input input-bordered w-full max-w-xs" placeholder='Email' />
                                {errors.email && <p className='text-red-600 text-sm' role="alert">{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Phone Number</span></label>
                                <input type="number"
                                    {...register("phone", { required: 'Mobile number is required' })}
                                    className="input input-bordered w-full max-w-xs" placeholder='mobile' />
                                {errors.mobile && <p className='text-red-600 text-sm' role="alert">{errors.mobile?.message}</p>}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label"><span className="label-text">Hobby</span></label>
                                <input type="text"
                                    {...register("hobby", { required: 'Hobby is required' })}
                                    className="input input-bordered w-full max-w-xs" placeholder='hobby' />
                                {errors.hobby && <p className='text-red-600 text-sm' role="alert">{errors.hobby?.message}</p>}
                            </div>
                            <input className='btn btn-accent w-full max-w-xs my-5' value='Save' type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        );
    };
}
export default Update;