import React, {   useState } from 'react';
import {Helmet} from "react-helmet";
import { useLoaderData , useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const MyReviewUpdate = () => {
const reviewData = useLoaderData() ;
const navigate = useNavigate() ;
 console.log(reviewData); // 2 + 2 + 2 = 6 ==> 53 
const {servicePicture , servicePrice  , _id , 
  serviceDescription , serviceName,
  reviewerRatings , feedbackMessage} = reviewData ;
const [service , setService] = useState(reviewData) ;
// console.log(service);
const handleOnchangeInputFeild = (event) =>{
const feild = event.target.name ;
const value = event.target.value ;
const newService= {...service} ;
newService[feild] = value ;
setService(newService) ;
}
const handleFormSubmit = (event) => {
event.preventDefault() ;

// https://lotus-pc-service-subrota22.vercel.app
fetch(`https://lotus-pc-service-subrota22.vercel.app/my-reviews-edit/${_id}` , {
method:"PUT" ,
headers:{
'content-type' : 'application/json' 
} ,
body:JSON.stringify(service) 
})
.then(res => res.json())
.then(data => {
// console.log(data);
if(data.modifiedCount > 0 ) {
Swal.fire({
icon:"success" ,
title:"Your review updated succsssfully !! " ,
timer: 4000 , 
})
navigate("/my-review") ;
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
<title>Update review </title>
</Helmet>
<div className='mx-6' data-aos="zoom-in">    
<div className="hero min-h-screen my-6">
<div className="hero-content flex-col lg:flex-row-reverse w-full ">
<div className="card flex-shrink-0 w-full shadow-2xl max-w-sm  md:max-w-xl bg-base-100">
<form  className="card-body w-full" onSubmit={handleFormSubmit}>
<h1 className="text-3xl font-bold text-success text-center my-2">
  Update  &nbsp;    {service.serviceName ? service.serviceName : serviceName } 
  &nbsp;   info !
  </h1>

<div className="form-control ">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" name='serviceName' defaultValue={serviceName}
onChange={handleOnchangeInputFeild} placeholder="Enter your service name"
className="input input-bordered input-success" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Picture </span>
</label>
<input type="url" name='servicePicture' defaultValue={servicePicture}  
onChange={handleOnchangeInputFeild}  placeholder="Enter service picture url"
className="input input-bordered input-success" required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Pirce</span>
</label>
<input type="text" name='servicePrice'  defaultValue={servicePrice}
onChange={handleOnchangeInputFeild}  placeholder="Enter your service price"
className="input input-bordered input-success" required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Ratings </span>
</label>
<input type="number" min="1" max="5" defaultValue={reviewerRatings}
name='reviewerRatings'  onChange={handleOnchangeInputFeild}  
placeholder="Enter service ratings"
className="input input-bordered w-full input-success" required />
</div>


<div className="form-control">
<label className="label">
<span className="label-text"> Service description </span>
</label>
<textarea min="80" max="400" defaultValue={serviceDescription} name='serviceDescription' 
onChange={handleOnchangeInputFeild}  placeholder="Enter service desciption" 
className="textarea textarea-success px-6 py-6" rows="4" required />
</div>


<div className="form-control">
<label className="label">
<span className="label-text"> Feedback messgae  </span>
</label>
<textarea min="80" max="400" id="scrollbarDesign" defaultValue={feedbackMessage} name='feedbackMessage' 
onChange={handleOnchangeInputFeild}  placeholder="Enter feedback messgae " 
className="textarea textarea-success px-6 py-6" rows="4" required />
</div>

<div className="form-control mt-6">
<button className="btn btn-success text-white "> Update review  </button>
</div>
</form>
</div>
</div>
</div> 
</div>
</>
);
};

export default MyReviewUpdate;