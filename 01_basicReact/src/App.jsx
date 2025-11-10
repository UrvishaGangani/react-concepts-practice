import { useState } from 'react'

function App() {
  let [counter, setCount] = useState(0);
  // let counter = 0;
  const addValue = () => {
    counter = (counter<20)?counter + 1:counter;
    console.log(counter)
    setCount(counter);
  }
  const removeValue = () => {
    counter = (counter > 0)?counter - 1:counter;
    console.log(counter);
    setCount(counter);
  };
  return (
    <>
      <h1>Hello React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
    </>

  
  )
}

export default App
