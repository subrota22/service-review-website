import React from 'react';
import "./Banner.css" ;
const Banner = () => {
    return (
        <>
    <div className="carousel w-full my-5 rounded-md" data-aos="fade-down">
  <div id="slide1" className="carousel-item  h-96 relative w-full rounded-md">
    <img src=" https://i.ibb.co/SK51ZCT/phone-service.jpg" alt='first shop view' className="w-full" />
    <div className='absolute  bgcolor justify-between   transform -translate-y-1/2  top-1/2'>
      <h2 className='font-extrabold shadow text-md'> Why we are the best ? </h2>
      <h2 className='text-md'> Cause we are experienced <br />
       and we have 3 years real time experience <br />
        to work hard  and carefully. </h2>
        <button className="btn btn-primary m-3 text-white max-w-screen-xl">Get start</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle btn-primary text-white ">❮❮</a> 
      <a href="#slide2" className="btn btn-circle btn-primary text-white ">❯❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative h-96  w-full">
    <img src=" https://i.ibb.co/16mDJcm/camera-replacemtn.jpg" alt='' className="w-full" />
    <div className='absolute  bgcolor justify-between   transform -translate-y-1/2  top-1/2'>
      <h2 className='font-extrabold shadow text-md'> Why we are the best ? </h2>
      <h2 className='text-md'> Cause we are experienced <br />
       and we have 3 years real time experience <br />
        to work hard  and carefully. </h2>
        <button className="btn btn-primary m-3 text-white max-w-screen-xl">Get start</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle btn-primary text-white ">❮❮</a> 
      <a href="#slide3" className="btn btn-circle btn-primary text-white ">❯❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative h-96  w-full">
    <img src="https://i.ibb.co/9v753RR/ls.webp" alt='' className="w-full" />
    <div className='absolute  bgcolor justify-between   transform -translate-y-1/2  top-1/2'>
      <h2 className='font-extrabold shadow text-md'> Why we are the best ? </h2>
      <h2 className='text-md'> Cause we are experienced <br />
       and we have 3 years real time experience <br />
        to work hard  and carefully. </h2>
        <button className="btn btn-primary m-3 text-white max-w-screen-xl">Get start</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle btn-primary text-white ">❮❮</a> 
      <a href="#slide4" className="btn btn-circle btn-primary text-white ">❯❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative h-96 w-full">
    <img src=" https://i.ibb.co/16mDJcm/camera-replacemtn.jpg" alt='' className="w-full" />
    <div className='absolute  bgcolor justify-between   transform -translate-y-1/2  top-1/2'>
      <h2 className='font-extrabold shadow text-md'> Why we are the best ? </h2>
      <h2 className='text-md'> Cause we are experienced <br />
       and we have 3 years real time experience <br />
        to work hard  and carefully. </h2>
        <button className="btn btn-primary m-3 text-white max-w-screen-xl">Get start</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle btn-primary text-white ">❮❮</a> 
      <a href="#slide5" className="btn btn-circle btn-primary text-white ">❯❯</a>
    </div>
  </div>

  <div id="slide5" className="carousel-item relative h-96 w-full">
    <img src="https://i.ibb.co/2smWVYD/bi.webp" alt='' className="w-full" />
    <div className='absolute  bgcolor justify-between   transform -translate-y-1/2  top-1/2'>
      <h2 className='font-extrabold shadow text-md'> Why we are the best ? </h2>
      <h2 className='text-md'> Cause we are experienced <br />
       and we have 3 years real time experience <br />
        to work hard  and carefully. </h2>
        <button className="btn btn-primary m-3 text-white max-w-screen-xl">Get start</button>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle btn-primary text-white ">❮❮</a> 
      <a href="#slide1" className="btn btn-circle btn-primary text-white ">❯❯</a>
    </div>
  </div>

</div>  


        </>
    );
};

export default Banner;