

import './App.css'
import { Route,  Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import Login from './Pages/Login'
import About from './Pages/About';
import MyProfile from './Pages/MyProfile'
//import MyAppointments from './Pages/Appointments'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
//import AppContextProvider from './Context/AppContext'
import Appointments from './Pages/Appointments'
import MyAppointent from './Pages/My-Appointent'

import AuthProvider from './provider/AuthProvider'
import AppContextProvider from './Context/AppContext'
import SignUp from './Pages/Signup'
import ContactUs from './Pages/Contact'



function App() {
 

  return (
    <AuthProvider>
      <AppContextProvider>

      
  <div className='mx-4 sm:mx-[10%]'>
   <Navbar/>
   
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/doctors' element={<Doctors/>}/>
     <Route path='/doctors/:specility' element={<Doctors/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/login' element={<Login/>}/>
     <Route path='/about' element={<About/>}/>
     <Route path='/contact' element={<ContactUs/>}/>
     <Route path='/my-profile' element={<MyProfile/>}/>
    
    <Route path='/appointment/:docId' element={<Appointments/>}/>
     <Route path='/appointments' element={<Appointments/>}/>
     <Route path='/my-appointments' element={<MyAppointent/>}/>


      </Routes>
    <Footer/>
  </div>
  </AppContextProvider>
    </AuthProvider>
  )
}

export default App
