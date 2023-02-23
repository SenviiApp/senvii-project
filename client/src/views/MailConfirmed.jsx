import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { BsEmojiSmile } from "react-icons/bs";
import { Cursor, useTypewriter } from "react-simple-typewriter";

const MailConfirmed = () => {

  const navigate = useNavigate();

  const [text, count] = useTypewriter({
    words: [
      "Redirigiendo..."
    ],
    delaySpeed: 800,
    loop: true
  });

//   useEffect(() => {
//     setTimeout(() => {navigate("/login")}, 5000)
//   }, [])

  return (
    <div className="h-screen bg-slate-800 grid items-center loginBg">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          },
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="backdrop-blur-sm bg-light-500/70 text-white w-[90%] md:w-[60%] lg:w-[50%] md:h-96 mx-auto text-center p-5 space-y-6 lg:space-y-10 xl:space-y-20 flex flex-col justify-center items-center rounded-lg"
      >
        <motion.h1 className="text-xl md:text-4xl text-center">
          Mail confirmado con éxito!
        </motion.h1>

        <motion.div
          initial={{ rotateZ: 0 }}
          animate={{ rotateZ: [0, 15, 30, 15, 0, -15, -30, -15, 0, 15, 30, 15, 0] }}
          transition={{ duration: .8, delay: 1 }}
        >
          <BsEmojiSmile className="text-5xl md:text-7xl " />
        </motion.div>
        <h2 className="text-xl md:text-3xl">
        <span>{text}</span>
        <Cursor cursorColor="#2A2E33" />    
        </h2>
      </motion.div>
    </div>
  );
};

export default MailConfirmed;
