import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [inputLeft, setInputLeft] = useState(
    window.localStorage.getItem("inputLeft") ?? 0
  );
  const [inputRight, setInputRight] = useState(
    window.localStorage.getItem("inputRight") ?? 0
  );
  const [result, setResult] = useState(
    window.localStorage.getItem("resultValue")
  );

  useEffect(() => {
    window.localStorage.setItem("resultValue", result);
  }, [result]);
  useEffect(() => {
    window.localStorage.setItem("inputLeft", inputLeft);
  }, [inputLeft]);
  useEffect(() => {
    window.localStorage.setItem("inputRight", inputRight);
  }, [inputRight]);

  const onChangeHandler = (value, inputs) => {
    if (inputs == "left") {
      setInputLeft(value);
    } else {
      setInputRight(value);
    }
  };

  const add = () => {
    setResult(Number(inputLeft) + Number(inputRight));
  };
  const rest = () => {
    setResult(inputLeft - inputRight);
  };

  const multiply = () => {
    setResult(inputLeft * inputRight);
  };

  const divide = () => {
    setResult(inputLeft / inputRight);
  };
  const clear = () => {
    setResult(0), setInputLeft(""), setInputRight("");
  };

  // Funcionando

  return (
    <div id="container">
      <input
        id="left"
        type="number"
        value={inputLeft}
        onChange={(e) => onChangeHandler(e.target.value, "left")}
      />
      <div id="buttons">
        <div id="" addRest>
          <button onClick={add}>+</button>
          <button onClick={rest}>-</button>
        </div>
        <button onClick={multiply}>x</button>
        <button onClick={divide}>/</button>
        <div id="clear">
          <button onClick={clear}>Clear</button>
        </div>
      </div>
      <input
        id="right"
        type="number"
        value={inputRight}
        onChange={(e) => onChangeHandler(e.target.value, "right")}
      />
      <div className="result">
        <p>{result}</p>
      </div>
    </div>
  );
}

export default App;
