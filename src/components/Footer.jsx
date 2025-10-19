import React from 'react';

const Footer = () => {
    const now = new Date();
    const thisYear = now.getFullYear();

    return (
        <div className='bg-blue-300 p-5 text-center lg:ml-40 font-light'>
            <p>© {thisYear} Admin Dashboard, All Rights Reserved.</p>
        </div>
    );
};

export default Footer;
