import React, { useContext } from 'react';
import {NavLink} from "react-router-dom" ;
import Swal from 'sweetalert2';
import logo from "../../../images/logo-image.png"
import { AuthContext } from '../../../UserContext/UserContext';
import './Navbar.css';
const Navbar = () => {
const {user , logOutUser , setUser} = useContext(AuthContext) ;
//handle user log out 
const handleLogOutUser = () => {
logOutUser()
.then(() => {
Swal.fire({
icon:"info" ,
title:"Your profile has been log out !!" , 
timer:4000 , 
})
setUser({}) ;
}).catch((error) => {
Swal.fire(error.message) ;
})
}
return (
<div className='mb-10' data-aos="fade-down">
<div className="navbar  pb-8 pt-3">
<div className="flex-1 flex-col sm:felx-col md:flex-row">
<NavLink to="/" className="normal-case text-xl flex "> 
<img src={logo} alt="navbar logo" className='h-14 mt-0 rounded-3xl w-14 -m-5 mx-4'/>
<h2 className='text-2xl mt-1 uppercase animate-pulse font-extrabold navTitle' > 
<span className='text-sky-400'>Lotus</span> <span className='text-success'>tech service</span> 
</h2>
</NavLink>

<ul className='mx-auto font-bold text-sky-400 navLinks'>
<li className='mx-2'><NavLink to="/">Home</NavLink></li>
<li className='mx-2'><NavLink to="/blogs">Blogs</NavLink></li>
{
user.uid && 
<>
<li className='mx-2'><NavLink to="/my-review">My review</NavLink></li>
<li className='mx-2'><NavLink to="/add-service">Add service</NavLink></li>
<li  onClick={() => handleLogOutUser()}
className='btn btn-success my-8 md:my-0 lg:-mt-2 text-white mx-8'>
Log out  
</li>
</>
}

{!user.uid && <>

<li className='mx-2'><NavLink to="/register">Register</NavLink></li>
<li className='mx-2'> <NavLink to="/login">Login</NavLink></li> 
</>}
{/* <li> <button className="btn btn-success mt-0 w-36">Log out </button> </li> */}
</ul>

</div>

{    user.uid && 
<div className="flex-none gap-2">
<div className="dropdown dropdown-end">
<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
<div className="w-10 rounded-full">
<img src={user.photoURL ? user.photoURL : "https://i.ibb.co/Pwh4tt1/noimgs.png"}  alt='user profile'/>
</div>
</label>
<ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
<li>
<NavLink to="/" className="justify-between">
Profile
<span className="badge">New</span>
</NavLink>
</li>
<li><NavLink to="/">Settings</NavLink></li>
<li onClick={handleLogOutUser}> <button>Logout</button> </li>
</ul>
</div>
</div>
}
</div>  
</div>
);
};

export default Navbar;