import { IoQrCodeOutline }  from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";
import { Divider } from "./components/Divider";
import { PassportHeader } from "./components/PassportHeader";
import { PassportBody } from "./components/PassportBody";
import { PassportFooter } from "./components/PassportFooter";
import { useState } from "react";
function App() {
  const [passportValid, setPassportValid] = useState(false)
  function CutyPassport(){
    setPassportValid(true);
  }
  return (
    <main className="h-screen flex justify-center items-center bg-transparent">
      <div className="max-w-[327px] bg-transparent">
        <h3 className="text-xl mb-5 text-center text-white">Cartão de embarque</h3>
        <PassportHeader passportValidation={passportValid}/>
        <Divider passportValidation={passportValid} />
        <PassportBody onCuty={CutyPassport} passportValidation={passportValid} />
        <Divider passportValidation={passportValid} />
        <PassportFooter passportValidation={passportValid}/>
        <div className="text-center mt-5 text-white opacity-60">Qualquer problema procure o balcão de atendimento da sua companhia aérea</div>
        </div>
    </main>
  )
}

export { App }
