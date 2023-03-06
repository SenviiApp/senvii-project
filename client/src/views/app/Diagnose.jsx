import Report from "../../components/Report";
import Start from "../app/DiagnoseContent/Start";
import Zones from "./DiagnoseContent/Zones";
import Transit from "./DiagnoseContent/Transit";
import Questions from "./DiagnoseContent/Questions";
import { useEffect, useState } from "react";
import { Background } from "../../components";
import senvii from "../../assets/senvii01.png";
import { Cursor } from "react-simple-typewriter";
import {
  getTransitOptions,
  getinitialForm,
  getAvailableQuestions,
  getAvailableSignaling,
} from "../../../data/options";
import { AnimatePresence, motion } from "framer-motion";
import { useWriter } from "../../hooks/useWriter";
import SignalingTypes from "./DiagnoseContent/SignalingTypes";
import InitialForm from "./DiagnoseContent/InitialForm";

export default function Diagnose() {
  const { text, trigger } = useWriter("Coméntanos más acerca de la vía");
  const [form, setForm] = useState(getinitialForm());

  const [current, setCurrent] = useState("initialForm");

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  const scrollToSection = (id) => {
    let sec = document.getElementById(id);
    sec?.scrollIntoView(true);
  };

  return (
    <main>
      <Background
        className="h-screen fixed left-0 w-full -z-10 top-0"
        plain={true}
      />
      <section id="start" className="h-screen flex flex-col items-center justify-center">
        <Start scrollToSection={scrollToSection} setCurrent={setCurrent} />
      </section>

      <section id="main" className="h-screen pb-4 pt-[22vh] relative flex items-center justify-center">
        {/* character container */}
        <motion.div
          initial={{ y: -200 }}
          animate={{
            y: current !== "start" ? 0 : -200,
          }}
          transition={{ bounce: false }}
          className="h-[20vh] fixed top-0 w-full bg-zinc-600 left-0 z-50"
        >
          <div className="mx-auto w-main h-full grid grid-character gap-3">
            <a href="/" className="object-cover self-center">
              <motion.img
                onViewportEnter={trigger}
                src={senvii}
                alt="senvii"
                className="w-22 h-22 self-center object-cover"
              />
            </a>
            <h1 className="text-dark-600 p-2 text-md text-center bg-white mr-2 rounded-md h-fit mt-8 w-fit relative">
              <div className="h-4 w-4 absolute -left-4 bg-white path-triangle top-3" />
              {text}
              <Cursor
                cursorStyle={<span className="animate-ping">_</span>}
                cursorBlinking={false}
              />
            </h1>
          </div>
        </motion.div>

        {/* form container */}
        <AnimatePresence>
          {current === "initialForm" && (
            <InitialForm setCurrent={setCurrent} setForm={setForm} />
          )}
        </AnimatePresence>

        <AnimatePresence>
          {(current === "start" || current === "zone") && (
            <Zones setCurrent={setCurrent} setForm={setForm} />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {current === "transit" && (
            <Transit
              setCurrent={setCurrent}
              data={getTransitOptions(form)}
              setForm={setForm}
            />
          )}
        </AnimatePresence>
        {current === "signalingTypes" && (
          <SignalingTypes
            data={getAvailableSignaling(form)}
            setForm={setForm}
            setCurrent={setCurrent}
          />
        )}
        {current === "questions" && (
          <Questions
            data={getAvailableQuestions(form)}
            setForm={setForm}
            setCurrent={setCurrent}
          />
        )}
      </section>

      <section id="report" className="h-screen grid place-content-center">
        <Report />
      </section>
    </main>
  );
  // here goes the app
}
