import logo from './assets/logo.jpg';
import tarjetas from './assets/tarjetas.jpeg';
import './App.css';
import Sections from './components/sections'
import { sections } from './constants'
function App() {

  
  return (
    <div className="flex items-center justify-center bg-blue-900">
      <div className="bg-gray-800 rounded-2xl border shadow-xl max-w-lg mt-4">
        <img className="w-full bg-cover rounded-t-2xl" src={logo} alt="Chato's - Logo"/>
        <div className="px-3 pb-2">
          { sections.map(r =>
            <Sections name={r.name} items={r.items}/> 
          )}
          
        </div>
        <div className="px-3 pb-2 flex flex-col items-center">
          <img className="w-full bg-cover rounded-xl mt-8" src={tarjetas} alt="Chato's - Logo"/>
            <span className="text-white">PAGO CON TARJETA SE ABONARÁ 0.5 POR EL CONSUMO MENOR DE S/ 100 </span>
        </div>
      </div>
    </div>
  );
}

export default App;
