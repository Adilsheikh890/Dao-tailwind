import React from 'react'
import QuarterBox from '@/Shared/QuarterBox'
import Image from 'next/image'




const QuarterData = [
  {
    header:"Quarter I",
    description:"CS-101: Object-Oriented Programming using TypeScript1",
    number:1
  },
  {
    header:"Quarter II",
    description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    number:2
  },
  {
    header:"Quarter III",
    description:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
    number:3
  },
]

export default function page() {
  return (


    <>
  <div className="">
      <Image src="/aib.jpg" alt='logo' width={2000} height={300} ></Image>
    </div>

    < div className="text-center pt-10 ">
          <h1 className="text-4xl font-bold p-5">Program Structure</h1>
          <p className="text-2xl pt-6 text-teal-900 p-5 ">A four-quarter AI program in Data Science, Machine Learning, and Deep Learning.</p>
    </div>

    {/* quarter */}
    <div>
      <h1 className="text-4xl font-bold pl-20 pt-10">Technical Track</h1>
      
      <div className="max-w-[1200px]  mx-auto  grid lg:grid-col-4 sm:grid-cols-2 gap-6 p-4  ">

         <div className="text-center border-full shadow-2xl height=[20px]  p-20 text-white font-bold bg-gray-400">
          <h1 className="text-4xl">Quarter 1</h1>
          <p className="font-bold">AI Foundations</p>
         </div>

         <div className="text-center border-full shadow-2xl height=[20px] p-20 text-white font-bold bg-blue-400">
          <h1 className="text-4xl">Quarter 2</h1>
          <p>Introduction to Data Science & Deep Learning</p>
         </div>

         <div className="text-center  border-rounded-lg shadow-2xl height=[20px] p-20 text-white font-bold bg-pink-400">
          <h1 className="text-4xl">Quarter 3</h1>
          <p>Deploying AI Solutions</p>
         </div>

         <div className="text-center border-lg shadow-2xl height=[20px] p-20 text-white font-bold bg-yellow-400">
          <h1 className="text-4xl">Quarter 4</h1>
          <p>AI In Practice</p>
         </div>

         </div>
    </div>


    <div className="flex gap-2  md:flex-row flex-col   ">
        <Image src="/2.png" alt='logo' width={600}  height={600} className="md:pl-40 p-5 "></Image>
        <div className="  md:pl-40 md:pr-40 md:w-1/2 ">
        <h1 className=" pt-5 font-bold text-2xl p-5  ">|  Artificial Intelligence (AI) in Practice</h1>
        <p className="pt-3 text-lg p-5 ">This module is structured around a series of practical code examples, demonstrating on real world problems. PIAIC strongly believes in the value of teaching using concrete examples, anchoring theoretical ideas into actual results and tangible code patterns. These examples all rely on Keras, the Python deep learning library. Students will learn Deep Learning for computer vision, text and sequences, finance, and advanced neural network design.
       
         </p>
         </div>
        </div>




    </>
  )
}

