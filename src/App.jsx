import { Outlet } from 'react-router-dom'
import {useEffect} from "react";
import Navbar3 from './pages/components/Navbar3'
import Footer from './pages/components/Footer'
import './App.css'


function App() {


  return (
    <>
     <Navbar3/>
      <Outlet />
      <Footer/>
    </>
  )
}

export default App
