import React from 'react';

const SubmissionModal = ({ edit }) => {
    const { fullname, _id } = edit
    const hendleSubmit = (event) => {
        event.preventDefault()
        const name = event.target.fullname.value
        console.log(name);
    }
    return (
        <div>

            <input type="checkbox" id="submission-modal" className="modal-toggle" />

            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label for="submission-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg ">Editing bill of Mr.{fullname} ID: {_id} </h3>

                    <form onSubmit={hendleSubmit}>
                        <input name='fullname' type="text" placeholder="Full Name" className="input input-bordered w-full max-w-xs m-1" />
                        <input type="email" placeholder="Email" className="input input-bordered w-full max-w-xs m-1" />
                        <input type="number" placeholder="Phone" className="input input-bordered w-full max-w-xs m-1" />
                        <input type="number" placeholder="Paid Amount" className="input input-bordered w-full max-w-xs m-1" />

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