import { IoIosAirplane } from "react-icons/io";
import clsx from "clsx";
interface PassportFooterProps{
  passportValidation: boolean;
}
export function PassportHeader({passportValidation}: PassportFooterProps){
  return(
<div className={clsx("max-w-[330px] relative w-full mx-auto my-auto bg-white  p-8 rounded-3xl", {
  'rounded-b-sm bg-card-top': passportValidation
})}>
        <div className="flex justify-between items-center bg-transparent">
          <div className='grid '>
            <span>Voo</span>
            <strong>RS995</strong>
          </div>  
          <div className='grid text-right'>
            <span>Data</span>
            <strong>23/05/2023</strong>
          </div>  
        </div>
        <div className="flex items-stretch mt-6"> 
          <div className="">
            <span className="text-sm">São Paulo Brasil</span>
            <h3 className="text-[2.5rem]  font-bold">GRU</h3>
            <span>17:00</span>
          </div>
          <div className="flex items-center">
            <span></span>
            <IoIosAirplane size={24} className="text-right ml-2 float-right"/>
            <span></span>
          </div>
          <div className="text-right overflow-">
            <span className="text-sm ">São Francisco, EUA</span>
            <h3 className="text-[2.5rem] font-bold">SFO</h3>
            <div className="relative">
              <span>04:48</span>
              <span className="absolute -right-3 top-0 text-[0.625rem]">+1</span>
            </div>
          </div>
        </div>
      
      </div>
  )
}