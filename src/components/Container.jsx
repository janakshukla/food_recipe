import React from 'react'
import{ NavbarWithSearch} from "./Navbar";

const Container = ({children}) => {
  return (
   <div className='flex-col flex justify-center items-center'>
    <NavbarWithSearch/>
  {children }
   </div>
  )
}

export default Container