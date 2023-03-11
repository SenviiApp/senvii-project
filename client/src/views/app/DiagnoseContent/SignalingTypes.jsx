import { useState } from "react";
import { motion } from "framer-motion";

export default function SignalingTypes({ data, setForm, setCurrent, render }) {
  const [selectedTypes, setTypes] = useState([]);

  const addToSignaling = (type) => {
    const selected = selectedTypes.find((val) => val.id === type.id);
    if (selected) {
      setTypes(selectedTypes.filter((val) => val.id !== type.id));
    } else {
      setTypes([...selectedTypes, type]);
    }
  };
  return (
    <motion.div
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: -500 }}
      transition={{ duration: 1, type: "spring", bounce: false }}
      className="absolute top-0 w-full max-w-sm h-full flex flex-col items-center justify-center gap-6 mx-auto text-center px-2"
      onViewportEnter={() => render("¿Qué vas a señalizar?")}
    >
      {data.map((type) => (
        <div
          key={type.id}
          onClick={() => addToSignaling(type)}
          className={`${
            selectedTypes.find((val) => val.id === type.id) &&
            "bg-light-400 text-white"
          } cursor-pointer transition-colors duration-300 ease-out w-full border-2 border-light-400 rounded-full py-2`}
        >
          {type.content}
        </div>
      ))}
      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        onClick={() => {
          setForm((form) => {
            const newForm = { ...form, signalingTypes: selectedTypes };
            return newForm;
          });
          setCurrent("questions");
        }}
        disabled={!selectedTypes.length}
        className="bg-black text-white py-2 px-14 rounded-full mt-4 disabled:bg-zinc-400 transition-colors ease-out duration-500"
      >
        Continuar
      </motion.button>
    </motion.div>
  );
}
