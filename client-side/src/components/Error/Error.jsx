import React from 'react';
import { NavLink } from 'react-router-dom';

const Error = () => {
    return (
        <div>
            <h2 className='text-3xl font-bold text-center text-white my-6'>
                 Page not found !
                 <NavLink to="/" className="text-info"> Go to home page </NavLink>
                  </h2>
            
            <img src="https://i.ibb.co/br749F7/404.webp"  style={{width:"100%" , height:"100%"}} alt="page not found"/>
        </div>
    );
};

export default Error;