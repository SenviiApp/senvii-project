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
import DocumentPDF from "../../components/DocumentPDF";
import AppReport from "./DiagnoseContent/AppReport";
import { pdf } from "@react-pdf/renderer";
import { useLoaderData } from "react-router-dom";
import stlyes from "../../styles/container.module.css";

export default function Diagnose() {
  const userData = useLoaderData();
  const { output, render } = useWriter("Coméntanos más acerca de la vía");
  const [form, setForm] = useState(getinitialForm());
  const [isFormFull, setFormFull] = useState(false);
  const [current, setCurrent] = useState("start");
  const [section, setSection] = useState("zone");
  const scrollToSection = (id) => {
    let sec = document.getElementById(id);
    sec?.scrollIntoView({ block: "start" });
  };
  useEffect(() => {
    scrollTo({ top: 0 });
    // document.body.style.overflow = "hidden";
    // scrollToSection("appReport")
  }, []);

  // useEffect(() => {
  //   console.log(form);
  // }, [isFormFull]);

  return (
    <>
      <Background
        className="h-full fixed left-0 w-full -z-10 top-0"
        plain={true}
      />
      {current === "start" && (
        <section
          id="start"
          className={`${stlyes.safe_viewport} grid place-items-center w-full`}
        >
          <Start scrollToSection={scrollToSection} setCurrent={setCurrent} />
        </section>
      )}

      {current === "initialForm" && (
        <section
          id="initialForm"
          className={`${stlyes.safe_viewport} grid place-items-center w-full`}
        >
          <InitialForm
            setCurrent={setCurrent}
            setForm={setForm}
            scrollToSection={scrollToSection}
          />
        </section>
      )}

      {current === "form" && (
        <>
          <section
            id="main"
            className={`${stlyes.safe_viewport} pb-4 pt-[22vh] relative`}
          >
            {/* character container */}
            <motion.div
              initial={{ y: -200 }}
              animate={{
                y: current ? 0 : -200,
              }}
              transition={{ bounce: false }}
              className="h-[20vh] fixed top-0 w-full bg-zinc-600 left-0 z-50"
            >
              <div className="mx-auto w-main h-full grid grid-character gap-3">
                <a href="/" className="object-cover self-center">
                  <motion.img
                    onViewportEnter={() =>
                      render("Cuéntanos más acerca de la vía")
                    }
                    src={senvii}
                    alt="senvii"
                    className="w-22 h-22 self-center object-cover"
                  />
                </a>
                <h1 className="text-dark-600 p-2 text-md text-center bg-white mr-2 rounded-md h-fit mt-8 w-fit relative">
                  <div className="h-4 w-4 absolute -left-4 bg-white path-triangle top-3" />
                  {output}
                  <Cursor
                    cursorStyle={<span className="animate-ping">_</span>}
                    cursorBlinking={false}
                  />
                </h1>
              </div>
            </motion.div>

            {/* form container */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: "70vh" }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.2,
                type: "spring",
                bounce: false,
              }}
              className="overflow-hidden w-main bg-white mx-auto rounded-md h-[70vh] flex justify-center items-center relative"
            >
              {/* start section */}
              <AnimatePresence>
                {section === "zone" && (
                  <Zones setCurrent={setSection} setForm={setForm} />
                )}
              </AnimatePresence>

              {/* transit section */}
              <AnimatePresence>
                {section === "transit" && (
                  <Transit
                    setCurrent={setSection}
                    data={getTransitOptions(form)}
                    setForm={setForm}
                  />
                )}
              </AnimatePresence>

              {/* signaling section */}
              <AnimatePresence>
                {section === "signalingTypes" && (
                  <SignalingTypes
                    data={getAvailableSignaling(form)}
                    setForm={setForm}
                    setCurrent={setSection}
                    render={render}
                  />
                )}
              </AnimatePresence>

              {/* question questions */}
              <AnimatePresence>
                {section === "questions" && (
                  <Questions
                    data={getAvailableQuestions(form)}
                    setForm={setForm}
                    setCurrent={setCurrent}
                    scrollToSection={scrollToSection}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          </section>
        </>
      )}
      {current === "generateReport" && (
        <section
          id="report"
          className={`${stlyes.safe_viewport} grid place-content-center`}
        >
          <Report
            form={form}
            setForm={setForm}
            setCurrent={setCurrent}
            setFormFull={setFormFull}
          />
        </section>
      )}
      <AnimatePresence>
        {current === "appReport" && (
          <motion.section
            id="appReport"
            className={`${stlyes.safe_viewport} overflow-x-hidden fixed z-[9999] w-full top-0`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <AppReport form={form} userData={userData} />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
  // here goes the app
}
