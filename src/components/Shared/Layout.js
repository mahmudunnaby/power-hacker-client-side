import React, { useState } from 'react';
import { useQuery } from 'react-query';
import styles from './Layout.css'
import Loading from './Loading';
import SubmissionModal from './SubmissionModal';
import Table from './Table';

const Layout = () => {

    const [edit, setEdit] = useState(null)

    const { isLoading, error, data: bills } = useQuery('bills', () =>
        fetch('bill.json').then(res =>
            res.json()
        )
    )


    if (isLoading) {
        return <Loading></Loading>
    }
    console.log(bills);
    return (
        <div className='container mx-auto p-10'>

            <div className=' alignment-second bg-slate-600 py-2 rounded-2xl'>
                <div className='alignment'>
                    <h5 className='self-cente mx-4 font-semibold text-white'>Billing</h5>
                    <input type="text" placeholder="Search" className="input input-bordered input-info w-full max-w-xs" />
                </div>
                <button className="btn btn-xs mx-4 btn-success">Add New Bill</button>
            </div>

            <div className="overflow-x-auto mt-4">
                <Table key={bills._id} bills={bills} setEdit={setEdit} ></Table>
            </div>
            {edit && <SubmissionModal edit={edit} ></SubmissionModal>}
        </div>
    );
};

export default Layout;