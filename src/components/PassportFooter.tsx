import { IoQrCodeOutline } from "react-icons/io5";
import clsx from "clsx";
interface PassportFooterProps{
  passportValidation: boolean;
}

export function PassportFooter({passportValidation}: PassportFooterProps){
  return(
    <div className={clsx("max-w-[330px] w-full mx-auto my-auto p-6  rounded-3xl drop-shadow-lg shadow-black bg-white", {
      'rounded-t-sm bg-card-bottom': passportValidation
    })}>
          <div className="flex justify-between items-center ">
            <div className="grid gap-4">
              <div className='grid gap-[2px]'>
                <span>Embarque</span>
                <div>
                <strong className="bg-blue-700 text-white rounded-lg px-2 py-1 font-medium">16:15</strong>
                </div>
              </div>  
              <div className='grid'>
                <span>Terminal</span>
                <strong>2</strong>
              </div>  
              <div className='grid'>
                <span>Portão</span>
                <strong>15</strong>
              </div>  
            </div>
            <div>
              <IoQrCodeOutline size={160}/>
              <span className="text-black/60">Grupo de embarque: 3</span>
            </div>
          </div>
          <div className="text-center mt-6">
            <strong>Atenção: </strong>
            <span> o portão fecha 16:45</span>
          </div>
        </div>
  )
}