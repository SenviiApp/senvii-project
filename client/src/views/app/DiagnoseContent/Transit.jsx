import { motion } from "framer-motion";
import urbana from "../../../assets/urbana.png";
import rural from "../../../assets/rural.png";
import autopista from "../../../assets/autopista.png";
import { useEffect, useState } from "react";

export default function Zones({ setStep, data }) {
  const [translate, setTranslate] = useState(0);
  const [transit, setTransit] = useState();
  useEffect(() => {
    console.log(translate);
  }, [translate]);
  return (
    <motion.div
      initial={{ height: 0 }}
      animate={{ height: "70vh" }}
      exit={{ height: 0 }}
      transition={{ duration: 0.8, bounce: 1, delay: 1 }}
      className="overflow-hidden"
    >
      <div className="w-main bg-white mx-auto flex flex-col justify-between items-center py-6 rounded-md h-[70vh]">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ¿Qué necesitas señalizar?
        </motion.h2>

        <motion.div
          className="mx-auto w-[200px] rounded-md overflow-hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <motion.div
            className="flex w-fit"
            animate={{ x: -translate }}
            transition={{ bounce: false }}
          >
            {data.map(({ id, name }) => {
              return (
                <div
                  key={id}
                  className="w-[200px] bg-slate-400 flex flex-col items-center gap-2 py-4 text-snow"
                >
                  <img src={urbana} alt="" className="w-36" />
                  <h3>{name}</h3>
                </div>
              );
            })}
          </motion.div>
        </motion.div>
        <span onClick={() => setTranslate(translate + 200)}>CLICKEA PUTO</span>
        <span onClick={() => setTranslate(translate - 200)}>
          CLICKEA PUTO (-)
        </span>
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          // onClick={() => {
          //   setStep(3);
          // }}
          className="bg-black text-white py-2 px-14 rounded-full"
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}
