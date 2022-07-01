import React from 'react';
import { useForm } from 'react-hook-form';

const SubmissionModal = ({ edit }) => {

    const { fullname, _id } = edit
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
    }
    return (
        <div>

            <input type="checkbox" id="submission-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="submission-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    {fullname ? <h3 className="font-bold text-lg ">Editing bill of Mr.{fullname} ID: {_id} </h3> : <h3 className="font-bold text-lg ">Add New Bill </h3>}
                    {/* <h3 className="font-bold text-lg ">Editing bill of Mr.{fullname} ID: {_id} </h3> */}

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <input name='fullname' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs m-1" />

                        <input
                            {...register("email", {
                                required: {
                                    value: true,
                                    message: 'Email is required'
                                },
                                pattern: {
                                    value: /^\S+@\S+\.\S+$/,
                                    message: 'Please provide a valid email'
                                }
                            })}
                            name='email' type="email" placeholder="Email" className="input input-bordered w-full max-w-xs m-1" />
                        <label className="label  flex justify-center">
                            {errors.email?.type === 'required' && <span className="label-text-alt text-center text-red-600">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span className="label-text-alt text-center text-red-600">{errors.email.message}</span>}
                        </label>

                        <input
                            {...register("phone", {
                                required: {
                                    value: true,
                                    message: 'Phone Number is required'
                                },
                                minLength: {
                                    value: 11,
                                    message: '11 characters'
                                }
                            })}
                            name='phone' type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs m-1" />
                        <label className="label flex justify-center">
                            {errors.phone?.type === 'required' && <span className="label-text-alt  text-red-600">{errors.phone.message}</span>}
                            {errors.phone?.type === 'minLength' && <span className="label-text-alt  text-red-600">{errors.phone.message}</span>}
                        </label>
                        <input name='amount' type="number" placeholder="Paid Amount" required className="input input-bordered w-full max-w-xs m-1" />

                        <div className="flex justify-center">
                            <input type="submit" value='submit' className='btn btn-outline btn-success mt-1' />
                        </div>
                    </form>
                </div>
            </div>

        </div >
    );
};

export default SubmissionModal;