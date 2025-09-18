import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("http://localhost:4000/api/ping")
      .then((res) => res.json())
      .then((data) => setMsg(data.message))
      .catch((err) => setMsg(`Error conectando con backend ❌ ${err}`));
  }, []);

  return (
    <>
      <div>
        <div>
          <h1>Frontend conectado ✅</h1>
          <p>Respuesta del backend: {msg}</p>
        </div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
