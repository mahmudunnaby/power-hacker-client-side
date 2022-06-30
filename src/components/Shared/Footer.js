import React from 'react';
import logo from '../../assets/logo.png'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-neutral text-primary-content">
            <div>
                <img className='w-36 h-36' src={logo} alt="" />
                <p className="font-bold">
                    Power-Hack. <br /> Brightening up your life
                </p>
                <p>Copyright © 2022 - All right reserved</p>
            </div>
        </footer>
    );
};

export default Footer;