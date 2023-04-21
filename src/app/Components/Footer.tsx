import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
   <div className="md:flex-row flex-col flex align-middle gap-[30px]  p-[60px] bg-slate-500 ">
    {/* first */}
    <div className=" md:w-1/4 mb-[30px]">
       <Image src='/logos.png' alt='logo' width={130} height={130}></Image>
       <p className="font-semibold">Certified Web 3.0 and Metaverse Developer A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p>
    </div>
    {/* end */}


    {/* second */}
    <div className=" md:w-1/4  border-l-orange-600 border-l-[6px] pl-[10px] ">
     <h1 className="text-2xl font-bold">Programs</h1>
     <ul className=" pt-5 font-semibold">
        <li>
            <Link href='/Meta' className="hover:text-white">Web 3.0 Metaverse</Link>
        </li>
        <li>
            <Link href='/Artifical' className="hover:text-white">Artical Intelligence</Link>
        </li>
        <li>
            <Link href='/Computing' className="hover:text-white">Cloud Computing</Link>
        </li>
        <li>
            <Link href='/Blockchain' className="hover:text-white">Block Chain</Link>
        </li>
     </ul>
    </div>
    {/* end */}




     {/* third */}
     <div className=" md:w-1/4  border-l-orange-600 border-l-[6px] pl-[10px] ">
          <h1 className="text-2xl font-bold">Follows Us</h1>
          <ul className="pt-5 font-semibold">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
            <li>linkedin</li>
          </ul>
     </div>
    {/* end */}



     {/* fourth */}
     <div className=" md:w-1/4  border-l-orange-600 border-l-[6px] pl-[10px] ">
          <h1 className="text-2xl font-bold">Contact Us</h1>
          <ul className="pt-5 font-semibold">
            <li>+923172790520</li>
            <li>sheikhadil044@gmail.com</li>
            <li>Karachi,Pakistan</li>
          </ul>
     </div>
    {/* end */}
    

   </div>
)
  
}
