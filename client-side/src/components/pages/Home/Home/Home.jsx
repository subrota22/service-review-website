import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { FaArrowRight } from 'react-icons/fa';
import { NavLink, useLoaderData } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
import { AuthContext } from '../../../../UserContext/UserContext';
import  Banner from "../Banner/Banner" ;
import Service from '../Serivce/Service';
import "./Home.css" ;
import About from '../../About/About';
import Contact from '../../Contact/Contact';
import Team from '../../Team/Team';
import NewLatter from '../../NewLatter/NewLatter';
import StateService from '../../StateService/StateService';
import TestiMonal from '../../TestiMonal/TestiMonal';
const Home = () => {
const {user} = useContext(AuthContext) ;
const servicesData = useLoaderData() ;
return (

    <>
    
    
<div className='mx-6'>
<Helmet>
<meta charSet='utf-8'/>
<title>Home page </title>
</Helmet>
<Banner></Banner>

{ user.uid &&
    <div className='font-bold text-3xl text-success text-center my-10'>
      <Typewriter
            words={["Welcome"  , 
            `${user.displayName ? user.displayName : "dear user" } ` 
             , "thanks to join with us !!"  , "please give us review" , "about our services"
            , "it will help to build" , "our working concious"  ]}
            loop={Infinity}
            cursor
            cursorStyle='_'
            typeSpeed={100}
            deleteSpeed={50}
            delaySpeed={2000}
          />
      </div>
}
{
    servicesData.length === 0 && 
    <h2 className='text-2xl text-center font-bold text-primary'>No service added till now </h2>
}
<div className="serviceData my-8 " data-aos="zoom-in">
{
servicesData.map(service => 
<Service  key={service._id} 
serviceName={service.serviceName}
servicePicture={service.servicePicture}
servicePrice={service.servicePrice}
serviceRating={service.serviceRating}
serviceDescription={service.serviceDescription}
></Service>
)
}
</div>
{
servicesData.length === 3 &&
<div className="text-center">
<NavLink to="/services">
<button className="btn btn-success w-60 my-7 text-white text-md font-bold "> 
<span> Show all </span>
<span className='ml-8'> <FaArrowRight> </FaArrowRight> </span>
</button>
</NavLink>
</div>}

<div className="hero min-h-screen  bg-gray-800 text-white my-5 rounded-md" data-aos="zoom-in">
<div className="hero-content text-center flex flex-col md:flex-row justify-between">
<div className='relative animate-pulse mr-20 duration-1000 drawer-mobile'>
     <img src="https://i.ibb.co/zfC6k8P/hdc3.jpg" className='absolute right-9 top-52 rounded-lg' alt=""/>
    <img src="https://i.ibb.co/1vVJt2V/ban.jpg" alt="pc service" className='h-96 rounded-lg w-80'/>
</div>


<div className="max-w-md" data-aos="zoom-in">
<h1 className="text-5xl font-bold">Our Basic services</h1>
<p className="py-6 px-6">
Our Desktops and Laptops work hard for us, so we should give them some proper TLC.
 Same goes for our gaming consoles and other electrics with mobiles as they can become 
 filled with dust.
Make sure to clean out the inside of these components to clear out airways and help
 them stay cooler. 
Need help cleaning it or have any other questions? Feel free to message us!
Visit us at Rajshahi ,joypurhat , Railget ,  Road number : 06
</p>
<p>
Give your PC a boost in performance and speed by replacing your laptop or 
desktop’s Hard Drive Disk with an SSD. Watch your computer load faster and
 give it a second life.
Interested or Need more Information?
</p>
<NavLink to="/services">
<button className="btn btn-success w-60 my-7 text-white text-md font-bold "> 
<span>  Get start  </span>
<span className='ml-8'> <FaArrowRight> </FaArrowRight> </span>
</button>
</NavLink>
</div>


</div>
</div>

<div className="hero min-h-screen bg-gray-800 text-white my-5 rounded-md" data-aos="zoom-in">
<div className="hero-content flex-col lg:flex-row-reverse">
<img src="https://i.ibb.co/9v753RR/ls.webp" alt='' className="max-w-sm animate-pulse duration-1000  h-80 rounded-lg shadow-2xl" />

<div data-aos="zoom-in">
<h1 className="text-5xl font-bold">Our other services !</h1>
<p className="py-6 px-6">
Our other service about the repair products like PC , Mobile phone , Monitor , Laptop and other computer 
related products . We are repair PC and Laptop to make it first working and resolve some 
issues.Have you backed-up any of your data lately? Remember to backup frequently to 
have your recent files available in the future in case anything happens. Many tools
exist to help you out and many are already available on your computer.
pgrades..Repairs..Storage..Backups..Screens..Back-lights..Repairs 
 (new and used)..Networking..Virus Removal..Etc..LAPTOPS AND DESKTOPS!!
We do it all. Certified Network and PC Techs On Staff.
And yes, we do house calls. Pick-Up Service is available..
For inquires and estimates please don't hesitate to pm me. We will beat anyone's price.
Quality repairs at the Best Price. We are rapairs PC , Laptop and mobile phones specially. 
We are expert to do this type of working we hope that your understand that what type 
of services we are provided , thanks .
</p>
<NavLink to="/services">
<button className="btn btn-success w-60 my-7 text-white text-md font-bold "> 
<span> Get start </span>
<span className='ml-8'> <FaArrowRight> </FaArrowRight> </span>
</button>
</NavLink>
</div>
</div>
</div>
</div>

<About></About>
<Contact></Contact>
<Team></Team>
<StateService></StateService>
<TestiMonal></TestiMonal>
<NewLatter></NewLatter>
    </>
);
};

export default Home;