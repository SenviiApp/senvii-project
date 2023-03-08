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
      initial={{ y: 500 }}
      animate={{ y: 0 }}
      exit={{ y: -500 }}
      transition={{ duration: 1, type: "spring", bounce: false }}
      className="absolute top-0 w-full max-w-sm h-full flex flex-col items-center justify-center gap-6 mx-auto text-center"
    >
      <h2>¿Cuántos vehículos diarios transitan la autopista?</h2>

      <div className="flex">
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
      </div>

      <motion.button
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        onClick={() => {
          setForm((form) => {
            const newForm = { ...form, transit };
            return newForm;
          });
          setCurrent("signalingTypes");
        }}
        className="bg-black text-white py-2 px-14 rounded-full"
      >
        Continuar
      </motion.button>
    </motion.div>
  );
}
