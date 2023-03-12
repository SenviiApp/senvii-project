import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { easeOut, motion } from "framer-motion";
import { BsEmojiSmile } from "react-icons/bs";

const MailConfirmed = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/login");
    }, 5000);
  }, []);

  return (
    <div className="h-screen bg-zinc-600 grid place-items-center">
      <motion.div
        initial={{ opacity: 0.6, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 0.4,
            ease: [0, 0.71, 0.2, 1],
          },
          scale: {
            type: "spring",
            damping: 10,
            stiffness: 100,
            restDelta: 0.001,
          },
        }}
        className="bg-light-500/70 text-white w-popup text-center py-5 flex flex-col gap-y-6 justify-center items-center rounded-md"
      >
        <motion.h1 className="text-xl text-center">
          Mail confirmado con éxito!
        </motion.h1>

        <motion.div
          animate={{
            rotateZ: [0, -30, 30, -20, 20, -10, 10, 0],
          }}
          transition={{ duration: 1.3, delay: 0.3, ease: "easeOut" }}
        >
          <BsEmojiSmile className="text-5xl md:text-7xl " />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0.5 }}
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 1.4,
            repeat: Infinity,
            ease: easeOut,
          }}
          className="text-lg"
        >
          Redirigiendo al Login...
        </motion.h2>
      </motion.div>
    </div>
  );
};

export default MailConfirmed;
