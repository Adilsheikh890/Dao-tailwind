"use client";
import Link from 'next/link'
import React from 'react'
import {IoIosArrowDown} from'react-icons/Io';

export default function Header() {
  return (
    <div className="items-center flex gap-5  w-full pt-4 pb-3">

        <div className="pl-10 w-2/4 ">
            <img src="/logos.png" alt="logo" width={100} height={100} />
        </div>

        <div className=" pl-80 ">
          <ul>
            <li>
              <Link href="/Main"  className="font-semibold text-lg">Home</Link>
            </li>
          </ul>
        </div>

        <div>
          <button className="flex relative justify-center bg-white  font-sans   text-black 
          rounded  group ">
            <p className="font-semibold text-lg">Courses</p>

            <span className=" hover:group-focus:block ">
            <IoIosArrowDown className="pt-2" size={24}/>
            </span>

            <div className="absolute   hover:hidden group-focus:block top-full  w-60  shadow-md mt-1 text-white  bg-teal-600  rounded  gap-5">
              <ul className="text-left border-rounded mt-2 mb-2 space-x-2">
                <li>
                  
                  <Link href="./Meta" className="px-4 py-1 border-b hover:bg-teal-500  " >Web 3.0 Metaverse</Link>
                  </li>
                  <li>
                  <Link href="./Artifical" className="px-4 py-1 border-b hover:bg-teal-500" >Artical Intelligence</Link>
                  </li>
                  <li>
                  <Link href="./Computing"  className="px-4 py-1 border-b hover:bg-teal-500">Cloud Computing</Link>
                  </li>
                  <li>
                  
                  <Link href="./Blockchain" className="px-4 py-1 border-b hover:bg-teal-500" >Block Chain</Link>
                  
                  </li>
                  
                 
                
              </ul>
              
            </div>
          </button>
        </div>
    </div>
  )
}
