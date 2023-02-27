import senvii from "../../assets/senvii01.png";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import urbana from "../../assets/urbana.png";
import rural from "../../assets/rural.png";
import autopista from "../../assets/autopista.png";

export default function Diagnose() {
  const [text, count] = useTypewriter({
    words: ["Coméntanos más acerca de la vía"],
    typeSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <div className="h-screen bg-light-300 overflow-hidden">
      <div className="h-[20%] relative">
        <div>
          <img src={senvii} alt="" className="w-24 absolute left-2 top-6" />
        </div>
        <h1 className="text-dark-600 absolute top-8 ml-28 p-2 text-md text-center bg-white mr-2 rounded-md">
          <div>
            {text}
            <Cursor/>
          </div>
        </h1>
      </div>

      <motion.div
        initial={{ height: "0" }}
        animate={{ height: "75%" }}
        transition={{ duration: 1, bounce: 1 }}
        className="w-[95%] bg-white h-[50%] mx-auto mt-4 flex flex-col justify-between items-center py-6 rounded-md"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          ¿Qué necesitas señalizar?
        </motion.h2>
        <motion.img
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          src={urbana}
          alt=""
          className="w-28 focus:border-light-500 h-24 p-4 bg-slate-200 rounded-lg"
        />
        <motion.img
          initial={{ opacity: 0, x: 300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          src={autopista}
          alt=""
          className="w-28 focus:border-light-500 h-24 p-4 bg-slate-200 rounded-lg"
        />
        <motion.img
          initial={{ opacity: 0, x: -300 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          src={rural}
          alt=""
          className="w-28 focus:border-light-500 h-24 p-4 bg-slate-200 rounded-lg"
        />
        <motion.a
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          href=""
          className="bg-black text-white py-2 px-14 rounded-full"
        >
          Continuar
        </motion.a>
      </motion.div>
    </div>
  );
  // here goes the app
}
