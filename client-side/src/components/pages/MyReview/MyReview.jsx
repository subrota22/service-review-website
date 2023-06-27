import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaEdit, FaStar, FaTrash } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../../../UserContext/UserContext';
import PageLoader from '../../share/PageLoader/PageLoader';
import "./MyReview.css" ;
const MyReview = () => {
const {user , logOutUser , setUser} = useContext(AuthContext) ;
const navigate = useNavigate() ;

// get my reviews 
const {data:allReview = [] , isLoading , refetch} = useQuery({
  queryFn: () => fetch(` https://lotus-pc-service-subrota22.vercel.app/my-reviews?email=${user.email}` , {
    headers : {
      authorization : `Bearer ${localStorage.getItem('lotus-pc-token')}` ,
      }
  }) 
  .then(res => {
    if(res.status === 401 || res.status === 403 ) {
      logOutUser().then(() => {
      Swal.fire({
      icon:"info" ,
      title:"Your profile has been log out !!" , 
      timer:4000 , 
      })
      setUser({}) ;
      navigate("/login") 
      }).catch((error) => {
      Swal.fire(error.message) ;
      })
      }
      return res.json() ;
  })
  .then(data => data ) 
  .catch(error => console.log(error))
  })

// handle review delete
const handleReviewDelete = (deleteId) =>{
//delete conform message
const swalWithBootstrapButtons = Swal.mixin({
customClass: {
confirmButton: 'btn btn-success',
cancelButton: 'btn btn-danger'
},
buttonsStyling: false
})

swalWithBootstrapButtons.fire({
title: 'Are you sure?',
text: "You won't be able to revert this!",
icon: 'warning',
showCancelButton: true,
confirmButtonText: 'Yes, delete it!',
cancelButtonText: 'No, cancel!',
reverseButtons: true
}).then((result) => {
if (result.isConfirmed) {
//delete review data from here 
fetch(` https://lotus-pc-service-subrota22.vercel.app/my-reviews-delete/${deleteId}` , {
method:"DELETE" , 
}).then(res => res.json())
.then(data => {
if(data.deletedCount > 0){
refetch() ;
}
})
.catch(error => console.log(error))
swalWithBootstrapButtons.fire(
{
  timer:4000 ,
  icon:"success" ,
  title:"Your data is deleted successfully !! " 
}
)
} else if (
/* Read more about handling dismissals below */
result.dismiss === Swal.DismissReason.cancel
) {
swalWithBootstrapButtons.fire(
'Cancelled',
'Your imaginary file is safe :)',
'error'
)
}
})
}
  
if(isLoading) {
return <PageLoader></PageLoader>
}
return (
<>     
<Helmet>
<title>My review </title>
</Helmet>
{
allReview?.length === 0 && 
<div className="text-center my-48">
<p className='text-primary  text-center text-2xl font-bold'>
No reviews were added till now !!
</p>
</div>
}
<div className='myReview'>
{  
allReview.length !== 0 && 
allReview.map(review => 
<div key={review._id} className="card w-96  bg-base-100 shadow-xl" data-aos="zoom-in">
<figure>
<PhotoProvider>
  <PhotoView src={review.servicePicture ? review.servicePicture : "https://i.ibb.co/Pwh4tt1/noimgs.png"} >
  <img src={review.servicePicture ? review.servicePicture : "https://i.ibb.co/Pwh4tt1/noimgs.png"} className="h-80 rounded-md" alt="review" />
  </PhotoView>
</PhotoProvider>
</figure>
<div className="card-body">
<h2 className="card-title">
{review.serviceName ?review.serviceName : "service name not found" }
</h2>
<h2 className="card-title">
{review.servicePrice ? "Price : $" + (review.servicePrice) : "service price not found"}
</h2>
<p>{review?.serviceDescription?.length > 20 ? review?.serviceDescription.slice(0 , 120) + "..." : review?.serviceDescription }</p>
</div>
<div className="flex justify-between px-6">
<p className="flex justify-evenly px-6 py-3">
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<p className='text-xl font-bold -mt-3 text-white mx-2 btn btn-circle btn-success'> 
{review.reviewerRatings ? review.reviewerRatings :  "0"}</p>
</p>
</div>
<div className="flex justify-between">
<NavLink to={`/review-edit/${review._id}`}>
<p className="text-primary mx-4  text-2xl my-2"> <FaEdit></FaEdit> </p>
</NavLink>
<FaTrash onClick={() => handleReviewDelete(review._id)}
className='mx-6 my-2 2xl font-bold text-red-500 hover:cursor-pointer'
></FaTrash>
</div>
</div>
)
}
</div>
</>
);
};

export default MyReview;