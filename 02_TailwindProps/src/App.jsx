import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-red-100">
        <h1 className="text-blue-600 text-6xl font-bold">Tailwind Works!</h1>
      </div>
    </>
  );
}

export default App
