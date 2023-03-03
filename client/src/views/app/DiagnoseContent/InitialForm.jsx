import React from "react";
import { motion } from "framer-motion";
import { SiTestinglibrary } from "react-icons/si";

const InitialForm = ({ setCurrent, setForm }) => {
  return (
    <div>
      <h1>Ayúdanos a completar la información de la vía</h1>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => {
          setForm((form) => {
            const newForm = { ...form };
            console.log(newForm);
            return newForm;
          });
          setCurrent("start");
        }}
        className="bg-black text-white py-2 px-14 rounded-full"
      >
        Continuar
      </motion.button>
    </div>
  );
};

export default InitialForm;
