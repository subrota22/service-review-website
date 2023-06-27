import React from 'react';

const Contact = () => {
    return (
        <>
          


       <div className="container mx-auto pt-16" data-aos="zoom-in">
                    <div className="lg:flex">
                        <div className="xl:w-2/5 lg:w-2/5 bg-indigo-700 py-16 xl:rounded-bl rounded-tl rounded-tr xl:rounded-tr-none">
                            <div className="xl:w-5/6 xl:px-0 px-8 mx-auto">
                                <h1 className="xl:text-4xl text-3xl pb-4 text-white font-bold">Get in touch</h1>
                                <p className="text-xl text-white pb-8 leading-relaxed font-normal lg:pr-4">Got a question about us? Are you interested in partnering with us? Have some suggestions or just want to say Hi? Just contact us. We are here to asset you.</p>
                                <div className="flex pb-4 items-center">
                                    <div aria-label="phone icon" role="img">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg1.svg" alt="phone"/>
                                        
                                    </div>
                                    <p className="pl-4 text-white text-base">+1 (308) 321 321</p>
                                </div>
                                <div className="flex items-center">
                                    <div aria-label="email icon" role="img">
                                        <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/contact_indigo-svg2.svg" alt="email"/>
                                       
                                    </div>
                                    <p className="pl-4 text-white text-base">Info@alphas.com</p>
                                </div>
                                <p className="text-lg text-white pt-10 tracking-wide">
                                    545, Street 11, Block F
                                    <br />
                                    Dean Boulevard, Ohio
                                </p>
                                <div className=" pt-16" >
                                    {/* <a href="javascript:void(0)"  className="text-white font-bold tracking-wide underline focus:outline-none focus:ring-2 focus:ring-white ">View Job Openings</a> */}
                                </div>
                            </div>
                        </div>
                        <div className="xl:w-3/5 lg:w-3/5 bg-gray-200 dark:bg-gray-600 h-full pt-5 pb-5 xl:pr-5 xl:pl-0 rounded-tr rounded-br">
                            <form  action="https://formsubmit.co/itinfobd24@gmail.com" method="post" id="contact" className="bg-white dark:bg-gray-800 py-4 px-8 rounded-tr rounded-br">
                                <h1 className="text-4xl text-gray-800 dark:text-white font-extrabold mb-6">Enter Details</h1>
                                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                                    <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                        <div className="flex flex-col">
                                            <label for="full_name" className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Full Name</label>
                                            <input required id="full_name" name="full_name" type="text" className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Full Name" aria-label="enter your full name input" />
                                        </div>
                                    </div>
                                    <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                        <div className="flex flex-col">
                                            <label for="email" className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Email</label>
                                            <input required id="email" name="email" type="email" className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="example@email.com" aria-label="enter your email input" />
                                        </div>
                                    </div>
                                </div>
                                                         
                                <div className="block xl:flex w-full flex-wrap justify-between mb-6">
                                    <div className="w-2/4 max-w-xs mb-6 xl:mb-0">
                                    <div className="flex flex-col">
                                            <label for="phone" className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Phone</label>
                                            <input required id="phone" name="phone" type="tel" className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="+92-12-3456789" aria-label="enter your phone number input" />
                                        </div>
                                    </div>
                                    <div className="w-2/4 max-w-xs xl:flex xl:justify-end">
                                        <div className="flex flex-col">
                                            <label for="company" className="text-gray-800 dark:text-white text-sm font-semibold leading-tight tracking-normal mb-2">Company</label>
                                            <input required id="company" name="company" type="text" className="dark:bg-gray-900 dark:text-white dark:border-gray-700 focus:outline-none focus:border focus:border-indigo-700 font-normal w-64 h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" placeholder="Google" aria-label="enter your company name" />
                                        </div>
                                    </div>
                                </div>

                                
                                <div className="w-full mt-6">
                                    <div className="flex flex-col">
                                        <label className="text-sm font-semibold text-gray-800 dark:text-white mb-2" for="message">Message</label>
                                        <textarea placeholder="" name="message" className="dark:bg-gray-900 dark:text-white dark:border-gray-700 border-gray-300 border mb-4 rounded py-2 text-sm outline-none resize-none px-3 focus:border focus:border-indigo-700" rows="8" id="message" aria-label="enter your message input"></textarea>
                                    </div>
                                    <button type="submit" style={{backgroundColor:"blue"}} className="bg-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-8 py-3 text-sm leading-6 focus:border-4 w-96 mx-auto">Send message</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
    
               
        </>
    );
};

export default Contact;