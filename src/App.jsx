
import "./App.css";

function App() {

  const handleinputLeft = (event) => {
    event.preventDefault()
    const form = event.target;
    const formData = new FormData(form);
    // Iterar sobre los datos del formulario
    formData.forEach((value, name) => {
      console.log(`${name}: ${value}`);

    });
  };
  /* const add = () => {
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
   };*/

  return (
    <div id="container">
      <form onSubmit={(e) => { handleinputLeft(e) }}>

        <input
          name="left"
          type="number"
        />

        <input
          name="right"
          type="number"


        />

      </form>
      {/* <div id="buttons">
        <div id="" addRest>
          <button onClick={add}>+</button>
          <button onClick={rest}>-</button>
        </div>
        <button onClick={multiply}>x</button>
        <button onClick={divide}>/</button>
        <div id="clear">
          <button onClick={clear}>Clear</button>
        </div>
      </div> */}

      {/* <div className="result">
        <p>{result}</p>
      </div> */}
    </div>
  );
}

export default App;
