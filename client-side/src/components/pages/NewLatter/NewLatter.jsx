import React from 'react';
import Swal from 'sweetalert2';

const NewLatter = () => {
    return (
        <>

            <div className="p-6 container md:w-2/3 xl:w-auto my-5 mx-auto flex flex-col xl:items-stretch justify-between xl:flex-row" data-aos="zoom-in">
                <div className="xl:w-1/2 md:mb-14 xl:mb-0 relative h-auto flex items-center justify-center">
                    <img src="https://cdn.tuk.dev/assets/components/26May-update/newsletter-1.png" alt="Envelope with a newsletter" className="h-full xl:w-full lg:w-1/2 w-full" />
                </div>
                <div className="w-full xl:w-1/2 xl:pl-40 xl:py-28">
                    <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold leading-10 text-white dark:text-white mb-4 text-center xl:text-left md:mt-0 mt-4">Subscribe</h1>
                    <p className="text-base leading-normal text-white dark:text-gray-200 text-center xl:text-left">
                
                        "Stay up-to-date on the latest trends and get exclusive discounts by signing up for our email list."
                        <br />   <br />
                        "Get the latest news and updates from our team delivered straight to your inbox. Sign up for our newsletter today!"
                        <br />   <br />
                        "Don't miss out on our latest news, events, and promotions. Sign up for our newsletter today and stay in the loop."
                        <br />   <br />
                        "Join our email list and get exclusive access to our latest products, services, and offers."
                    </p>
                    <div className="flex items-stretch mt-12">
                        <input className="bg-gray-100 rounded-lg text-green-500 rounded-r-none dark:bg-gray-800 text-base leading-none  dark:text-white p-5 w-4/5 border border-transparent focus:outline-none focus:border-gray-500" type="email" placeholder="Your Email" />
                        <button className="w-32 rounded-l-none hover:bg-indigo-600 bg-indigo-700 rounded text-base font-medium leading-none text-white p-5 uppercase focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700" onClick={() => Swal.fire({ icon: "success", title: "Thanks for subscribe us !!" })}>subscribe</button>
                    </div>
                </div>
            </div>

        </>
    );
};

export default NewLatter;