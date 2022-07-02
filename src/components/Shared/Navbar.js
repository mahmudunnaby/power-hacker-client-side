import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo.png'
import { useQuery } from 'react-query';
import Loading from './Loading';
const Navbar = () => {

    const [total, setTotal] = useState([])
    // const [amounts, setAmounts] = useState([])

    // useEffect(() => {
    //     fetch('http://localhost:5000/billing-list')
    //         .then(res => res.json())
    //         .then(data => setAmounts(data))
    // }, [])

    const { isLoading, error, data: amounts, } = useQuery('amounts', () =>
        fetch('http://localhost:5000/billing-list').then(res =>
            res.json()
        ),
        {
            refetchInterval: 6000,
        }

    )

    useEffect(() => {
        let s = 0;
        for (const amount of amounts) {
            s += parseInt(amount?.paid)
        }
        setTotal(s)
    }, [amounts])




    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="navbar bg-neutral text-neutral-content justify-between">
            <img className='w-24 h-24 ' src={logo} alt="" />
            <h5 className='px-6 text-2xl font-semibold'>Paid Total: <span> {total} </span></h5>

        </div>

    );
};

export default Navbar;