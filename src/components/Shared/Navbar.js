import React from 'react';
import logo from '../../assets/logo.png'

const Navbar = () => {
    return (
        <div className="navbar bg-neutral text-neutral-content justify-between">
            <img className='w-24 h-24 ' src={logo} alt="" />
            <h5 className='px-6 text-2xl font-semibold'>Paid Total: <span> 000</span></h5>
        </div>
    );
};

export default Navbar;