import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Router, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About';
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/Appointments'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import AppContextProvider from './Context/AppContext'
import Appointments from './Pages/Appointments'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div className='mx-4 sm:mx-[10%]'>
   <Navbar/>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
     <Route path='/doctors/:specility' element={<Doctors/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/my-profile' element={<MyProfile/>}/>
     <Route path='/appointments' element={<Appointments/>}/>
     <Route path='/appoinment/:docId' element={<Appointments/>}/>

      </Routes>
    <Footer/>
  </div>
  )
}

export default App
