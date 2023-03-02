import { motion } from "framer-motion";
import urbana from "../../../assets/urbana.png";
// import rural from "../../../assets/rural.png";
// import autopista from "../../../assets/autopista.png";
import { useEffect, useState } from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

export default function Transit({ setCurrent, data, setForm }) {
  const [transit, setTransit] = useState(data[0].name);
  const [translate, setTranslate] = useState(0);
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    setTransit(data[frame].name);
  }, [translate]);

  const moveSlider = (frame) => {
    if (frame < 0 || frame > data.length - 1) return;
    setFrame(frame);
    setTranslate(frame * 200);
  };
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
          ¿Cuántos vehículos diarios transitan la autopista?
        </motion.h2>

        <motion.div
          className="flex"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <button
            onClick={() => moveSlider(frame - 1)}
            className="text-2xl p-4 text-dark-800"
          >
            <BsChevronLeft />
          </button>

          <div className="mx-auto w-[200px] overflow-hidden rounded-md">
            <motion.div
              className="flex w-fit"
              animate={{ x: -translate }}
              transition={{ bounce: false }}
            >
              {data.map(({ id, name }) => {
                return (
                  <div
                    key={name}
                    className="w-[200px] bg-slate-400 flex flex-col items-center gap-2 py-4 text-snow"
                  >
                    <img src={urbana} alt="" className="w-36" />
                    <h3>{name}</h3>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <button
            onClick={() => moveSlider(frame + 1)}
            className="text-2xl p-4 text-dark-800"
          >
            <BsChevronRight />
          </button>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          onClick={() => {
            setForm((form) => {
              const newForm = { ...form, transit };
              console.log(newForm);
              return newForm;
            });
            setCurrent("signalingTypes");
          }}
          className="bg-black text-white py-2 px-14 rounded-full"
        >
          Continuar
        </motion.button>
      </div>
    </motion.div>
  );
}
