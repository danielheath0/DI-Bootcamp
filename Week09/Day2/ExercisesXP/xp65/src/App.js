import {useState} from "react"
import './App.css';
import Car from './components/Car.js';
import Garage from "./components/Garage.js";
import Events from "./components/Events.js";
import Phone from "./components/Phone.js";
import Color from "./components/Color.js";


function App() {
const carinfo = {name:"Ford", model:"Mustang"}

const [color, setcolor] = useState("white")


  return (
    <div className="App">
      <header className="App-header">
        <Car model={carinfo.model} />
        <h3>The car is {color}</h3>
        <h4>It is a {color} {carinfo.name} {carinfo.model}</h4>
        <Garage size = "small" />
        <Events />  
        <Phone />
        <Color />
      </header>
    </div>
  );
}

export default App;
