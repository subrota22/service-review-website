import React, {   useState } from 'react';
import {Helmet} from "react-helmet";
import Swal from 'sweetalert2';
import "./AddServices.css" ;
const Register = () => {
const [service , setService] = useState({}) ;
const handleOnchangeInputFeild = (event) =>{
const feild = event.target.name ;
const value = event.target.value ;
const newService= {...service} ;
newService[feild] = value ;
setService(newService) ;
}
const handleFormSubmit = (event) => {
event.preventDefault() ;
fetch(` https://lotus-pc-service-subrota22.vercel.app/services` , {
method:"POST" ,
headers:{
'content-type' : 'application/json' 
} ,
body:JSON.stringify(service) 
})
.then(res => res.json())
.then(data => {
console.log(data);
if(data.insertedId) {
Swal.fire({
icon:"success" ,
title:"Your service added succsssfully !! " ,
timer: 4000 , 
})
event.target.reset() ;
}
} )
.catch((error) => {
Swal.fire({
icon:"error" ,
title:error ,
timer: 4000 , 
})
})
}

return (
<>
<Helmet>
<meta charSet="utf-8" />
<title>Add service </title>
</Helmet>
<div className="hero min-h-screen bg-base-10"  data-aos="fade-left" data-aos-delay="100">
<div className="hero-content flex-col lg:flex-row-reverse w-full ">
<div className="card flex-shrink-0 w-full shadow-2xl max-w-sm  md:max-w-xl bg-base-100">
<form  className="card-body w-full" onSubmit={handleFormSubmit}>
<h1 className="text-4xl font-bold text-success text-center my-2">Add new service  !</h1>

<div className="form-control ">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" name='serviceName' onChange={handleOnchangeInputFeild} placeholder="Enter your service name" className="input input-bordered input-success" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Picture </span>
</label>
<input type="url" name='servicePicture'  onChange={handleOnchangeInputFeild}  placeholder="Enter service picture url" className="input input-bordered input-success" required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Pirce</span>
</label>
<input type="text" name='servicePrice'  onChange={handleOnchangeInputFeild}  placeholder="Enter your service price" className="input input-bordered input-success" required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Ratings </span>
</label>
<input type="number" min="1" max="5" name='serviceRating'  onChange={handleOnchangeInputFeild}  placeholder="Enter service ratings" className="input input-bordered w-full input-success" required />
</div>


<div className="form-control">
<label className="label">
<span className="label-text"> Service description </span>
</label>
<textarea min="80" max="400" id='scrollbarDesign' name='serviceDescription'  onChange={handleOnchangeInputFeild}  placeholder="Enter service desciption" className="textarea textarea-success px-6 py-6" rows="4" required />
</div>


<div className="form-control mt-6">
<button className="btn btn-success text-white ">Add service </button>
</div>

</form>
</div>
</div>
</div> 
</>
);
};

export default Register;