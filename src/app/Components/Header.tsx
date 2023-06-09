"use client";
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'





export default function Header() {
  
  const [dropDown,setDropDown]=useState(false);
  return (
    <div className="items-center flex md:gap-4  gap-3 bg-white shadow-lg sticky top-0 w-full pt-4 pb-3">

        <div className=" lg:pl-20 px-3   w-2/4  ">
          
            <Image src="/logos.png" alt="logo" width={100}  height={100} />
        </div>

        <div className=" lg:pl-80 md:pl-80">
          <ul>
            <li>
              <Link href="/Main"  className="font-semibold text-lg">Home</Link>
            </li>
          </ul>
        </div>
        {/* courses */}

       
         <div className={`flex flex-col ${!dropDown ? " ":" transition duration-150 ease-out "}`}>
    <button className={`text-black  font-semibold text-lg   text-center inline-flex items-center`} type="button" onClick={()=>{
      setDropDown(!dropDown);
    }}>Courses<svg className="w-4 h-4 ml-1" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg></button>

    <div className={`${!dropDown ? "hidden":" transition duration-150 ease-out "} flex  flex-col flex-shrink top-20 self-center absolute gap-1 right-4 xl:right-auto bg-slate-200 p-5 underline  text-center rounded-md shadow-lg `}>
        <Link href={"./Meta"} className='font-medium' onClick={()=>{setDropDown(!dropDown)}}>Web 3.0 Metaverse</Link>
        <Link href={"./Artifical"}className='font-medium ' onClick={()=>{setDropDown(!dropDown)}}>Artical Intelligence</Link>
        <Link href={"./Computing"}className='font-medium ' onClick={()=>{setDropDown(!dropDown)}}>Cloud Computing</Link>
        <Link href={"./Blockchain"}className='font-medium ' onClick={()=>{setDropDown(!dropDown)}}>Block Chain</Link>

    </div>
  </div>   
        
    </div>
  )
}

