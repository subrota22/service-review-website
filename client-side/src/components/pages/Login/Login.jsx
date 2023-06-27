import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import {FcGoogle} from "react-icons/fc" ;
import Swal from 'sweetalert2'
import {FaGithub} from "react-icons/fa" ;
import { AuthContext } from '../../../UserContext/UserContext';
import {Helmet} from "react-helmet";
import { authToken } from '../../../authToken/authToke';
const Login = () => {
const [user , setUser] = useState({}) ;
const {loginUser  , logInWithGoogle , logInWithGithub } = useContext(AuthContext) ;
const location = useLocation() ;
const from = location?.state?.from?.pathname || '/' ;
const navigate = useNavigate() ; 
const handleOnchangeInputFeild = (event) =>{
const feild = event.target.name ;
const value = event.target.value ;
const newUser = {...user} ;
newUser[feild] = value ;
setUser(newUser) ;
}
const handleFormSubmit = (event) => {
event.preventDefault() ;
loginUser(user.email , user.password)
.then((result) => {
authToken(result.user.email) ; //generate a new token 
Swal.fire({
icon:"success" , 
title: "Your are login successfully" , 
timer:4000 , 
})
event.target.reset() ;
navigate(from , {replace:true}) ;
})
.catch((error) =>{
Swal.fire({
icon:"error" ,
title:error.message ,
timer:4000 , 
})
})
}
//handle google login
const handleGoogleLogin = () => {
logInWithGoogle()
.then((result) => {
authToken(result.user.email) ;
Swal.fire({
icon:"success" ,
title:"You are login successfully with google !!" ,
timer: 4000 , 
})
navigate(from , {replace:true}) ; //state replace
})
.catch((error) =>{
Swal.fire({
    icon:"error" ,
    title:error.message ,
    timer: 4000 , 
    })
})

}
//handle gitHub login
const handleGitHubLogin = () => {
logInWithGithub()
.then((result) => {
authToken(result.user.email) ; //generate a new token 
Swal.fire({
icon:"success" ,
title:"You are login successfully with Github !!" ,
timer: 4000 , 
})
navigate(from , {replace:true}) ;
}).catch((error) =>{
    Swal.fire({
        icon:"error" ,
        title:error.message ,
        timer: 4000 , 
        })
    })
}
return (
<>
<Helmet>
<meta charSet="utf-8" />
<title>Login page </title>
</Helmet>
<div className="hero min-h-screen" data-aos="zoom-in">
<div className="hero-content flex-col lg:flex-row-reverse w-full ">
<div className="card flex-shrink-2 w-full  shadow-2xl max-w-lg bg-base-100">
<form  className="card-body w-full" onSubmit={handleFormSubmit}>
<h1 className="text-4xl font-bold text-sky-400 text-center my-2">Login now !</h1>
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="text" name='email'  onChange={handleOnchangeInputFeild}  
placeholder="Please enter your email" className="input input-bordered input-primary" required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Password</span>
</label>
<input type="password" name='password'  onChange={handleOnchangeInputFeild} 
 placeholder="Please enter your password" className="input input-bordered input-primary" required/>

</div>
<div className="form-control mt-2">
<button className="btn btn-primary text-white">Login</button>
</div>
<p className='font-bold text-primary text-center'>
   ----------- Or sign in with   -----------
</p>
<div className="btn btn-success text-white flex justify-between" onClick={handleGoogleLogin}>
<p>  Google </p>
<FcGoogle className='text-3xl'></FcGoogle>
</div>
<div className="btn btn-success text-white flex justify-between" onClick={handleGitHubLogin}>
<p>  Github </p>
<FaGithub className='text-3xl'></FaGithub>
</div>

<label className="flex mt-6">
<span> Have no account? </span>
<NavLink to="/register">
Register now 
</NavLink>
</label>
<label className="flex mt-6">
<span> If you forgot password please click on ? </span>
<NavLink to="/reset-password">
Reset password
</NavLink>
</label>
</form>
</div>
</div>
</div> 
</>
);
};

export default Login;