import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';




const Navbar = () => {
  const [activeHam, setActiveHam] = useState(false);


  return (

    <motion.div className="max-auto flex items-start justify-start left-[20px] right-[20px] top-[20px] h-[50x] text-white font-bold px-3 py-3 bg-black"

      animate={activeHam ? {
        height: 280,
      } : {
        height: 50,
      }}
      transition={{
        ease: [0.83, 0, 0.17, 1],
        duration: 1,

      }}
      exit={{}}>
      {/*logo */}

      <div className="flex items-center justify-start">
        <p className='font-black uppercase bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent text-2xl'>LogiPlacement</p>
      </div>



      {/*desk div*/}
      <div className="flex items-center justify-center w-full h-[30px] text-lg">
        <div className="hidden md:block text:md cursor-pointer">
          <div className='flex items-center justify-center gap-10'>

            <Link to="/" className='hover:text-green-500'>Home</Link>
            <Link to="/prediction" className='hover:text-green-500'>Prediction</Link>
            <Link to="/resume" className='hover:text-green-500'>Resume</Link>
            <Link to="/aptitude" className='hover:text-green-500'>Aptitude</Link>
            <Link to="/aboutus" className='hover:text-green-500'>AboutUs</Link>
            <Link to="/signup" className='hover:text-green-500'>Signup</Link>

          </div>
        </div>
      </div>

      <div className="text-lg cursor-pointer sm:hidden" onClick={() => {
        setActiveHam(!activeHam);

      }}>
        <CiMenuBurger />
      </div>
      {/*mobile nav bar*/}

      <motion.div className='absolute top-[50px] text-sm flex flex-col items-start justify-center gap-4 opacity-0'
        animate={activeHam ? {
          opacity: 1,
          transition: {
            delay: 0.8,
          }
        } : {
          opacity: 0,
          transition: {
            delay: 0.15,
          }
        }}

      >
        <Link to="/" className='hover:text-green-500'>Home</Link>
        <Link to="/prediction" className='hover:text-green-500'>Prediction</Link>
        <Link to="/resume" className='hover:text-green-500'>Resume</Link>
        <Link to="/aptitude" className='hover:text-green-500'>Aptitude</Link>
        <Link to="/aboutus" className='hover:text-green-500'>AboutUs</Link>
        <Link to="/signup" className='hover:text-green-500'>Signup</Link>
      </motion.div>
    </motion.div>




  )
}

export default Navbar