import React from 'react';

const Table = ({ bills, setBills, setEdit }) => {
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this item ?')
        if (proceed) {
            console.log(id, 'delete')
            const url = `http://localhost:5000/delete-billing/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remaining = bills.filter(bill => bill._id !== id)
                        setBills(remaining)
                    }
                })
        }
    }
    return (
        <table className="table table-compact w-full">
            <thead>
                <tr>
                    <th>Billing ID</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Paid Amount</th>
                    <th>Action</th>

                </tr>
            </thead>
            <tbody>
                {
                    bills.map(bill => {
                        return <tr key={bill._id} >
                            <td>{bill._id}</td>
                            <td>{bill.fullname}</td>
                            <td>{bill.email}</td>
                            <td>{bill.phone}</td>
                            <td>{bill.paid}</td>
                            <td><label onClick={() => setEdit(bill)} for="submission-modal" class="btn btn-xs mx-2">Edit</label>
                                <button onClick={() => handleDelete(bill._id)} class="btn btn-xs mx-2 btn-outline btn-error">Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
        </table >

    );
};

export default Table;