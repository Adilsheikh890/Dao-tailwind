import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <>
    <div className="bg-gradient-to-r from-purple-900 via-pink-500 to-teal-900 text-white text-center h-69 lg:p-20"> 
      <h1 className="text-4xl pt-10 p-5">Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h1>
      <p className="pt-8 p-5">Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users</p>
    </div>

    <div className="text-center">
      <h2 className="text-teal-500 text-4xl pt-20 p-5">Certified Web 3.0 and Metaverse Developer: A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar</h2>
    </div>

    <div className="pl-80 pt-10">
      <Image src="/logos.png" alt='logo' width={500} height={500} className="p-5 xm:items-center"></Image>
    </div>

    <div className="text-center lg:p-20">
      < h2 className="font-bold text-lg p-5">The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.</h2>
      <h2 className="p-5">Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar</h2>
      <p className="font-sm p-5">The internet is without a doubt the most important technological development in human history. Web3 and metaverse technologies expand the internet as we know it by introducing novel features and advancements. Metaverse will make use of all aspects of modern technology, including 3D, VR, AR, AI, blockchain, cloud computing, voice computing, ambient computing, and more.

      Citi is the latest Wall Street business to give a positive prognosis for Web 3.0 and the Metaverse, terms used to depict a future internet vision centred on decentralised technologies and virtual worlds. Citi stated in a March 2022 research paper that the metaverse economy might have a total addressable market of up to $13 trillion and five billion people by 2030.</p>
    </div>

    </>
  )
}
