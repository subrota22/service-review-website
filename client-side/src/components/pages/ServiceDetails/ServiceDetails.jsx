
import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { NavLink, useLoaderData, useNavigate } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';
import UserReviews from '../../UserReviews/UserReviews';
const ServiceDetails = () => {
const {user} = useContext(AuthContext) ;
const ServiceDetailsInformation = useLoaderData() ;
const [review , setReview] = useState(ServiceDetailsInformation) ;
const navigate = useNavigate() ;
//display service information
const {
serviceName , serviceDescription , servicePicture , 
servicePrice , serviceRating 
} = review;
//recive  reviewer information from firebase and input feild 
const insertReviewInformation = {
reviewId :review._id  ,
reviewerName:user.displayName ? user.displayName : review.reviewerName, 
reviewerImage:user.photoURL ? user.photoURL : review.reviewerImage,
reviewerEmail:user.email ? user.email : review.reviewerEmail ,
reviewerRatings:review.reviewerRatings ,
feedbackMessage:review.feedbackMessage ,
servicePicture:servicePicture ,
serviceName:serviceName ,
servicePrice:servicePrice ,
serviceDescription:serviceDescription ,
time : new Date().toLocaleTimeString() , 
}
//get input feild value 
const handleInputFeild = (event) => {
const name = event.target.name ;
const value = event.target.value ;
const newReview = {...review} ;
newReview[name] = value ;
setReview(newReview) ;
}
//post review data
const handleReviewForm = (event) => {
event.preventDefault() ;
fetch(` https://lotus-pc-service-subrota22.vercel.app/reviews` , {
method:"POST" ,
headers:{
'content-type' : 'application/json'
} ,
body:JSON.stringify(insertReviewInformation) 
}).then(res => res.json())
.then(data => {
if(data.insertedId){
Swal.fire({
icon:"success" ,
title: "Welldone your review added successfully !! " ,
timer:4000 , 
})
event.target.reset() ;
navigate(`/services-details/${review._id}`)
}
})
.catch((error) => {
Swal.fire({
icon:"error" ,
title: error ,
timer:4000 , 
})   
})
}
//
return (
<>
<Helmet>
<meta charSet='utf-8'/>
<title>Service details </title>
</Helmet>
<div className="mx-6 my-10 " data-aos="zoom-in">
{/* show service details Information */}
<div className="hero min-h-screen px-4 bg-base-200 rounded-lg">
<div className="hero-content flex-col lg:flex-row">
<PhotoProvider>
<PhotoView  src={servicePicture}>
<img src={servicePicture} alt='' className="max-w-sm h-96 hover:cursor-pointer rounded-lg shadow-2xl" />
</PhotoView>
</PhotoProvider>
<div>
<h2 className="text-5xl font-bold"> 

<Typewriter
words={[serviceName , "now your problem will be solve" , "by" , serviceName]}
loop={Infinity}
cursor
cursorStyle='_'
typeSpeed={80}
deleteSpeed={60}
delaySpeed={2000}
/>
</h2>
<p className="py-6">{serviceDescription}</p>
<div className="flex justify-evenly px-6">
<p className='text-2xl font-bold text-gray-500 py-3'> Price: ${servicePrice}</p>
<p className="flex justify-evenly px-6 py-3">
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<p className='text-xl font-bold mx-2 btn btn-circle -mt-2'>  {serviceRating}</p>
</p>
</div>

<div className="text-center">
{
user.uid ? 
<label className="btn btn-success  text-white w-40 shadow-lg"  htmlFor="add-review-6"> 
Add to review 
</label>
:
<>
<div className="my-4">
<span className='text-xl font-bold  text-gray-400'>Please login to add a review </span>
<NavLink to="/login">
<button className="btn btn-success text-white w-40"> Login now </button>
</NavLink>
</div>
</>  
}
</div>
</div>
</div>
</div>
</div>
{/* add a review data from user by the modal form  */}
<input type="checkbox" id="add-review-6" className="modal-toggle" />
<div className="modal modal-bottom sm:modal-middle">
<div className="modal-box">
<div className="hero min-h-screen ">
<div className="hero-content flex-col">
<div className="card flex-shrink-0  bg-base-100">
<form className="card-body" onSubmit={handleReviewForm}>
<h1 className="text-2xl font-bold text-primary "> Add to review !</h1>
<div className="form-control">
<label className="label">
<span className="label-text">Name</span>
</label>
<input type="text" name='reviewerName' defaultValue={user.displayName} 
onChange={handleInputFeild} placeholder="Enter your name"
className="input input-bordered input-primary w-80" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Profile Picture </span>
</label>
<input type="url"  name='reviewerImage' defaultValue={user.photoURL} 
onChange={handleInputFeild} placeholder="Enter your profile picture"
className="input input-bordered input-primary"  required/>
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Email</span>
</label>
<input type="text"  name='reviewerEmail'  defaultValue={user.email}  
onChange={handleInputFeild} placeholder="Enter your email"
className="input input-bordered input-primary" required />
</div>
<div className="form-control">
<label className="label">
<span className="label-text">Ratings </span>
</label>
<input type="number" name='reviewerRatings'  onChange={handleInputFeild} 
placeholder="Enter your ratings" className="input input-bordered input-primary"
min="2" max="5"  required/>
</div>

<div className="form-control">
<label className="label">
<span className="label-text"> Feedback message  </span>
</label>
<textarea  name='feedbackMessage' id='scrollbarDesign'  onChange={handleInputFeild} 
placeholder="Enter some feedback message" min="40" max="300"
className="textarea textarea-primary"  required/>
</div>

<div className="form-control mt-6">
<button className="btn btn-success text-white">Add review</button>
</div>
</form>
</div>
</div>
</div>
</div>
<div className="modal-action mx-16">
<label htmlFor="add-review-6" className="btn btn-info w-40 text-white"> Close </label>
</div>
</div>

{/* show users review  */}
<UserReviews serviceName={serviceName}  reviewId={review._id}></UserReviews>
</>
);
};

export default ServiceDetails;