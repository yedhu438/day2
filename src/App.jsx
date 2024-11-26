import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar/>
     <Statebasics/>
     <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/" element={<Signup/>}/>
     <Route path="/state" element={<Statebasics/>}/>

    


     </Routes>
    
    


    </>
  )
}

export default App
