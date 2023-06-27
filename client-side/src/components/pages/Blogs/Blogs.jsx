import React from 'react';
import { Helmet } from 'react-helmet';
import "./Blogs.css" ;
const Blogs = () => {
return (
<>
<Helmet>
<title>Blogs</title>
</Helmet>
<div className='mx-4 blogs'>
<div className="shadow-lg p-4 my-7 rounded-md bg-white" data-aos="fade-down" data-aos-delay="200">
<h2 className='font-bold text-2xl my-4'><span>Question number 1 :</span> Difference between SQL and NoSQL  </h2>
<p className='text-gray-600 font-bold text-lg'> 👉  <span className='text-primary font-bold'> Answer : </span> 
SQL is the programming language used to interface with relational databases.
(Relational databases model data as records in rows and tables with logical 
links between them).NoSQL is a class of DBMs that are non-relational and generally 
do not use SQL.
</p>
</div>

<div className="shadow-lg p-4 my-7 rounded-md bg-white" data-aos="fade-down" data-aos-delay="600">
<h2 className='font-bold text-2xl my-4'><span>Question number 2 :</span> What is JWT, and how does it work ? </h2>
<p className='text-gray-600 font-bold text-lg'>  👉  <span className='text-primary font-bold'> Answer : </span> 
JSON Web Token (JWT) is an open standard that defines a 
compact and self-contained way for securely transmitting information
 between parties as a JSON object. This information can be verified and 
 trusted because it is digitally signed.
</p>
</div>


<div className="shadow-lg p-4 my-7 rounded-md bg-white" data-aos="fade-down" data-aos-delay="800">
<h2 className='font-bold text-2xl my-4'><span>Question number 3 :</span> What is the difference between javascript and NodeJS ? </h2>
<p className='text-gray-600 font-bold text-lg'> 👉  <span className='text-primary font-bold'> Answer : </span> 
JavaScript is a simple programming language that can be used with 
any browser that has the JavaScript Engine installed. Node. js, on 
the other hand, is an interpreter or execution environment for the
 JavaScript programming language
</p>
</div>
<div className="shadow-lg p-4 my-7 rounded-md bg-white" data-aos="fade-down" data-aos-delay="1000">
<h2 className='font-bold text-2xl my-4'><span>Question number 4 :</span> How does NodeJS handle multiple requests at the same time? </h2>
<p className='text-gray-600 font-bold text-lg'> 👉  <span className='text-primary font-bold'> Answer : </span> 
 NodeJS receives multiple client requests and places them into EventQueue.
  NodeJS is built with the concept of event-driven architecture. NodeJS has its own 
  EventLoop which is an infinite loop that receives requests and processes them.
</p>
</div>


</div>


</>

);
};

export default Blogs;