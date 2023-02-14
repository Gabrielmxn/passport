import clsx from "clsx";

interface PassportBodyProps{
  onCuty: () => void;
  passportValidation: boolean;
}

export function PassportBody({onCuty, passportValidation}: PassportBodyProps){
  return(
    <div onClick={onCuty} className={clsx("max-w-[330px] w-full mx-auto my-auto bg-white p-6 rounded-3xl cursor-pointer", {
      'rounded-sm bg-gradient-radial': passportValidation
    })}>
          <div className="flex justify-between items-center ">
            <div className='grid'>
              <span className="block text-sm">Passageiro</span>
              <strong className="block text-base font-medium">Gabriel Alves</strong>
            </div>  
            <div className='grid text-right'>
              <span className="text-sm">Assento</span>
              <strong className="text-base font-medium">28A</strong>
            </div>  
          </div>
        </div>
  )
}