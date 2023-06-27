import React from 'react';
import { FaStar } from 'react-icons/fa';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const Service = ({serviceName , servicePicture , servicePrice , serviceRating , serviceDescription }) => {
return (
<>
<div className="card w-96 bg-base-100 shadow-xl" data-aos="zoom-in">
<figure className='bg-gray-400'>
<PhotoProvider>
<PhotoView src={servicePicture} >
<img src={servicePicture} alt="services" className=' hover:cursor-pointer h-80 w-full'/>
</PhotoView>
</PhotoProvider>
</figure>
<div className="card-body">
<h2 className="card-title">
{serviceName}
</h2>

<p>{(serviceDescription).slice(0 , 200) + "..."}</p>
</div> 
<div className="flex justify-between px-6">
<p className='text-2xl font-bold text-gray-500 py-3'> Price : ${servicePrice}</p>
<p className="flex justify-evenly px-6 py-3">
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<FaStar className='text-yellow-400 text-2xl font-bold'> </FaStar>
<p className='text-xl font-bold mx-2'>  {serviceRating}</p>
</p>
</div>
</div>
</>
);
};

export default Service;