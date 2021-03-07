import React,{useState} from 'react'
import SideBar from '../SideBar/Index'
import Navbar from '../Navbar/Index'

const Home = () => {
    const [isOpen,setIsOpen]=useState(false)

    const toggle =()=>{
      setIsOpen(!isOpen)
    }
  
    return (
        <>
          <SideBar isOpen={isOpen} toggle={toggle}/>  
          <Navbar toggle={toggle}/>
        </>
    )
}

export default Home
