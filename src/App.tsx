import Charts from "./Charts"
import "./Global.css"
// import { gerarValoresAleatorios } from "./ValoresAleatórios";
// import ChartsCurrent from "./ChartsCurrent";
import temperatura from "./componentes/Images/temperatura-alta.png"
import nuvem from "./Componentes/Images/icons8-nuvem-16.png"

export function App() {
  // const resultado = gerarValoresAleatorios();
  // const newResult = resultado[resultado.length - 4]

  var resultado : { x: string; y: number }[] = [
    {x:'00:00', y: 47.7},
    {x:'01:00', y: 32.9},
    {x:'02:00', y: 34.7},
    {x:'03:00', y: 28.1},
    {x:'04:00', y: 25.4},
    {x:'05:00', y: 23.8},
    {x:'06:00', y: 20.7},
    {x:'07:00', y: 50.0},
    {x:'08:00', y: 20.1},
    {x:'09:00', y: 39.0},
    {x:'10:00', y: 31.2},
    {x:'11:00', y: 44.4},
    {x:'12:00', y: 40.4},
    {x:'13:00', y: 36.3},
    {x:'14:00', y: 21.2},
    {x:'15:00', y: 33.4},
    {x:'16:00', y: 23.8},
    {x:'17:00', y: 47.6},
    {x:'18:00', y: 33.9},
    {x:'19:00', y: 27.6},
    {x:'20:00', y: 29.2},
    {x:'21:00', y: 39.3},
    {x:'22:00', y: 46.8},
    {x:'23:00', y: 28.8},
  ];

  const newResult = resultado[resultado.length - 1]
  
  
  return (
    <>
      <body className= "w-screen h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
        <header className="w-screen bg-blue flex ">
          <h1 className="text-white text-[40px] align-baseline mt-3 mb-3 ms-7">
            FOTOVOLT
          </h1>
        </header>
        
        <div className="flex items-center justify-center mt-[140px] gap-10">
            
            <div className="flex flex-col bg-white rounded">
              <div className="flex border-b-[2px] border-cyan-400 w-full justify-end mb-10 py-2">
                <button className="bg-white hover:bg-cyan-300 py-2 px-2 border-r-[2px] border-cyan-400 w-[100px]">
                  DIA
                </button>
                <button className="bg-white hover:bg-cyan-300 py-2 px-2 w-[100px] mr-2">
                  SEMANA
                </button>
              </div>
              <Charts/>
            </div>

            <div className="flex flex-col items-center bg-white rounded h-[500px] w-[400px] font-oswald font-semibold">
              <h1 className="text-[25px] mt-7">Ultimo Registro de Temperatura</h1>
              <div className="flex flex-col items-center mt-20">
                <img src={temperatura} alt="" className="w-[150px]" />

                <text className="text-[30px] mt-3">{newResult.y} ºC</text>
                <div className="flex flex-col items-center gap-3 mt-12">
                  <text className="text-lg">Teresina - PI</text>
                  <text className="text-lg">{newResult.x} h</text>
                </div>
                
                
              </div>
            </div>
        </div>
    
      </body>
    </>
  )
}


