import senvii from "../../assets/senvii01.png";
import { motion } from "framer-motion";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import urbana from "../../assets/urbana.png";
import rural from "../../assets/rural.png";
import autopista from "../../assets/autopista.png";
import { Background } from "../../components";
import Report from "../../components/Report";

export default function Diagnose() {
  const [text, count] = useTypewriter({
    words: ["Coméntanos más acerca de la vía"],
    typeSpeed: 40,
    delaySpeed: 1500,
  });

  return (
    <main className="snap snap-mandatory">
      <section className="h-screen overflow-hidden w-main mx-auto pb-4 pt-[22vh]">
        <Background
          className="h-screen absolute left-0 w-screen -z-10 top-0"
          plain={true}
        />
        {/* character container */}
        <div className="h-[20vh] fixed top-0 w-full bg-zinc-600 left-0">
          <div className="mx-auto w-main h-full grid grid-character gap-3">
            <img src={senvii} alt="senvii" className="w-22 h-22 self-center object-cover" />
            <h1 className="text-dark-600 p-2 text-md text-center bg-white mr-2 rounded-md h-fit mt-8 w-fit relative">
              <div className="h-4 w-4 absolute -left-4 bg-white path-triangle top-3" />

              {text}
              <Cursor
                cursorStyle={<span className="animate-ping">_</span>}
                cursorBlinking={false}
              />
            </h1>
          </div>
        </div>

        <motion.div
          initial={{ height: "0" }}
          animate={{ height: "100%" }}
          transition={{ duration: 0.8, bounce: 1 }}
          className="w-[95%] bg-white mx-auto flex flex-col justify-between items-center py-6 rounded-md overflow-hidden"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
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
            href="#report"
            className="bg-black text-white py-2 px-14 rounded-full"
          >
            Continuar
          </motion.a>
        </motion.div>
      </section>

      <section id="report" className="h-screen snap-start grid place-content-center">
        <Report />
      </section>
    </main>
  );
  // here goes the app
}
