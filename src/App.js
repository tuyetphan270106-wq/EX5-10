import logo from './logo.svg';
import './App.css';
// import Hello from './slot3/DemoProp';
import User from './slot3/DemoProp';
import DemoState from './slot3/DemoState';
import DemoState1 from './slot3/DemoState1';
import DemoState2 from './slot3/DemoState2';
import Baitap10 from './slot3/Baitap10';

function App() {
  const user = [
    {
      id: 1,
      name: "John",
      age: 20,
      address: "Ha Noi"
    },
    {
      id: 2,
      name: "Joe",
      age: 18,
      address: "Quang Ninh"
    },
    {
      id: 3,
      name: "Joa",
      age: 20,
      address: "Hai Phong"
    }
  ];
  function handleClick() {
    alert("Button duoc chon!");
  }
  return (
    <div className="App">
      <Baitap10 />

    </div>
  );
}


export default App;
