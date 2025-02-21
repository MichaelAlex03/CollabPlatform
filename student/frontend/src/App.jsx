import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<div>Home</div>} />
        <Route path='/register' element={<div>Register</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
