import React from 'react'
import { HiEnvelope } from "react-icons/hi2";
import {motion} from 'framer-motion'

const PopUp = () => {
  return (
    <div className='h-screen w-full bg-slate-900/80 absolute grid place-items-center'>
        <div className='w-[95%] h-72 bg-slate-900 absolute p-6 flex flex-col justify-evenly items-center'>
            <h2 className='text-white text-3xl text-center'>Enviamos un mail a su correo</h2>
            <motion.div
            initial={{opacity: 0, x:-200}}
            animate={{opacity: 1, x:0}}
            transition={{duration: 0.4}}>
    
            <HiEnvelope className='text-yellow-500 text-5xl'/>
            </motion.div>
        </div>
    </div>
  )
}

export default PopUp