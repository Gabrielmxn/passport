import { IoQrCodeOutline }  from "react-icons/io5";
import { IoIosAirplane } from "react-icons/io";
function App() {

  return (
    <main className="h-screen flex justify-center items-center bg-gradient-to-tr">
      <div>
      <div className="max-w-[327px] w-full mx-auto my-auto border p-8 rounded-3xl">
        <div className="flex justify-between items-center ">
          <div className='grid '>
            <span>Voo</span>
            <strong>RS995</strong>
          </div>  
          <div className='grid text-right'>
            <span>Data</span>
            <strong>23/05/2023</strong>
          </div>  
        </div>
        <div className="flex justify-between items-center mt-6"> 
          <div>
            <span>São Paulo Brasil</span>
            <h3 className="text-5xl font-bold">GRU</h3>
            <span>17:00</span>
          </div>
          <div>
            <span></span>
            <IoIosAirplane size={24}/>
            <span></span>
          </div>
          <div className="text-right">
            <span>São Paulo Brasil</span>
            <h3 className="text-5xl font-bold">SFO</h3>
            <span>17:00</span>
          </div>
        </div>
      </div>
      <div className="max-w-[327px] w-full mx-auto my-auto border p-6 rounded-3xl">
        <div className="flex justify-between items-center ">
          <div className='grid '>
            <span>Passageiro</span>
            <strong>Gabriel Alves</strong>
          </div>  
          <div className='grid text-right'>
            <span>Assento</span>
            <strong>2BA</strong>
          </div>  
        </div>
      </div>

      <div className="max-w-[327px] w-full mx-auto my-auto border p-6 rounded-3xl drop-shadow-2xl shadow-black">
        <div className="flex justify-between items-center ">
          <div className="grid gap-4">
            <div className='grid'>
              <span>Embarque</span>
              <strong>16:15</strong>
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
            <span>Grupo de embarque: 3</span>
          </div>
        </div>
        <div className="text-center mt-6">
          <strong>Atenção: </strong>
          <span> o portão fecha 16:45</span>
        </div>
      </div>
      </div>
    </main>
  )
}

export { App }
