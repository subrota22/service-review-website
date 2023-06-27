import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowRight, FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { NavLink, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../UserContext/UserContext';
import { Typewriter } from 'react-simple-typewriter'
import "./Services.css" ;
const Services = () => {
const sevicesData = useLoaderData() ;
const {user } = useContext(AuthContext) ;
return (
<>      
<Helmet>
<meta charSet='utf-8'/>
<title>Services page </title>
</Helmet>

<div className="hero my-10" data-aos="fade-down">
<div className="hero-content">
<div className="max-w-2xl">
{
user.uid && 
<div className='font-bold text-3xl text-success' data-aos="fade-down">
<Typewriter
words={['Welcome' ,  user.displayName ? user.displayName : "dear user"  , '  this all are  our services']}
loop={Infinity}
cursor
cursorStyle='_'
typeSpeed={80}
deleteSpeed={20}
delaySpeed={1000}
/>
</div>
}

<p className="py-6 text-white text-start"> 
Mobiles phone  have become an inseparable part of our lives.
But some time that mobile interupt our general life cause this phone 
some time creats problem by it's display or any part of mobile phone , 
not only mobile phone but also same case for the laptop and pc so that's 
why we are invent lotus tech service to solve your all device problem.
We can now surf the web, log onto our social networking websites or just carry
out leisure activities for hours on your phones without getting bored.
But, what happens if you are just quietly going through your Whatsapp messages
and before you can realize the phone just slips through your hand and its screen
shatters to thousand pieces. The feeling that the owner is filled with cannot 
be understood by people who have not gone through similar.

If you are in need to screen repaired for your broken glass, you need to be sure 
that you trust your phone with the best in the industries. This is the reason
why we provide training to our engineers and the technical team to become 
the best repair specialist in the country.

Use the flat screwdriver to pry up the old battery and avoid touching any wires
on the system. Remove the glue-held wires with the same tool and bring in a soldering
iron to detach them. Taking out the battery and then replacing it should be done is
exact semblance. Putting in a new battery should be easier than buying one.
Experts on the famous Apple gadgets recommend people to use high-quality OEM batteries.
</p>
<p className='text-2xl text-white font-bold my-6'>Note : if you have available time than you can come our lotus tech service shop ,
Otherwise, contact us we will give you service at your home.  </p>
<div className="text-center mx-10">
<button className="btn btn-primary text-white">Order service
<FaArrowRight className='mx-4'></FaArrowRight> </button>
</div>
</div>

</div>

</div>

<div className='services' >
{
sevicesData.map(service => 
<div key={service._id} className="card w-96  bg-base-100 shadow-xl" data-aos="zoom-in">
<figure>
<PhotoProvider>
<PhotoView src={service.servicePicture}>
<img src={service.servicePicture} className="h-80 hover:cursor-pointer rounded-md" alt="Shoes" />
</PhotoView>
</PhotoProvider>
</figure>
<div className="card-body">
<h2 className="card-title">
{service.serviceName}
</h2>

<p>
{service.serviceDescription.length  > 100 ?
(service.serviceDescription).slice(0 , 100) + "..." : 
service.serviceDescription 
}
</p>

</div>
<div className="flex justify-between px-6">
<p className='text-xl font-bold text-gray-500 py-3'>Price: ${service.servicePrice}</p>
<p className="flex justify-evenly px-6 py-3">
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<p className='text-xl font-bold mx-2 btn btn-circle btn-success text-white -mt-2'>  {service.serviceRating}</p>
</p>
</div>
<NavLink to={`/services-details/${service._id}`}>
<button className="btn btn-success text-white mx-4 my-4"> 
<p>Show details</p>
<FaArrowRight className='mx-4'></FaArrowRight>
</button>
</NavLink>

</div>

) 
}
</div>
</>
);
};

export default Services;