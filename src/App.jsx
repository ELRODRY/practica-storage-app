import { useState } from "react";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0)

  const firstInput = (e) => {
    console.log(e);
  };
  const secondInput = (e) => {
    console.log(e);
  };

  return (
    <>
      <input type="number" onChange={(e) => firstInput(e.target.value)} />
      <button>+</button>
      <button>-</button>
      <button>x</button>
      <button>/</button>
      <input type="number" onChange={(e) => secondInput(e.target.value)} />
      <div className="result">
        <p>000</p>
      </div>
    </>
  );
}

export default App;
