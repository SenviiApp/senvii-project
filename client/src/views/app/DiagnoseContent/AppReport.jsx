import React from "react";
import ReportBackground from "../../../components/ReportBackground";
import senviLogo from "../../../assets/logoW.png";
import pramaLogo from "../../../assets/pdf/prama_logo_ico.png";
import { motion } from "framer-motion";
import lupa from "../../../assets/pdf/lupa_grafico.png";
import { PDFDownloadLink } from "@react-pdf/renderer";
import DocumentPDF from "../../../components/DocumentPDF";
import { useNavigate } from "react-router-dom";

const AppReport = ({ form, userData }) => {
  const navigate = useNavigate();

  const getFriendlyDate = () => {
    const fecha = new Date();
    const dia = fecha.getDate().toString().padStart(2, "0");
    const mes = (fecha.getMonth() + 1).toString().padStart(2, "0");
    const año = fecha.getFullYear();

    return `${dia}-${mes}-${año}`;
  };

  const backToHome = () => {
    navigate("/");
  };
  return (
    <>
      <section className="h-full w-full relative">
        <ReportBackground className="w-full h-full" />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 w-full flex p-4 md:p-8 justify-between lg:justify-around"
        >
          <motion.img
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={senviLogo}
            alt=""
            className="h-6 md:h-12"
          />
          <motion.img
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            src={pramaLogo}
            alt=""
            className="h-6 md:h-12"
          />
        </motion.div>
        <div className="absolute bottom-0 p-2 md:p-8 gap-1 flex items-end justify-between w-full">
          <div className="flex w-[48%] md:w-[30%] lg:w-[20%] items-center">
            <motion.img
              initial={{ rotateZ: 0 }}
              animate={{
                rotateZ: [0, -15, 0, 15, 0, -15, 0, 15, 0, -15, 0, 15, 0],
              }}
              transition={{
                duration: 0.5,
                delay: 1,
                repeat: Infinity,
                repeatDelay: 2,
              }}
              src={lupa}
              alt=""
              className="h-20 md:h-24 lg:h-32"
            />
            <h2 className="text-sm md:text-xl text-left text-white ml-2">
              Resultados del Diagnóstico vial <span>2023</span>
            </h2>
          </div>
          <h2 className="text-xs md:text-lg text-white mr-4">www.senvii.com</h2>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="absolute bottom-[5.5rem] md:bottom-10 w-full  flex justify-center"
        >
          <PDFDownloadLink
            document={<DocumentPDF form={form} userData={userData} />}
            fileName={`${userData.userName}_${
              userData.id
            }_${getFriendlyDate()}.pdf`}
            className="uppercase bg-black px-4 py-2 text-sm lg:px-8 lg:py-4 text-white rounded-md lg:text-xl"
            onClick={backToHome}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "descargar reporte"
            }
            descargar reporte
          </PDFDownloadLink>
        </motion.div>
      </section>
    </>
  );
};

export default AppReport;
