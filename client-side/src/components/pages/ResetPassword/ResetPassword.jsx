import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';
const ResetPassword = () => {
const {updatePassword} = useContext(AuthContext) ; 
const handleFormSubmit = (event) => {
event.preventDefault() ;
const email =  event.target.email.value ;
updatePassword(email)
.then(() => {
Swal.fire({timer:3000 , title:"Check your inbox or spam to reset your password." , icon:"success"})
})
  .catch((error) => {
    Swal.fire({timer:3000 , title:error.message  , icon:"error"})
  });
}
    return (
        <>
        <Helmet><title>Reset your password </title></Helmet>
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content justify-around flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left m-8">
      <h1 className="text-5xl font-bold">Reset password  now!</h1>
      <p className="py-6">Enter your valid email than check your inbox to reset your password.</p>
    </div>
    <form autoComplete='off' onSubmit={handleFormSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary"> Reset </button>
        </div>
      </div>
    </form>
  </div>
</div>   
        </>
    );
};

export default ResetPassword;