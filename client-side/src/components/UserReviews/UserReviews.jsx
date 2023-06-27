
import { FaStar } from 'react-icons/fa';
import "./UserReviews.css";
import { PhotoProvider, PhotoView } from 'react-photo-view';

import { useEffect, useState } from 'react';
import PageLoader from '../share/PageLoader/PageLoader';
const UserReviews = ({reviewId  , serviceName }) => {
const [reviews , setReviews]  = useState([]) ;
const [pageLoad , setPageLoad]  = useState(true) ;
useEffect(() => {
fetch(` https://lotus-pc-service-subrota22.vercel.app/reviews/${reviewId}`)
.then(res => res.json())
.then(data =>{
setReviews(data) ;
setPageLoad(false) ;
}) 
.catch(error => console.log(error))
} , [reviewId])
//https://i.ibb.co/Bw3wx3d/imnot.webp
if(pageLoad){
return <PageLoader></PageLoader>
}
return (
<>
{
reviews.length !== 0 &&
<h2 className='text-center font-bold text-primary text-2xl my-5'>
Total {reviews.length === 0 ? "0" : reviews.length} reviews for {serviceName}  
</h2> 
}       

{
reviews.length === 0 && <h2 className='text-primary text-center text-2xl font-bold'> 
No reviews found for this  product !!
</h2> 
}
{/* show users review  */}
<div className="userReview">
{
reviews.length !== 0 && 
reviews.map(review  => 
<div className="card w-96 bg-base-100 shadow-xl" key={review._id} data-aos="zoom-in">
<figure>
<PhotoProvider>
<PhotoView src={review.reviewerImage }>
<img src={review.reviewerImage ? review.reviewerImage : "https://i.ibb.co/7nNB7L7/images.jpg" } alt=""  className='h-72  hover:cursor-pointer  w-full rounded'/>
</PhotoView>
</PhotoProvider>
</figure>
<div className="card-body">
<h2 className="card-title">Name : {review?.reviewerName ? review?.reviewerName : "name not found"}</h2>
<h2 className="card-title">Email :{review?.reviewerEmail ? review?.reviewerEmail : "email not found"}</h2>
<p>{review?.feedbackMessage}</p>
<div className="flex">

<div className="mt-2 flex">
<FaStar className='text-yellow-400 text-xl'></FaStar>
<FaStar className='text-yellow-400 text-xl'></FaStar>
<FaStar className='text-yellow-400 text-xl'></FaStar>
<FaStar className='text-yellow-400 text-xl'></FaStar>
<FaStar className='text-yellow-400 text-xl'></FaStar>
</div>
<span className='text-xl text-white mx-3 -mt-1  btn  btn-circle btn-success'> {review.reviewerRatings}</span>
</div>
</div>
</div>
)

} </div> 
</>
);
};

export default UserReviews;