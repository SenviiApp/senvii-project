import React from "react";
import { HiEnvelope } from "react-icons/hi2";
import { animate, motion } from "framer-motion";

const PopUp = ({ open }) => {
  const animation = {
    close: {
      opacity: 0,
    },
    open: {
      opacity: 1,
    },
  };

  return (
    <motion.div
      initial="close"
      animate="open"
      exit="close"
      transition={{ duration: 0.2 }}
      variants={animation}
      className="h-screen w-full bg-slate-900/80 absolute grid place-items-center"
    >
      <div className="w-[95%] h-72 bg-slate-900 absolute p-6 flex flex-col justify-evenly items-center rounded-lg">
        <h2 className="text-white text-3xl text-center">
          Enviamos un mail a su correo
        </h2>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4}}
        >
          <motion.div
            initial={{x: 0}}
            animate={{x:[-10, 10, -10, 10, -10, 0, 0, 0, 0, 0]}}
            transition={{repeat: Infinity, duration: 1.5, delay: 1.2}}>
            <HiEnvelope className="text-yellow-500 text-5xl"/>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PopUp;
