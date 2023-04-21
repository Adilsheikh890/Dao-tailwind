import { FC } from "react";


interface IProps {
  header:string;
  description:string;
  number:number;
  
}



const QuarterBox:FC<IProps>= ({header,description,number}) => {
  return (
                    <div className={`border rounded-md  flex-1 flex flex-col relative px-8 py-12 md:pl-3 shadow-lg }`}>
                      <h3 className="text-4xl font-semibold hover:text-cyan-700">{header}</h3>
                      <p className="text-1xl text-lg">{description}</p>                
                      <span className="absolute text-gray-300 -top-8  right-40 text-[170px] md:text-center md:text-fix font-bold -z-10 ">{number}</span> 
                      </div>
  )
}

export default QuarterBox
