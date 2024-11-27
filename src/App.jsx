import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/login'
import Signup from './components/Signup'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Statebasics from './components/Statebasics'
import Counter from './components/Counter'
import CounterApp from './components/Counter'
import Buttons from './components/Buttons'
import Listmap from './components/Listmap'
import Api from './components/Api'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
     <Navbar/>
     
     <Routes>
     <Route path="/login" element={<Login/>}/>
     <Route path="/" element={<Signup/>}/>
     <Route path="/state" element={<Statebasics/>}/>
     <Route path="/count" element={<CounterApp/>}/>
     <Route path="/button" element={<Buttons/>}/>
     <Route path="/apio" element={<Api/>}/>
     
    


     </Routes>
    
    


    </>
  )
}

export default App
