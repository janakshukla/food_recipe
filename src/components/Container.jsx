import React from 'react'
import Navbar from "./Navbar";
const Container = ({children}) => {
  return (
   <>
      <Navbar />
   <div className='flex flex-col justify-center items-center' >
      {children}</div>
      </>
  )
}

export default Container