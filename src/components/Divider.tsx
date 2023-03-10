import clsx from "clsx";

interface DividerProps {
  passportValidation: boolean;
}

export function Divider({ passportValidation }: DividerProps) {
  return(
    <div className={clsx("border-dashed border-b-2 relative border-b-black/30 h-[2px] bg-white text-center mx-auto",{
      'w-[calc(100%_-_(1.4rem_*_2))]': !passportValidation,
      'w-[calc(100%_-_(0.9rem_*_2))]': passportValidation
    })}>
    </div>
  )
}