import React from 'react'
import {MdSmartToy} from'react-icons/Md';
import Image from 'next/image';

export default function page() {
  return (
    <>
    <div className=" text-center pt-40 bg-[url('https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg')] bg-fixed md:px-44 py-40 bg-cover rounded-b-[15%] lg:text-center">
        
            <h3 className="text-2xl md:text-4xl font-bold  text-yellow-400 p-5">Earn as you Learn Program</h3>
            <h1 className="md:text-7xl text-3xl font-bold text-yellow-400 p-5">Prepare yourself for the  Next Generation  of Internet with</h1>
            <h3 className="text-4xl font-bold text-teal-700 p-5">Panaverse</h3>
            <p className=" font-semibold text-white pt-3 pb-4 p-5  ">One Year Panaverse DAO Earn as you Learn Program. Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, and Ambient Computing/IoT Technologies</p>
            <button className="boder rounded-lg font-bold  p-3 bg-sky-700">More Info</button>
    </div>

    
       <div className=" text-center pt-5 items-center">
             <h1 className="font-bold text-4xl pt-10 hover:animate-bounce duration-75">Our Courses!
             <hr className='width={25%} pt-7'/>
             </h1>
          
       </div>

           {/* first */}
       <div className="max-w-[1200px]   mx-auto py-[70px] p-5 grid lg:grid-col-4 sm:grid-cols-2 gap-6">
        {/* first */}
       <Image src="/Ai.jpg" alt='images' width={580} height={580} className='rounded-2xl' />
       
       {/* second */}
       <Image src="/mwta.jpg" alt='images' width={580} height={580} className='rounded-2xl' />
         {/* third */}
         <Image src="/images.jpg" alt='images' width={680} height={580} className='rounded-2xl' />
         {/* four */}
         <Image src="/cli.jpg" alt='images' width={680} height={580} className='rounded-2xl' />
         
         
        </div>

        {/* second part */}
        <div className="flex gap-2  md:flex-row flex-col   ">
        <Image src="/logo3.webp" alt='logo' width={600}  height={600} className="md:pl-40 p-5"></Image>
        <div className="  md:pl-40 md:pr-40 md:w-1/2 ">
        <h1 className=" pt-5 font-bold text-2xl p-5 ">|Program Of Studies</h1>
        <p className="pt-3 text-lg p-5">This curriculum is intended for beginners who want to learn software development from the ground up. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each. The emphasis will be on hands-on learning by educating students to produce projects.
         </p>
         </div>
        </div>

        {/* third part */}
        <div className="flex gap-2  md:flex-row flex-col  ">

        

        <div className=" md:pl-40  pt-10 md:w-1/2 ">
        <h1 className=" pt-5 font-bold text-2xl  p-5">| Bootcamp 2023</h1>
        <p className="pt-3 text-lg p-5">Modern Full Stack Serverless Multi-Tenant SaaS App and API Developer
        All Bootcampers are required to record a video presentation which explains what a “Modern Full Stack Serverless Multi-Tenant SaaS App and API Developer ” means, what kind of Apps and API they will build, what technologies they may use to build these apps and APIs, and what will be the benefits and use cases of these apps and APIs.
         </p>
         </div>

         <Image src="/outcome-poster.webp" alt='logo' width={500}  height={300} className="pt-7 p-5"></Image>

        </div>
       
         </>
  )
}
{/* <div className="  hover:animate-bounce shadow-2xl p-4 rounded-lg text-center bg-teal-400 hover:text-black text-white ">
      
<h2 className="text-2xl font-bold p-5"> Web 3.0 and Metaverse</h2>
<p className="p-5">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers,</p>
 </div> */}
{/* <div className=" hover:animate-bounce shadow-2xl rounded-lg p-4 text-center bg-pink-500 hover:text-black  text-white ">
          
          <h2 className="font-bold p-5 text-2xl">Cloud Computing</h2>
          <p className="p-5">A ONE YEAR CLOUD COMPUTING PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS.
          GETTING PAKISTAN READY FOR THE NEW ERA OF MICROSERVICES AND MULTI-CLOUD NATIVE COMPUTING.</p>
           </div> */}