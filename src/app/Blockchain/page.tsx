import React from 'react'
import Image from 'next/image'

export default function page() {
  return (

   <div>
     <div className="text-center hover:text-white text-black pt-10 bg-yellow-500 h-77 lg:p-20"> 
 <h1 className="font-extrabold text-4xl p-5 ">BLOCKCHAIN SPECIALIST</h1> 
 <p className="pt-4 font-bold text-center p-5  ">A ONE YEAR BLOCKCHAIN PROGRAM DESIGNED FOR ABSOLUTE BEGINNERS GETTING PAKISTAN READY FOR THE NEW ERA OF BLOCKCHAIN FINTECH AND SMART CONTRACTS</p>
 </div> 
 
 {/* second */}

 <div className="flex gap-2  md:flex-row flex-col   pt-10 ">
        <Image src="/bit.png" alt='logo' width={600}  height={600} className="md:pl-40"></Image>
        <div className="  md:pl-40 md:pr-40 md:w-1/2 ">
        <h1 className=" pt-5 font-bold text-2xl p-5  ">Whats a cryptocurrency</h1>
        <p className="pt-3 text-lg p-5 ">A cryptocurrency is just like a digital form of cash. You can use it to pay friends for your share of the bar tab, buy that new pair of socks you've been eyeing up 👀, or book flights ✈️ and hotels 🏨 for your next holiday. Because cryptocurrency is digital, it can also be sent to friends and family anywhere in the world..
       
         </p>
         </div>
        </div>


        <div className="flex gap-2  md:flex-row flex-col  ">

        

        <div className=" md:pl-40  pt-10 md:w-1/2 p-5 ">
        <h1 className=" pt-5 font-bold text-2xl ">| What Is ERC-20? </h1>
        <p className="pt-3 text-lg">ERC-20 is the technical standard for fungible tokens created using the Ethereum blockchain. A fungible token is interchangeable with another token—where the well-known non-fungible tokens (NFTs) are not interchangeable.
        ERC-20 allows developers to create smart-contract-enabled tokens that can be used with other products and services. These tokens are a representation of an asset, right, ownership, access, cryptocurrency, or anything else that is not unique in and of itself but can be transferred.
         </p>
         </div>

         <Image src="/too.png" alt='logo' width={500}  height={300} className="pt-7"></Image>

        </div>
       




 
   </div>
  )
}
