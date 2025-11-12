import { useState,useCallback, useEffect, useRef } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharacterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null)
  
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz"
    if (isNumberAllowed) str += "0123456789"
    if (isCharacterAllowed) str += "!£$%^&*_+{}[]~#"
    
    for (let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, isNumberAllowed, isCharacterAllowed, setPassword]);
  
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
    },[length,isNumberAllowed,isCharacterAllowed,passwordGenerator])
  
  return (
    <>
      <div className="w-full max-w-md mx-auto my-10 p-8 bg-gray-800 rounded-2xl shadow-xl border border-gray-700 text-white">
        {/* Title */}
        <h1 className="text-3xl font-bold text-center mb-8 text-blue-400 drop-shadow-sm">
          🔐 Password Generator
        </h1>

        {/* Password Field + Copy Button */}
        <div className="flex items-center gap-3 mb-6">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="flex-1 rounded-lg px-3 py-2 bg-gray-700 text-gray-200 border border-gray-600 outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your generated password"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="bg-blue-600 hover:bg-blue-500 active:scale-95 text-white px-4 py-2 rounded-lg font-medium transition-transform"
          >
            Copy
          </button>
        </div>

        {/* Controls */}
        <div className="space-y-4 text-sm">
          {/* Length */}
          <div className="flex items-center justify-between">
            <label htmlFor="length" className="font-medium">
              Length:{" "}
              <span className="text-blue-400 font-semibold">{length}</span>
            </label>
            <input
              id="length"
              type="range"
              min={6}
              max={24}
              value={length}
              className="w-2/3 cursor-pointer accent-blue-500"
              onChange={(e) => setLength(e.target.value)}
            />
          </div>

          {/* Options */}
          <div className="grid grid-cols-2 gap-3">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isNumberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="accent-blue-500"
              />
              <span>Include Numbers</span>
            </label>

            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={isCharacterAllowed}
                onChange={() => setCharacterAllowed((prev) => !prev)}
                className="accent-blue-500"
              />
              <span>Include Symbols</span>
            </label>
          </div>
        </div>

        {/* Generate Button */}
        <button
          onClick={passwordGenerator}
          className="w-full mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-3 rounded-xl text-lg font-semibold transition-transform hover:scale-[1.02]"
        >
          Generate Password
        </button>
      </div>
    </>
  );
}

export default App
