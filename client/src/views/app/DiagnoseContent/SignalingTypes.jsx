import { useState } from "react";
import { motion } from "framer-motion";

export default function SignalingTypes({ data, setForm, setCurrent }) {
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
    <div>
      {data.map((type) => (
        <div
          key={type.id}
          onClick={() => addToSignaling(type)}
          className={`${
            selectedTypes.find((val) => val.id === type.id) && "bg-zinc-400"
          } cursor-pointer`}
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
            console.log(newForm);
            return newForm;
          });
          setCurrent("questions");
        }}
        className="bg-black text-white py-2 px-14 rounded-full"
      >
        Continuar
      </motion.button>
    </div>
  );
}
